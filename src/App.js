import React,{Component} from 'react';
import Drawer from './containers/Drawer/Drawer'
import './App.css';

 class App extends Component {
   constructor(props){
     super(props);
     this.state = {
      movies:[],
      directors: [],
      movieOfDirector:[],
     }
   }
   async componentDidMount(){
     const directors = await fetch('http://localhost:4000/api/directors');
     const directorsData = await directors.json();
     this.setState({directors: directorsData});
   }
   handleDirectorClick = (directorObject) => {
     console.log(directorObject)
     const id = directorObject.id;
    fetch(`http://localhost:4000/api/directors/${id}/movies`).then(response => response.json()).then(data=>  this.setState({movieOfDirector: data}))
         .catch(err => console.log('error'));
   }
   handleMovieDelete = (movieObj) => {
    fetch(`http://localhost:4000/api/movies/${movieObj.rank}`,{method: 'DELETE'})
      .then(response => response.json())
        .then(data => {
          if(data.affectedRows === 1){
            let movieData = this.state.movieOfDirector.slice();
            const  filterdData = movieData.filter(movie => {
              return movie.rank === movieObj.rank;
            });  
            this.setState({movieOfDirector: filterdData })
          }else{
            if( data.affectedRows === 0 ){
            
              this.setState({movieOfDirector: []})
              console.log(this.state.movieOfDirector)
              console.log(1)
            }
          }
          
        });
   }

   handleDirectorDelete = (directorObj) => {
     console.log(directorObj);
     fetch(`http://localhost:4000/api/directors/${directorObj.id}`,
      { method: "DELETE",
      headers: {'Content-Type': 'application/json'}})
       .then(response => response.json())
         .then(data => {
          if( data.affectedRows === 1 ){
            let directorList = this.state.directors.slice();
            let filterdDirector = directorList.filter(director => director.id !== directorObj.id);
            console.log(filterdDirector)
            this.setState({directors: filterdDirector});
             console.log(this.state.directors)
          }  
           
         }).catch(v => console.log(v));
     
   }
    
    render() { 
      const { directors,movieOfDirector } = this.state
      return ( 
        <div>
         <Drawer directors={directors} 
            handleDirectorClick = { this.handleDirectorClick }
            movieOfDirector={movieOfDirector}
            handleMovieDelete={this.handleMovieDelete}
            handleDirectorDelete={this.handleDirectorDelete}
         />
        </div>
      );
    }
 }
  
 export default App;
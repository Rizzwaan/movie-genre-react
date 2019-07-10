import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    minWidth: 100,
    width: 250,
    margin: '1em'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();
  const { movieData, handleMovieDelete } = props;
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         {movieData.director_name}
        </Typography>
        <Typography variant="h5" component="h2">
          {movieData.title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
           {movieData.genre}
        </Typography>
        <Typography variant="body2" component="p">
           Runtime : {movieData.runtime} mins
          <br />
          Rating: {movieData.rating}
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small" variant="contained" color="primary" onClick={() => handleMovieDelete(movieData)}>
           Delete
        </Button>
        <Button size="small" variant="contained" color="secondary">
          Edit
        </Button>
      </CardActions>
    </Card>
  );
}

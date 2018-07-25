import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

// import i3mini from '/img/printers/i3mini.jpg';


const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};

function SimpleMediaCard(props) {
  const { classes } = props;
  return (
    <div>
      <Card className="classes.card">
        <CardMedia
          className="classes.media"
          image="./img/printers/i3mini.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Lizard
          </Typography>
          <Typography component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

// export default withStyles(styles)(SimpleMediaCard);

// function App() {
//   return (
//     <Button variant="contained" color="primary">
//       Hello World
//     </Button>
//   );
// }


export default withStyles(styles)(SimpleMediaCard);

function App() {
  return (
    <SimpleMediaCard classes={styles}></SimpleMediaCard>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));

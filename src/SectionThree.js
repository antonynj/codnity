import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 200,
    paddingLeft: "40px",
    paddingRight: "40px",
  },
  media: {
    height: 140,
  },
});

function Carde() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/food/halva.jfif"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Carrot halva
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Carrot dessert pudding from the Indian subcontinent.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
  );
}

function Cardee() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/food/payasam.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Payasam
          </Typography>
          <Typography variant="body2" color="textSecondary"  component="p">
           <p>Milk dessert with cardamon.           </p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
  );
}

function Cardeee() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/food/Kesari.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Kesari
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Semolina with saffron, sugar and butter, decorated with cashew nuts and raisins.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
  );
}

export default function SectionTwo()
{
    const classes = useStyles();
    return(<div><Typography variant="h2" component="h2" color="primary">
    MENU
  </Typography><br></br>
        <Grid
      container
      spacing={4}
      className={classes.root}
      justify="center"
    >
      <Grid item xs={12} sm={6} md={4}>
        <Carde />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Cardee />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Cardeee />
      </Grid>
    </Grid></div>
    );      
}
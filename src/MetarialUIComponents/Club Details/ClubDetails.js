import React from 'react';
// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
// import { makeStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

// const useStyles = makeStyles((theme) => ({
//     Paper: {
//       padding: theme.spacing(1),
//       textAlign: 'center',
//       color: theme.palette.text.secondary,
//       margin: '20px',
//     },
//   }));

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      margin: '20px',
    },
    media: {
      height: 140,
    },
  });

const ClubDetails = (props) => {
    const {idLeague,strLeague,strSport,strLeagueAlternate} = props.plr;
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia className={classes.media} image="data:image/jpeg;base64,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"/>
                <CardContent>
                    <Typography  gutterBottom variant="h5" component="h2">
                    idLeague : {idLeague}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    strLeague : {strLeague}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary"> Share</Button>
                <Button size="small" color="primary"> Learn More</Button>
            </CardActions>
        </Card>
        // <>
        //     <Grid item xs={12} sm={4} container>
        //         <Paper className={classes.paper}>
        //             <h2>idLeague : {idLeague}</h2>
        //             <h3>strLeague : {strLeague}</h3>
        //             <h3>strSport : {strSport}</h3>
        //             <h3>strLeagueAlternate : {strLeagueAlternate}</h3>
        //         </Paper>
        //     </Grid>
        // </>
    );
};

export default ClubDetails;
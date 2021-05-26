
// import React, { useEffect, useState } from 'react';
// import ClubDetails from '../Club Details/ClubDetails'
// import { makeStyles } from '@material-ui/core/styles';

// import Grid from '@material-ui/core/Grid';
// // import { Card } from '@material-ui/core';


// const useStyles = makeStyles((theme) => ({
//     root: {
//       flexGrow: 1,
//     },
//     Paper: {
//       padding: theme.spacing(1),
//       textAlign: 'center',
//       color: theme.palette.text.secondary,
//     },
//   }));


// const Club = () => {
//     const [player, setPlayer] = useState([]);
//     useEffect(() => {
//         const url = 'https://www.thesportsdb.com/api/v1/json/1/all_leagues.php';
//         fetch(url)
//         .then(res => res.json())
//         .then(data =>setPlayer(data.leagues))
//     }, [])

//     const classes = useStyles();

//     return (
        
//         <>
//             <Grid className={classes.root} direction='row' >
//                 {/* <h1>player {player.length}</h1> */}
                
//                 {
//                     player.map(plr => <ClubDetails plr ={plr}></ClubDetails>)
//                 }
//             </Grid>
//         </>
//     );
// };

// export default Club;
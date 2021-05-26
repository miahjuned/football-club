import React, { useState } from 'react';
import { AppBar,
    Button, 
    makeStyles, 
    Tab, 
    Tabs, 
    Toolbar, 
    Typography, 
    useMediaQuery, 
    useTheme } from '@material-ui/core';
import {GiBookAura} from 'react-icons/gi';
import {SiFacebooklive, SiTwitter} from 'react-icons/si';
import {RiTeamFill} from 'react-icons/ri';
import {SiPoly} from 'react-icons/si';
import {FaAward,FaHome} from 'react-icons/fa';
import {GiBabyfootPlayers} from 'react-icons/gi';
import ToggleButton from '../Toggle button/ToggleButton';
// import TeamDetails from '../Team Details/TeamDetails';


const useStyle = makeStyles(theme =>({
    icons: {
        fontSize: '1.4rem',
    },
    iconLogo: {
        color: 'yellow',
        fontSize: '3rem',
    },
    accountButton: {
        marginLeft: 'auto',
        '&:hover': {
            background:'green',
        },
    },
}));





const Navbar = () => {
    const classes = useStyle();

    const [value, setValue] = useState(0);
    const handleClickTab =(e,  newVAlue) =>{
        setValue(newVAlue);
    };

    // Toggle butoon Breackpoints
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('sm'));


    return (
        <>
            <AppBar color='primary'>
                <Toolbar>
                    <Typography><GiBookAura className={classes.iconLogo}/></Typography>
                    
                    {isMatch ? (<ToggleButton/>
                    ): (
                        <>
                            <Tabs onChange={handleClickTab} indicatorColor='secondary' value={value}>
                                <Tab icon={<FaHome className={classes.icons}/>} disableRipple label='Home'></Tab>
                                <Tab icon={<RiTeamFill className={classes.icons}/>} disableRipple label='Team Details'>
                                </Tab>
                                <Tab icon={<SiPoly className={classes.icons}/>} disableRipple label='League Details'></Tab>
                                <Tab icon={<GiBabyfootPlayers className={classes.icons}/>} disableRipple label='Player Details'></Tab>
                                <Tab icon={<FaAward className={classes.icons}/>} disableRipple label='Player Award'></Tab>
                            </Tabs>
                            <a href="#"><SiTwitter className={classes.icons}/></a>
                            <a href="#"><SiFacebooklive className={classes.icons}/></a>
                            <Button className={classes.accountButton} variant='contained' color='secondary'>Facebook</Button>
                            {/* <TeamDetails></TeamDetails> */}
                        </>
                    )}

                </Toolbar>
            </AppBar>
           
        </>
    );
};

export default Navbar;
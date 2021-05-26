import React, { useState } from 'react';
import { Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core';
import { ImMenu } from 'react-icons/im';
import {RiTeamFill} from 'react-icons/ri';
import {SiPoly} from 'react-icons/si';
import {FaAward,FaHome} from 'react-icons/fa';
import {GiBabyfootPlayers} from 'react-icons/gi';


const useStyles = makeStyles(theme => ({
    toggleMenuIcon: {
        marginLeft: 'auto',
        color: 'white',
    },
    menuContainer: {
        marginLeft: '8px',
        marginRight: '50px',
        '&:hover': {
            background:'lightgray',
            borderBottom: '2px solid green',
        },
    },
    menuItems: {
        marginLeft: '50px',
        borderLeft: '2px solid green',
        paddingLeft: '25px',
    },
}));


const ToggleButton = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
    const classes = useStyles();

    
    return (
        <>
            <Drawer anchor='left' onClose={() => setOpenDrawer(false)} open={openDrawer}>
                <List>
                    <ListItem  divider button className={classes.menuContainer}>
                        <ListItemIcon  >
                            <ListItemText className={classes.menuItems}>
                                <FaHome/> Home
                            </ListItemText>
                        </ListItemIcon>
                    </ListItem>

                    <ListItem divider button className={classes.menuContainer}>
                        <ListItemIcon>
                            <ListItemText className={classes.menuItems}>
                                <RiTeamFill/> Team Details
                            </ListItemText>
                        </ListItemIcon>
                    </ListItem>

                    <ListItem divider button className={classes.menuContainer}>
                        <ListItemIcon>
                            <ListItemText className={classes.menuItems}>
                                <SiPoly/> League Details
                            </ListItemText>
                        </ListItemIcon>
                    </ListItem>

                    <ListItem divider button className={classes.menuContainer}>
                        <ListItemIcon>
                            <ListItemText className={classes.menuItems}>
                                <GiBabyfootPlayers/> Player Details
                            </ListItemText>
                        </ListItemIcon>
                    </ListItem>

                    <ListItem divider button className={classes.menuContainer}>
                        <ListItemIcon>
                            <ListItemText className={classes.menuItems}>
                                <FaAward/> Player Details
                            </ListItemText>
                        </ListItemIcon>
                    </ListItem>

                </List>
            </Drawer>

            <IconButton className={classes.toggleMenuIcon} onClick={() => setOpenDrawer(!openDrawer)}>
                <ImMenu/>
            </IconButton>

        </>
    );
};

export default ToggleButton;
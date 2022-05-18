import React from 'react';
import { Button, AppBar, Box, Toolbar, IconButton, Avatar, Tabs, Tab } from '@mui/material'
import { Menu } from '@mui/icons-material'

const pages = ['Discover', 'Favourites', 'Profile'];

export const Navigation = () => {
    const [selectedTab, setSelectedTab] = React.useState(0);
    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    return (
        <>
        <AppBar>
            <Tabs>
               <Tab label='Discover'/>
               <Tab label='Profile'/>
               <Tab label='Login'/>
            </Tabs>
        </AppBar>
        </>
    );
  }



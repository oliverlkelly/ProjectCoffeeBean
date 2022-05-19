import React from 'react';
import { Link } from 'react-router-dom';
import { Button, AppBar, Box, Toolbar, IconButton, Avatar, Tabs, Tab } from '@mui/material'
import { Menu } from '@mui/icons-material'



export const Navigation = () => {
    const pages = ['/', '/profile', '/login'];
    return (
        <>
        <AppBar>
            <Tabs>
               <Tab 
               label='Discover' 
               value={pages[0]}
               component={Link}
               to={pages[0]}
               />
               <Tab 
               label='Profile'
               value={pages[1]}
               component={Link}
               to={pages[1]}
               />
               <Tab 
               label='Login'
               value={pages[2]}
               component={Link}
               to={pages[2]}
               />
            </Tabs>
        </AppBar>
        {}
        </>
    );
  }



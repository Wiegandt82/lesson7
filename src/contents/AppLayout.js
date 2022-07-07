import { AccountCircleOutlined } from '@mui/icons-material';
import { AppBar, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react';
import BakeryDiningIcon from '@mui/icons-material/BakeryDining';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { useNavigate } from 'react-router-dom';

export default function AppLayout({children}) {
    let navigate = useNavigate();
    const drawerWidth = 160;
    const [pageTitle, setpageTitle] = useState('Solana Cafe')
    const handleMenu = () => {

    }

  return (
    <div>
        <div>
            <AppBar
            position='fixed'
            sx={{width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`}}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component="div" sx={{flexGrow:1, marginRight: 150}}>
                        {pageTitle}
                    </Typography>

                    <IconButton
                        size="large"
                        aria-label='account of current user'
                        aria-controls='menu-appbar'
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit">
                            <AccountCircleOutlined />
                    </IconButton>
                </Toolbar>
            </AppBar>
            
            <Drawer 
                variant='permanent'
                anchor='left'
                >
                    
                <Toolbar />
                <Divider />

                <List>
                    <ListItem
                        disablePadding
                    >
                        <ListItemButton onClick={ () => {navigate('/Products'); setpageTitle('Products')}}>
                            <ListItemIcon>
                                <BakeryDiningIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Products'} />
                        </ListItemButton>
                    </ListItem>

                    <Divider />

                    <ListItem
                        disablePadding
                        >
                        <ListItemButton onClick={ () => {navigate('/Orders'); setpageTitle('Orders')}}>
                            <ListItemIcon>
                                <LocalGroceryStoreIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Orders'} />
                        </ListItemButton>
                    </ListItem>
                    
                    <Divider />

                    <ListItem 
                        disablePadding
                        >
                        <ListItemButton onClick={ () => {navigate('/Dashboard'); setpageTitle('Dashboard')}}>
                            <ListItemIcon>
                                <DashboardIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Dashboard'} />
                        </ListItemButton>
                    </ListItem>
                    <Divider />
                </List>
            </Drawer>
        </div>
        <div className='class.page'>
            {children}
        </div>

    </div>
  )
}

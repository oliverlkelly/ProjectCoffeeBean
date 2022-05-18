import { Button, AppBar, Box, Toolbar, IconButton, Avatar } from '@mui/material'
import { Menu } from '@mui/icons-material'

const pages = ['Discover', 'Favourites', 'Profile'];

export const Navigation = () => {
    return (
        <AppBar>
            <Toolbar>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    {pages.map((page) => (
                    <Button
                        key={page}
                        sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                        {page}
                    </Button>
                    ))}
                </Box>
                <IconButton>
                    <Avatar/>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
  }



import { Grid } from '@mui/material';
import * as React from 'react';
import { DiscoverCard } from '../../components';

export const Discover = () => {
    return(
        <Grid sx={{ flexGrow: 1 }} container spacing={2} style={{margin: '5vh'}}>
            <Grid item xs={3}>
                <DiscoverCard/>
            </Grid>
            <Grid item xs={3}>
                <DiscoverCard/>
            </Grid>
            <Grid item xs={3}>
                <DiscoverCard/>
            </Grid>
            <Grid item xs={3}>
                <DiscoverCard/>
            </Grid>
        </Grid>
    )
}
import * as React from 'react';
import {
    Box,
    Button, 
    Card,
    CardContent,
    CardActions,
    Typography
} from '@mui/material';
import { storeValueIsStoreObject } from '@apollo/client/cache/inmemory/helpers';



export const DiscoverCard = () => {
    const merchant = {
        type: "Cafe",
        name: "Generic Coffee Shop",
        description: "Lorem Ipsum this is a description"
    }
    return (
      <Card sx={{ maxWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {merchant.type}
          </Typography>
          <Typography variant="h5" component="div">
            {merchant.name}
          </Typography>
          <Typography variant="body2">
            {merchant.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    );
}
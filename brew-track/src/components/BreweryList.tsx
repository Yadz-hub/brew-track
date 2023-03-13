import { Box, Grid, Paper, Typography } from '@mui/material';
import React from 'react';

interface BreweryDetails {
  id: number,
  breweryName :  string,
  brewery_type: string,
  street: string,
  city: string,
  state: string,
  postal_code: string,
  country: string,
  longitude: string,
  latitude: string,
  phone: string,
  website_url: string,
  updated_at: string,
  tag_list: []
}

interface Props {
  breweries: BreweryDetails[];
}

const BreweryList: React.FC<Props> = ({ breweries }) => {
  return (
    <Grid container spacing={2}>
      {breweries.map((brewery) => (
        <Grid key={brewery.id} item xs={12} sm={6} md={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" component="h3" gutterBottom>
              {brewery.breweryName}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              {brewery.street}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              {brewery.city}, {brewery.state} {brewery.postal_code}
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Typography variant="subtitle2" gutterBottom>
                Type: {brewery.brewery_type}
              </Typography>
              <Typography variant="subtitle2" gutterBottom>
                Phone: {brewery.phone}
              </Typography>
              <Typography variant="subtitle2" gutterBottom>
                Website: {brewery.website_url}
              </Typography>
            </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default BreweryList;

import React from 'react';
import BreweryList from './BreweryList';

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


function App() {
  const [breweries, setBreweries] = React.useState<BreweryDetails[]>([]);

  const brewData: BreweryDetails[] = [
    {
      id: 9094,
      breweryName: "Four Peaks Brewing Co",
      street: "1340 E 8th St",
      brewery_type: "regional",
      city: "Tempe",
      state: "Arizona",
      postal_code: "85281-4407",
      country: "United States",
      longitude: "-111.925684",
      latitude: "33.419119",
      phone: "4803039967",
      website_url: "http://www.fourpeaks.com",
      updated_at: "2018-08-24T15:45:20.000Z",
      tag_list: []
    },
    {
      id: 9180,
      breweryName: "SanTan Brewing Co",
      brewery_type: "micro",
      street: "8 S San Marcos Pl",
      city: "Chandler",
      state: "Arizona",
      postal_code: "85225-7862",
      country: "United States",
      longitude: "-111.8412504",
      latitude: "33.3032445",
      phone: "4809178700",
      website_url: "http://www.santanbrewing.com",
      updated_at: "2018-08-24T15:48:08.000Z",
      tag_list: []
    },
    {
      id: 9180,
      breweryName: "SanTan Brewing Co",
      brewery_type: "micro",
      street: "8 S San Marcos Pl",
      city: "Chandler",
      state: "Arizona",
      postal_code: "85225-7862",
      country: "United States",
      longitude: "-111.8412504",
      latitude: "33.3032445",
      phone: "4809178700",
      website_url: "http://www.santanbrewing.com",
      updated_at: "2018-08-24T15:48:08.000Z",
      tag_list: []
    },
    {
      id: 9180,
      breweryName: "SanTan Brewing Co",
      brewery_type: "micro",
      street: "8 S San Marcos Pl",
      city: "Chandler",
      state: "Arizona",
      postal_code: "85225-7862",
      country: "United States",
      longitude: "-111.8412504",
      latitude: "33.3032445",
      phone: "4809178700",
      website_url: "http://www.santanbrewing.com",
      updated_at: "2018-08-24T15:48:08.000Z",
      tag_list: []
    },
    {
      id: 9180,
      breweryName: "SanTan Brewing Co",
      brewery_type: "micro",
      street: "8 S San Marcos Pl",
      city: "Chandler",
      state: "Arizona",
      postal_code: "85225-7862",
      country: "United States",
      longitude: "-111.8412504",
      latitude: "33.3032445",
      phone: "4809178700",
      website_url: "http://www.santanbrewing.com",
      updated_at: "2018-08-24T15:48:08.000Z",
      tag_list: []
    },
    {
      id: 9180,
      breweryName: "SanTan Brewing Co",
      brewery_type: "micro",
      street: "8 S San Marcos Pl",
      city: "Chandler",
      state: "Arizona",
      postal_code: "85225-7862",
      country: "United States",
      longitude: "-111.8412504",
      latitude: "33.3032445",
      phone: "4809178700",
      website_url: "http://www.santanbrewing.com",
      updated_at: "2018-08-24T15:48:08.000Z",
      tag_list: []
    },
    {
      id: 9180,
      breweryName: "SanTan Brewing Co",
      brewery_type: "micro",
      street: "8 S San Marcos Pl",
      city: "Chandler",
      state: "Arizona",
      postal_code: "85225-7862",
      country: "United States",
      longitude: "-111.8412504",
      latitude: "33.3032445",
      phone: "4809178700",
      website_url: "http://www.santanbrewing.com",
      updated_at: "2018-08-24T15:48:08.000Z",
      tag_list: []
    },
    {
      id: 9180,
      breweryName: "SanTan Brewing Co",
      brewery_type: "micro",
      street: "8 S San Marcos Pl",
      city: "Chandler",
      state: "Arizona",
      postal_code: "85225-7862",
      country: "United States",
      longitude: "-111.8412504",
      latitude: "33.3032445",
      phone: "4809178700",
      website_url: "http://www.santanbrewing.com",
      updated_at: "2018-08-24T15:48:08.000Z",
      tag_list: []
    },
    {
      id: 9180,
      breweryName: "SanTan Brewing Co",
      brewery_type: "micro",
      street: "8 S San Marcos Pl",
      city: "Chandler",
      state: "Arizona",
      postal_code: "85225-7862",
      country: "United States",
      longitude: "-111.8412504",
      latitude: "33.3032445",
      phone: "4809178700",
      website_url: "http://www.santanbrewing.com",
      updated_at: "2018-08-24T15:48:08.000Z",
      tag_list: []
    },
    {
      id: 9180,
      breweryName: "SanTan Brewing Co",
      brewery_type: "micro",
      street: "8 S San Marcos Pl",
      city: "Chandler",
      state: "Arizona",
      postal_code: "85225-7862",
      country: "United States",
      longitude: "-111.8412504",
      latitude: "33.3032445",
      phone: "4809178700",
      website_url: "http://www.santanbrewing.com",
      updated_at: "2018-08-24T15:48:08.000Z",
      tag_list: []
    },
    {
      id: 9180,
      breweryName: "SanTan Brewing Co",
      brewery_type: "micro",
      street: "8 S San Marcos Pl",
      city: "Chandler",
      state: "Arizona",
      postal_code: "85225-7862",
      country: "United States",
      longitude: "-111.8412504",
      latitude: "33.3032445",
      phone: "4809178700",
      website_url: "http://www.santanbrewing.com",
      updated_at: "2018-08-24T15:48:08.000Z",
      tag_list: []
    },
    {
      id: 9180,
      breweryName: "SanTan Brewing Co",
      brewery_type: "micro",
      street: "8 S San Marcos Pl",
      city: "Chandler",
      state: "Arizona",
      postal_code: "85225-7862",
      country: "United States",
      longitude: "-111.8412504",
      latitude: "33.3032445",
      phone: "4809178700",
      website_url: "http://www.santanbrewing.com",
      updated_at: "2018-08-24T15:48:08.000Z",
      tag_list: []
    },
    {
      id: 9180,
      breweryName: "SanTan Brewing Co",
      brewery_type: "micro",
      street: "8 S San Marcos Pl",
      city: "Chandler",
      state: "Arizona",
      postal_code: "85225-7862",
      country: "United States",
      longitude: "-111.8412504",
      latitude: "33.3032445",
      phone: "4809178700",
      website_url: "http://www.santanbrewing.com",
      updated_at: "2018-08-24T15:48:08.000Z",
      tag_list: []
    }]
  // React.useEffect(() => {
  //   // fetch breweries data from backend
  //   fetch('/api/breweries')
  //     .then(response => response.json())
  //     .then(data => setBreweries(data));
  // }, []);

  React.useEffect(() => {
    // fetch breweries data from backend
    setBreweries(brewData)
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>BrewTrack</h1>
        <p>Find your favorite brewpubs and their air temperature</p>
      </header>
      <main className="App-main">
        <h2>Breweries:</h2>
        <BreweryList breweries={breweries} />
      </main>
      <footer className="App-footer">
        <p>&copy; 2023 BrewTrack</p>
      </footer>
    </div>
  );
}

export default App;

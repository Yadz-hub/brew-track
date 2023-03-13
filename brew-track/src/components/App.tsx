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
  tag_list: [],
  degreesCelcius: string
}


function App() {
  const [breweries, setBreweries] = React.useState<BreweryDetails[]>([]);

  // const lat = 58.7984;
  // const lng = 17.8081;
  // const params = 'windSpeed,airTemperature';
  
  // fetch(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`, {
  //   headers: {
  //     'Authorization': 'ae3ae74a-c1ac-11ed-a138-0242ac130002-ae3ae84e-c1ac-11ed-a138-0242ac130002'
  //   }
  // }).then((response) => response.json()).then((jsonData) => {
  //   const temperature = jsonData.hours[0].airTemperature[0].value;
  //   console.log(`The temperature is ${temperature} degrees Celsius.`);
  // });

//   const weatherData = {
//     "hours":[
//        {
//           "airTemperature":{
//              "dwd":-1.27,
//              "noaa":-4.09,
//              "sg":-11.6,
//              "smhi":-11.6
//           },
//           "time":"2023-03-13T00:00:00+00:00"
//        },
//        {
//           "airTemperature":{
//              "dwd":-1.01,
//              "noaa":-3.37,
//              "sg":-10.9,
//              "smhi":-10.9
//           },
//           "time":"2023-03-13T01:00:00+00:00"
//        },
//        {
//           "airTemperature":{
//              "dwd":-0.72,
//              "noaa":-2.65,
//              "sg":-10.8,
//              "smhi":-10.8
//           },
//           "time":"2023-03-13T02:00:00+00:00"
//        },
//        {
//           "airTemperature":{
//              "dwd":-0.32,
//              "noaa":-1.94,
//              "sg":-10.2,
//              "smhi":-10.2
//           },
//           "time":"2023-03-13T03:00:00+00:00"
//        },
//        {
//           "airTemperature":{
//              "dwd":0.41,
//              "noaa":-1.23,
//              "sg":-9.1,
//              "smhi":-9.1
//           },
//           "time":"2023-03-13T04:00:00+00:00"
//        }
//     ],
//     "meta":{
//        "cost":1,
//        "dailyQuota":10,
//        "end":"2023-03-23 00:00",
//        "lat":58.7984,
//        "lng":17.8081,
//        "params":[
//           "airTemperature"
//        ],
//        "requestCount":1,
//        "start":"2023-03-13 00:00"
//     }
//  }


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
      tag_list: [],
      degreesCelcius: "20"
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
      tag_list: [],
      degreesCelcius: "20"
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
      tag_list: [],
      degreesCelcius: "20"
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
      tag_list: [],
      degreesCelcius: "20"
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
      tag_list: [],
      degreesCelcius: "20"
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
      tag_list: [],
      degreesCelcius: "20"
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
      tag_list: [],
      degreesCelcius: "20"
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
      tag_list: [],
      degreesCelcius: "20"
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
      tag_list: [],
      degreesCelcius: "20"
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
      tag_list: [],
      degreesCelcius: "20"
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
      tag_list: [],
      degreesCelcius: "20"
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
      tag_list: [],
      degreesCelcius: "20"
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
      tag_list: [],
      degreesCelcius: "20"
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

import React from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiZ2FicmllbGxhLTkwIiwiYSI6ImNrOXE3ODkyODBoa2gzZW8xenE3ZW8xd2cifQ.J4yN5bPyx6j1p-bzI_gy6Q';
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
class Application extends React.Component {
    // Code from the next few steps will go here
    constructor(props) {
        super(props);
        this.state = {
        lng: -46.6361100,
        lat: -23.5475000,
        zoom: 9
        };
    }

    componentDidMount() {
      const map = new mapboxgl.Map({
        container: this.mapContainer,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [this.state.lng, this.state.lat],
        zoom: this.state.zoom

      });
      map.on('move', () => {
        this.setState({
          lng: map.getCenter().lng.toFixed(4),
          lat: map.getCenter().lat.toFixed(4),
          zoom: map.getZoom().toFixed(2)
        });
      });
    }

    render() {
      return (
        <div>
          <div className='sidebarStyle'>
            <div>Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}</div>
          </div>
          <div ref={el => this.mapContainer = el} className='mapContainer' />
        </div>
      )
    }
        
}
     
ReactDOM.render(<Application />, document.getElementById('app'));
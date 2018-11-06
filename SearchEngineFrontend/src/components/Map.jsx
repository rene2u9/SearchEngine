import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import {Icon} from 'react-materialize';

const Marker = () => <Icon>location_on</Icon>;


class Map extends Component {

  constructor(props){
    super(props)
    this.state = {
      center: {
        lat:this.props.lat,
        lng:this.props.lng
      },
      lat:this.props.lat,
      lng:this.props.lng,
      zoom: 15
    }
  }
 
  render() {
    return (
      <div style={{height: '30vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBpKQrPTasKNt6ewT-CUX5mKANcfXVRE1I' }}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
        >
          <Marker
            lat={this.state.lat}
            lng={this.state.lng}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
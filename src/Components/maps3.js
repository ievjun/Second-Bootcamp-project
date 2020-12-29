import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class MapContainer3 extends Component {
  static defaultProps = {
    center: {
      lat: 57.743072, 
      lng: 25.238351
    },
    zoom: 11
  };
 
  render() {
    return (

      <div style={{ height: '14cm', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCJC7-_BHI2VaBMP43cJr2O7UBXH0Eh_Zo" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={57.743072}
            lng={25.238351}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default MapContainer3;


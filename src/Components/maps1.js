import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class MapContainer extends Component {
  static defaultProps = {
    center: {
      lat: 56.086112,
      lng: 27.593618
    },
    zoom: 11,
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
            lat={56.086112}
            lng={27.593618}
            text="My Marker"
          />
           
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default MapContainer;


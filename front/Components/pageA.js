import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {connect} from 'react-redux';
import MapView, {Marker} from 'react-native-maps';
import {Location, Permissions} from 'expo';

class PageA extends React.Component {
  constructor(){
    super();
    this.state={
      currentPosition: {latitude:0, longitude:0}
    }
  }
  componentWillMount() {
    this._getLocationAsync();
  }

  _getLocationAsync = async () => {
    var { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }
    Location.watchPositionAsync({distanceInterval: 5}, (location) => {
      this.setState({currentPosition:{latitude:location.coords.latitude, longitude: location.coords.longitude}})
    })
  }

  render() {
    return (
      <MapView
        style={{flex:1}}
        initialRegion={{
          latitude: 48.866667,
          longitude: 2.333333,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
      >
      <Marker
        coordinate={{latitude:this.state.currentPosition.latitude,longitude:this.state.currentPosition.longitude}}
        title='Hello'
        description='I am here!'
      />
    </MapView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

function mapStateToProps(state) {
 return { result: state.result }
}

export default connect(
  mapStateToProps,
  null
)(PageA);

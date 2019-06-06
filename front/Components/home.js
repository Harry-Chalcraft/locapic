import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import {Button} from 'react-native-elements';
import { AuthSession } from 'expo';
import {connect} from 'react-redux'

class Home extends React.Component {

  button  = async () => {
    var redirectUrl = AuthSession.getRedirectUrl();

    var result = await AuthSession.startAsync({
      authUrl:
        'https://fast-shore-29443.herokuapp.com/auth/facebook'
    });
    if(result.type=='success'){
     this.props.signin(result.params);
     this.props.navigation.navigate("PageA")
    } else {
     this.props.navigation.navigate("Home")
    }
  };

  render() {
    return (
      <ImageBackground source={require('../assets/images/home.jpg')} style={styles.container}>
        <Button
          title= 'Homepage'
          onPress= {this.button}/>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function mapDispatchToProps(dispatch) {
 return {
  signin: function(data) {
    dispatch( {type: 'signin', data:data} )
  }
 }
}

export default connect(
  null,
  mapDispatchToProps
)(Home);

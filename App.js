import React from 'react';
import { StyleSheet, Button, Alert, Text, View, Image } from 'react-native';

export default class App extends React.Component {

  render() {
    let pic = {
      uri: 'https://i.imgur.com/l4mVfe0.png'
    };

    return (
      <View style={styles.container}>
        <Image source={pic} style={{width: 137, height: 267}} />
        <Text>{' '}</Text>
        <Text style={styles.titleText}>Kingdom Death Monster</Text>
        <Text style={styles.subtitleText}>- Campaign Tracker -</Text>
        <Text>{' '}</Text>
        <Text>{' '}</Text>
        <View style={styles.buttonContainer}>
        <Button
          onPress={() => {Alert.alert('You Rolled a 1 - HEAD EXPLOSION!');
        }}
          title="Tap to Die"
          color="#B3B3B3"
        />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212223',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20
  },
  baseText: {
    fontFamily: 'Cochin',
    color: 'white',
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  subtitleText: {
    fontSize: 16,
    color: 'white',
  },
});

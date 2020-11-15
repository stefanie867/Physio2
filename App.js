/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

import { Card, Button } from 'react-native-elements';
import { PHOTO } from './src/images';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Card>
                <Card.Title>Brigi</Card.Title>
                <Card.Divider/>
                <Image
                  style={styles.image}
                  resizeMode="cover"
                  source={PHOTO}
                />
                <Text style={styles.text}>
                  Valami
                </Text>
                <Button
                  buttonStyle={styles.button}
                  title='Click me' />
              </Card>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: null,
    height: 150,
  },
  text: {
    marginTop: 10,
    marginBottom: 10,
    color: '#555555',
    textAlign: 'center'
  },
  button: {
    borderRadius: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  }
});

export default App;

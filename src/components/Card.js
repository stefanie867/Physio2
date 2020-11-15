import React from 'react';

import {
	StyleSheet,
  Text,
  Image
} from 'react-native';

import { Card, Button } from 'react-native-elements';

import { PHOTO } from '..images/images';

const MyCard = () => {
	return (
		<Card>
			<Card.Title>Exercise</Card.Title>
			<Card.Divider/>
			<Image
				style={styles.image}
				resizeMode="cover"
				source={PHOTO}
			/>
			<Text style={styles.text}>
				Here comes the description of the exercise.
			</Text>
			<Button
				buttonStyle={styles.button}
				title='Click me' />
		</Card>
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
  }
});

export default MyCard;
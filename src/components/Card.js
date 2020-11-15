import React from 'react';

import {
	StyleSheet,
  Text,
  Image
} from 'react-native';

import { Card, Button } from 'react-native-elements';

import { PHOTO } from '../images';

import i18n from '../../i18n';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

const changeLanguage = () => {
  i18next.language === 'de' ? i18n.changeLanguage('en') : i18n.changeLanguage('de');
};

const MyCard = () => {
	const {t} = useTranslation();
	return (
		<Card>
			<Card.Title>{t('title')}</Card.Title>
			<Card.Divider/>
			<Image
				style={styles.image}
				resizeMode="cover"
				source={PHOTO}
			/>
			<Text style={styles.text}>
				{t('description')}
			</Text>
			<Button
				buttonStyle={styles.button}
				title={t('click')}
				onPress={changeLanguage} />
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
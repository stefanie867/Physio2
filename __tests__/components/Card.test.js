/**
 * @format
 */

import 'react-native';
import React from 'react';

import Card from '../../src/components/Card';
import * as util from '../../src/components/util';

import { render, fireEvent } from '@testing-library/react-native';
import { describe } from 'jest-circus';

jest.mock('react-i18next', () => ({
    useTranslation: () => ({t: key => key})
}));
jest.mock('i18next', () => ({
    changeLanguage: () => jest.fn()
}));

describe('Card button press test', () => {

    it('Expects that the function is called when pressing the button', () => {
        const changeLanguageSpy = jest.spyOn(util, 'changeLanguage');
        const {getByText} = render(<Card />);
        const button = getByText('click.me');

        fireEvent.press(button);
        expect(changeLanguageSpy).toHaveBeenCalledTimes(1);
    });
});

describe('Card renders correctly', () => {

    it('renders correctly', () => {
        render(<Card />);
    });

    it('Card title renders correctly', () => {
        const {getByText} = render(<Card />);
        const title = getByText('title');
        expect(title).toBeEnabled();
    });

    it('Card image renders correctly', () => {
        const {getByTestId} = render(<Card />);
        const image = getByTestId('image');
        expect(image).toBeEnabled();
    });

    it('Card text renders correctly', () => {
        const {getByText} = render(<Card />);
        const text = getByText('description');
        expect(text).toBeEnabled();
    });

    it('Card button renders correctly', () => {
        const {getByText} = render(<Card />);
        const button = getByText('click.me');
        expect(button).toBeEnabled();
    });
});
import { describe } from 'jest-circus';

describe('changeLanguage tests', () => {

  beforeEach(() => jest.resetModules());

  it('Expects that changeLanguage is called with de when language is en', () => {
    jest.mock('i18next', () => ({
      language: 'en',
      changeLanguage: () => jest.fn()
    }));

    const { changeLanguage } = require('../../src/components/util');
    const i18next = require('i18next');
    
    const changeLanguageSpy = jest.spyOn(i18next, 'changeLanguage');

    changeLanguage();
    expect(changeLanguageSpy).toHaveBeenCalledWith('de');
  });

  it('Expects that changeLanguage is called with en when language is de', () => {
    jest.mock('i18next', () => ({
      language: 'de',
      changeLanguage: () => jest.fn()
    }));

    const { changeLanguage } = require('../../src/components/util');
    const i18next = require('i18next');

    const changeLanguageSpy = jest.spyOn(i18next, 'changeLanguage');

    changeLanguage();
    expect(changeLanguageSpy).toHaveBeenCalledWith('en');
  });
});
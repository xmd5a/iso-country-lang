import {
  IsoLangByCountryName,
  IsoLangByIso6391,
  IsoLangByIso6392,
  IsoLangByIsoLanguageName,
  IsoLangByLanguageFamily,
  IsoLangByNativeName,
} from '../IsoLangJs';

describe('IsoLangJs unit tests', () => {
  const mockedData = {};

  beforeAll(() => {
    Object.assign(mockedData, {
      countryName: 'Poland',
      iso6391: 'pl',
      iso6392: 'pol',
      isoLanguageName: 'Polish',
      languageFamily: 'Indo-European',
      nativeName: ['język polski', 'polszczyzna'],
    });
  });

  test('test IsoLangByCountryName()', () => {
    expect(IsoLangByCountryName('Poland')).toEqual(mockedData);
  });

  test('test IsoLangByCountryName() not found data', () => {
    expect(IsoLangByCountryName('unreal country')).toEqual(undefined);
  });

  test('test IsoLangByiso6391()', () => {
    expect(IsoLangByIso6391('pl')).toEqual(mockedData);
  });

  test('test IsoLangByiso6391() not found data', () => {
    expect(IsoLangByIso6391('unreal iso')).toEqual(undefined);
  });

  test('test IsoLangByiso6392()', () => {
    expect(IsoLangByIso6392('pol')).toEqual(mockedData);
  });

  test('test IsoLangByiso6392() not found data', () => {
    expect(IsoLangByIso6392('underal iso')).toEqual(undefined);
  });

  test('test IsoLangByIsoLanguageName()', () => {
    expect(IsoLangByIsoLanguageName('Polish')).toEqual(mockedData);
  });

  test('test IsoLangByIsoLanguageName() not found data', () => {
    expect(IsoLangByIsoLanguageName('unreal language')).toEqual(undefined);
  });

  test('test IsoLangByLanguageFamily()', () => {
    expect(IsoLangByLanguageFamily('Indo-European')).toEqual(
      expect.arrayContaining([
        expect.objectContaining(mockedData)
      ])
    );
  });

  test('test IsoLangByLanguageFamily() not found data', () => {
    expect(IsoLangByLanguageFamily('unreal language family')).toEqual([]);
  });

  test('test IsoLangByNativeName()', () => {
    expect(IsoLangByNativeName('język polski')).toEqual(mockedData);
  });

  test('test IsoLangByNativeName() not found data', () => {
    expect(IsoLangByNativeName('unreal native name')).toEqual(undefined);
  });
});

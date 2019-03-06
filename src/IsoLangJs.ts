import { data } from './data';
import { ICountryLang } from './IsoLangJs.interface';

function IsoLangByCountryName(countryName: string): ICountryLang | undefined {
  return data.find((country) => country.countryName.toLowerCase() === countryName.toLowerCase());
}

function IsoLangByIso6391(iso6391: string): ICountryLang | undefined {
  return data.find((country) => country.iso6391.toLowerCase() === iso6391.toLowerCase());
}

function IsoLangByIso6392(iso6392: string): ICountryLang | undefined {
  return data.find((country) => country.iso6392.toLowerCase() === iso6392.toLowerCase());
}

function IsoLangByIsoLanguageName(isoLanguageName: string): ICountryLang | undefined {
  return data.find((country) => country.isoLanguageName.toLowerCase() === isoLanguageName.toLowerCase());
}

function IsoLangByLanguageFamily(languageFamily: string): ICountryLang[] | undefined {
  return data.filter((country) => country.languageFamily.toLowerCase() === languageFamily.toLowerCase())
    || undefined;
}

function IsoLangByNativeName(nativeName: string): ICountryLang | undefined {
  return data.find((country) => country.nativeName.indexOf(nativeName.toLowerCase()) > -1)
}

export {
  IsoLangByCountryName,
  IsoLangByIso6391,
  IsoLangByIso6392,
  IsoLangByIsoLanguageName,
  IsoLangByLanguageFamily,
  IsoLangByNativeName,
};

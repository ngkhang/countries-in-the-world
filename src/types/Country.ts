interface Country {
  name: {
    common: string,
    official: string,
    nativeName: object,
  },
  currencies: object,
  capital: string[],
  altSpellings: string[],
  region: string,
  subregion: string,
  languages:object,
  latlng: number[],
  maps: {
    googleMaps: string,
  },
  population: number,
  timezones: string[],
  flags: {
    png: string,
    svg: string,
    alt: string,
  },
  coatOfArms: {
    png: string,
    svg: string,
  },
  capitalInfo: {
    latlng: number[],
  },
}

export default Country;

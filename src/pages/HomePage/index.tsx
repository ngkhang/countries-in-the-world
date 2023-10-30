const fakeData = {
  name: {
    common: 'Vietnam',
    official: 'Socialist Republic of Vietnam',
    nativeName: {
      vie: {
        official: 'Cộng hòa xã hội chủ nghĩa Việt Nam',
        common: 'Việt Nam',
      },
    },
  },
  currencies: {
    VND: {
      name: 'Vietnamese đồng',
      symbol: '₫',
    },
  },
  idd: {},
  capital: [
    'Hanoi',
  ],
  altSpellings: [
    'VN',
    'Socialist Republic of Vietnam',
    'Cộng hòa Xã hội chủ nghĩa Việt Nam',
    'Viet Nam',
  ],
  region: 'Asia',
  subregion: 'South-Eastern Asia',
  languages: {
    vie: 'Vietnamese',
  },
  latlng: [
    16.16666666,
    107.83333333,
  ],
  maps: {
    googleMaps: 'https://goo.gl/maps/PCpVt9WzdJ9A9nEZ9',
    openStreetMaps: 'https://www.openstreetmap.org/relation/49915',
  },
  population: 97338583,
  timezones: [
    'UTC+07:00',
  ],
  flags: {
    png: 'https://flagcdn.com/w320/vn.png',
    alt: 'The flag of Vietnam features a large five-pointed yellow star on a red field.',
  },
  coatOfArms: {
    png: 'https://mainfacts.com/media/images/coats_of_arms/vn.png',
    svg: 'https://mainfacts.com/media/images/coats_of_arms/vn.svg',
  },
  capitalInfo: {
    latlng: [
      21.03,
      105.85,
    ],
  },
};

function CardFlag() {
  return (
    <div className="w-1/2">
      <div className="bg-slate-200 m-2 p-2 box-border rounded-md">
        <div className="">
          {/* flags */}
          <img src={fakeData.flags.png} alt={fakeData.flags.alt} />
        </div>
        <p>{fakeData.name.common}</p>
        <p>{fakeData.name.official}</p>
        <p>
          Capital:
          {fakeData.capital[0]}
        </p>
        <p>
          Region:
          {fakeData.region}
          Sub Region:
          {fakeData.subregion}
        </p>
      </div>
    </div>
  );
}

function HomePage() {
  return (
    <div className="w-full">
      <div className="bg-blue-200 h-4 inline w-full" />
      <div className="flex items-center">
        <input className="" placeholder="Enter your country" />
        <span>Search</span>
      </div>
      <div className="flex flex-wrap">
        {
          [1, 2, 3, 4, 5, 6, 7].map((country) => <CardFlag key={country} />)
        }

      </div>
    </div>
  );
}

export default HomePage;

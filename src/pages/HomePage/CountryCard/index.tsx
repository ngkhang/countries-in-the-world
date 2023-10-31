/* eslint-disable react/require-default-props */
import React from 'react';
import Country from '~/types/Country';

interface eCountryCard {
  data: Country,
  width?: string,
  className?: string | null
}

interface eRowInfo {
  title?: string,
  children: React.ReactElement,
}

function RowInfo({
  title, children,
} : eRowInfo) {
  return (
    <div className="py-1 border-b-2 border-black text-sm mb-3 pb-2">
      { title && <p className="font-medium mb-1 text-base">{title}</p>}
      {children}
    </div>
  );
}

function CountryCard({ data, width = 'w-1/4', className = '' }: eCountryCard) {
  return (
    <div className={`${width} mb-4 ${className}`}>
      <div className="h-full bg-slate-200 mx-2 p-2 box-border rounded-md flex flex-col">
        <div className="text-center mb-2 h-full">
          <h4 className="font-medium text-sm">{data.name.official}</h4>
          {
            data.name.nativeName && (
              <p className="text-sm">{Object.values(data.name.nativeName)[0].official}</p>
            )
          }
        </div>
        <div className="flex-grow">
          <div className="flex items-center">
            <div className="w-full p-1"><img className="w-full" src={data.flags.png} alt={data.flags.alt} /></div>
            <div className="w-full p-1"><img className="w-full" src={data.coatOfArms.png} alt="The coat of Arm" /></div>
          </div>
          <RowInfo title={data.name.common}>
            <>
              <div className="flex">
                {
                  data.capital && data.capitalInfo && (
                    <>
                      <span className="w-1/3">Capital</span>
                      <div className="w-2/3">
                        <p>{data.capital[0]}</p>
                        {/* <p>{data.capitalInfo.latlng.join(' ')}</p> */}
                      </div>
                    </>
                  )
                }
              </div>
              <div className="flex">
                <span className="mr-4">Region</span>
                <div className="flex-grow">
                  <p>{data.region}</p>
                  <p>{data.subregion}</p>
                  <a className="w-2/3" href={data.maps.googleMaps}>Map view</a>
                </div>
              </div>
              <div className="flex">
                <span className="mr-4">Languages</span>
                <div className="flex-grow">
                  {
                    data.languages && Object.values(data.languages).map((lang) => <p>{lang}</p>)
                  }
                </div>
              </div>
              <div className="flex">
                <span className="mr-5">Population</span>
                <p className="w-2/3">{data.population}</p>
              </div>
            </>
          </RowInfo>
          <RowInfo>
            <>
              <div className="flex justify-between">
                <span>Currency</span>
                {
                  data.currencies && (
                    <span>{`${Object.values(data.currencies)[0].name}`}</span>
                  )
                }
              </div>
              <div className="flex justify-between">
                <span>Time zone</span>
                <span>{data.timezones[0]}</span>
              </div>
            </>
          </RowInfo>
        </div>
      </div>
    </div>
  );
}

export default CountryCard;

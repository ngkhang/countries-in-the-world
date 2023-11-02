/* eslint-disable react/require-default-props */
import React from 'react';
import Country from '~/types/Country';

interface eCountryCard {
  data: Country,
  width?: string,
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

function CountryCard({ data, width = 'w-1/4' }: eCountryCard) {
  return (
    <div className={`${width}`}>
      <div className="h-full p-1 md:p-2 lg:p-4">
        <div className="shadow-xl p-2 border box-border rounded-md flex flex-col justify-between hover:scale-105 overflow-hidden">
          <div className="h-1/4 text-center mb-2 flex-grow">
            <h4 className="font-medium text-sm">{data.name.official}</h4>
            {
              data.name.nativeName && (
                <p className="text-sm">{Object.values(data.name.nativeName)[0].official}</p>
              )
            }
          </div>

          <div className="flex-grow">
            <div className="flex items-center">
              {
                data.flags.png && <div className="w-full p-1"><img className="w-full" src={data.flags.png} alt={data.flags.alt} /></div>
              }
              {
                data.coatOfArms.png && <div className="w-full p-1"><img className="w-full" src={data.coatOfArms.png} alt="The coat of Arm" /></div>
              }
            </div>

            <div className="">
              <RowInfo title={data.name.common}>
                <>
                  <div className="flex">
                    {
                      data.capital && data.capitalInfo && (
                        <>
                          <span className="w-1/2">Capital</span>
                          <div className="flex-grow">
                            <p>{data.capital[0]}</p>
                            {data.capitalInfo.latlng && <p>{data.capitalInfo.latlng.join(' ')}</p>}
                          </div>
                        </>
                      )
                    }
                  </div>
                  <div className="flex">
                    <span className="w-1/2">Region</span>
                    <div className="flex-grow">
                      <p>{data.region}</p>
                      <p>{data.subregion}</p>
                      <a className="w-2/3" href={data.maps.googleMaps}>Map view</a>
                    </div>
                  </div>
                  <div className="flex">
                    <span className="w-1/2">Languages</span>
                    <div className="flex-grow">
                      {
                        data.languages && Object.values(data.languages).map((lang) => <p>{lang}</p>)
                      }
                    </div>
                  </div>
                  <div className="flex">
                    <span className="w-1/2">Population</span>
                    <p className="flex-grow">{data.population}</p>
                  </div>
                </>
              </RowInfo>
              <RowInfo>
                <>
                  <div className="flex">
                    <span className="w-1/2">Currency</span>
                    <div className="flex-grow">
                      {
                        data.currencies && <p className="break-words">{`${Object.values(data.currencies)[0].name}`}</p>
                      }
                    </div>
                  </div>
                  <div className="flex">
                    <span className="w-1/2">Time zone</span>
                    <p className="flex-grow">{data.timezones[0]}</p>
                  </div>
                </>
              </RowInfo>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default CountryCard;

import useFetch from '~/hooks/useFetch';
import CountryCard from './CountryCard';
import Spinner from '~/components/generic/Spinner';
import Icons from '~/utils/helpers/icons';

function HomePage() {
  const { rawData, loading } = useFetch('https://restcountries.com/v3.1/all');

  return (
    <div className="w-full flex flex-col">
      <div className="bg-pattern py-5">
        <h1 className="text-center uppercase text-lg">Welcome to the World</h1>
      </div>
      <div className="relative mb-10">
        <div className="absolute inset-x-0 -top-3 w-full">
          <div className="relative border mx-10 ">
            <input className="rounded-sm py-1 pl-2 w-full pr-9" placeholder="Enter your country" />
            <span className="absolute top-0 right-2 translate-y-1/4">
              <div className="w-5 h-5">{Icons.Search('w-5 h-5')}</div>
            </span>
          </div>
        </div>
      </div>
      {
        loading
          ? <Spinner />
          : (
            <div className="flex-grow flex flex-wrap">
              {
                rawData
                  ? rawData.map((country) => <CountryCard data={country} width="w-1/2" />)
                  : <p className="w-full text-center">Oh! I&apos;m sorry. Please refresh or come back later</p>
              }
            </div>
          )
      }
    </div>
  );
}

export default HomePage;

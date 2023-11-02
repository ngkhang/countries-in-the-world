import useFetch from '~/hooks/useFetch';
import CountryCard from './CountryCard';
import Spinner from '~/components/generic/Spinner';
import Icons from '~/utils/helpers/icons';

function HomePage() {
  const { rawData: data, loading: isLoading } = useFetch('https://restcountries.com/v3.1/all');

  return (
    <div className="flex justify-center flex-grow">
      <div className="w-full md:w-mainSize flex flex-col">
        <div className="bg-pattern relative h-24 md:h-28 py-5 md:py-8 mb-12 md:mb-14">
          <h1 className="text-center uppercase text-xl md:text-2xl pb-5">Welcome to the World</h1>
          <div className="absolute bottom-0 right-0 translate-y-1/2 w-full">
            <div className="py-2">
              <div className="mx-10 md:mx-16 relative border rounded-lg">
                <input type="text" className="rounded-lg py-2 pl-2 md:pl-4 md:text-lg pr-9 w-full" placeholder="Enter your country" />
                <span className="absolute top-0 right-2 translate-y-1/2">
                  <div className="w-5 h-5">{Icons.Search('w-full h-full')}</div>
                </span>
              </div>
            </div>
          </div>
        </div>

        {
          isLoading
            ? (
              <div className="flex-grow">
                <Spinner />
              </div>
            )
            : (
              <div className="flex flex-wrap">
                {
                  data
                    ? data.map((country) => <CountryCard data={country} width="lg:w-1/4 md:w-1/3 w-1/2" />)
                    : <p className="w-full text-center">Oh! I&apos;m sorry. Please refresh or come back later</p>
                }
              </div>
            )
        }
      </div>
    </div>
  );
}

export default HomePage;

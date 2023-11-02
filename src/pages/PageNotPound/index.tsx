import { Link } from 'react-router-dom';

function PageNotPound() {
  return (
    <div className="h-screen flex lg:flex-row flex-col mx-5">
      <div className="bg-error order-2 flex-grow lg:flex-grow-0 lg:w-1/3 lg:bg-center" />
      <div className="mt-5 md:mt-10 lg:w-2/3 flex justify-center items-center">
        <div className="order-1 shadow-2xl rounded-xl p-4 md:p-5 mx-10 md:mx-20 lg:mx-32 flex flex-col items-center">
          <h1 className="text-center font-medium text-2xl mb-4">
            Page Not Pound
          </h1>
          <p className="mb-8 text-base">
            Check that you typed the address correctly,
            go back to your previous page or try using our site search to find something specific.
          </p>
          <Link className="inline-block bg-blue-200 px-8 md:px-12 py-1 md:py-2 rounded-md" to="">Comeback Home!</Link>
        </div>
      </div>
    </div>
  );
}

export default PageNotPound;

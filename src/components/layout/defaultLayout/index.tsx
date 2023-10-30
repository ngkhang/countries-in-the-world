import React from 'react';
import Header from '~/components/generic/Header';
import Footer from '~/components/generic/Footer';

function DefaultLayout({ children }: { children: React.ReactElement }) {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Header />
      <div className="flex justify-center flex-grow">
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;

import { Link } from 'react-router-dom';

const dbHeader = {
  logo: 'Logo',
  nav: [
    {
      id: 1,
      title: 'Home',
      url: '/',
    },
    {
      id: 2,
      title: 'About',
      url: '/',
    },
  ],
  social: [
    {
      id: 1,
      title: 'Github',
      url: '',
    },
    {
      id: 2,
      title: 'Linkedin',
      url: '',
    },
  ],
};

function Header() {
  return (
    <div className="bg-slate-200">
      <div className="flex items-center justify-between mx-2">
        <div className="">
          {dbHeader.logo}
        </div>
        <div className="flex">
          <div className="">
            {
              dbHeader.nav.map((item) => <Link key={item.id} to={item.url} className="ml-4 py-1 px-1">{item.title}</Link>)
            }
          </div>
          <div className="">
            {
              dbHeader.social.map((item) => <Link key={item.id} to={item.url} className="ml-4 py-1 px-1">{item.title}</Link>)
            }
          </div>
        </div>

      </div>
    </div>
  );
}

export default Header;

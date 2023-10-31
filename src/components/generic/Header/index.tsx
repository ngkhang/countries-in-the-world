import { Link } from 'react-router-dom';
import Icons from '~/utils/helpers/icons';

const dbHeader = {
  logo: 'Earth',
  nav: [
    {
      id: 1,
      title: 'Home',
      url: '/',
    },
    {
      id: 2,
      title: 'About',
      url: '/about',
    },
  ],
  social: [
    {
      id: 1,
      title: 'Github',
      url: 'https://github.com/ngkhang',
    },
    {
      id: 2,
      title: 'Linkedin',
      url: 'https://www.linkedin.com/in/ngkhang0220/',
    },
  ],
};

function Header() {
  return (
    <div className="bg-slate-200">
      <div className="grid grid-cols-3 gap-3 justify-items-stretch mx-3 py-2">
        <div className="justify-self-start">
          {Icons[dbHeader.logo]('w-full h-full')}
        </div>
        <div className="justify-self-center">
          {
            dbHeader.nav.map((item) => (
              <Link key={item.id} to={item.url} className="mx-2">
                {item.title}
              </Link>
            ))
          }
        </div>
        <div className="justify-self-end flex">
          {
            dbHeader.social.map((item) => (
              <Link key={item.id} to={item.url} className="ml-4">
                {Icons[item.title]('w-full h-full')}
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Header;

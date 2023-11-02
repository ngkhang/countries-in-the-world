import { Link, NavLink } from 'react-router-dom';
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
    <div className="bg-slate-50 flex justify-center shadow-xl">
      <div className="md:w-mainSize grid grid-cols-3 gap-3 justify-items-stretch mx-3 py-2">
        <div className="justify-self-start">
          <Link to="/" className="">
            {Icons[dbHeader.logo]('w-full h-full')}
          </Link>
        </div>
        <div className="justify-self-center">
          {
            dbHeader.nav.map((item) => (
              <NavLink key={item.id} to={item.url} className="mx-2 md:mx-4 md:text-lg">
                {item.title}
              </NavLink>
            ))
          }
        </div>
        <div className="justify-self-end flex">
          {
            dbHeader.social.map((item) => (
              <Link target="_blank" key={item.id} to={item.url} className="ml-4 md:ml-6 h-5 md:h-7">
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

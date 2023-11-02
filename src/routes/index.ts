import AboutPage from '~/pages/AboutPage';
import HomePage from '~/pages/HomePage';

const PublicRoutes = [
  {
    id: 1,
    path: '/',
    component: HomePage,
  },
  {
    id: 2,
    path: '/about',
    component: AboutPage,
  },
];

export { PublicRoutes };

import Home from './home';
import Kit from './kit';

export default [
  {
    url: '/',
    component: Home,
    name: 'Home',
  },
  {
    url: '/kit',
    component: Kit,
    name: 'Kit',
  },
  {
    url: '/boilerplate',
    component: Home,
    name: 'Home',
  },
  {
    url: '/boilerplate/kit',
    component: Kit,
    name: 'Kit',
  },
];

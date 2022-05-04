import Home from 'Components/home';
import ContactUs from 'Components/contact';

export const routes = {
  home: { path: "/", exact: true, component: Home },
  contact: { path: "/contact", component: ContactUs }
};

export const mainNavigation = [
  routes.home,
  routes.contact
]


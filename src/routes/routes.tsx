import React from 'react';
import { RouteProps } from 'react-router-dom';
import { Home } from '../components/home';
import Search from '../components/search';

interface Route extends RouteProps {
  title?: string;
  showInNavbar?: boolean;
}

const ROUTES: Route[] = [
  {
    path: '/',
    component: () => <Home />,
    exact: true,
    title: 'Home',
    showInNavbar: true,
  },
  {
    path: '/search',
    component: () => <Search />,
    title: 'Search',
    showInNavbar: true,
  },
  {
    path: '/about',
    component: () => <div>About</div>,
    title: 'About',
    showInNavbar: true,
  },
  {
    path: '/contact',
    component: () => <div>Contact</div>,
    title: 'Contact',
    showInNavbar: true,
  },
];

export default ROUTES;

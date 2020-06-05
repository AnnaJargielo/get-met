import React from 'react';
import { RouteProps } from 'react-router-dom';
import { Home, ObjectPage, Search, Favorites } from '../components';
import About from '../components/about';

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
    path: '/object/:objectId',
    component: () => <ObjectPage />,
    showInNavbar: false,
  },
  {
    path: '/favorites',
    component: () => <Favorites />,
    title: 'Favorites',
    showInNavbar: true,
  },
  {
    path: '/about',
    component: () => <About />,
    title: 'About',
    showInNavbar: true,
  },
];

export default ROUTES;

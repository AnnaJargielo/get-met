import React from 'react';
import { RouteProps } from 'react-router-dom';
import { Objects } from '../components/objects';

interface Route extends RouteProps {
  title?: string;
  showInNavbar?: boolean;
}

const ROUTES: Route[] = [
  {
    path: '/',
    component: () => (
      <div>
        Home
        <Objects />
      </div>
    ),
    exact: true,
    title: 'Home',
    showInNavbar: true,
  },
  {
    path: '/search',
    component: () => <div>Search</div>,
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

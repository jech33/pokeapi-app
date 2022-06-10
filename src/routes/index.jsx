import React from 'react';
import Home from '../views/home/Home';
import NotFound from '../views/notfound/NotFound';
import Pokemons from '../views/pokemons/Pokemons';

const routes = [
  /* Home */
  { path: '/', name: 'home', component: <Home /> },
  /* Pokemons */
  { path: '/pokemons', name: 'pokemons', component: <Pokemons /> },
  /* Default */
  { path: '*', name: 'default', component: <NotFound /> }
];

export default routes;
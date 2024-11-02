import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Home from '../../HomeModule/Home';
import Articles from '../Articles/Articles';
import Subscribe from '../Subscribe/Subscribe';
import FeaturedBook from '../FeaturedBook/FeaturedBook';
import NewRelease from '../NewRelease/NewRelease';
import Category from '../Categoty/Categoty';

function MasterLayout() {

  return (
    <div>
      <Home/>
      <Category/>
      <NewRelease/>
      <FeaturedBook/>
      <Subscribe/>
      <Articles/>
      <Footer/>
    </div>
  );
}

export default MasterLayout;

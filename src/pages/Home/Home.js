import React from 'react';
import Header from '../../components/Header/Header';
import Nav from '../../components/Nav/Nav';
import Posts from '../../components/Posts/Posts';
const Home = () => {
  return (
    <div>
      <Nav />
      <Header />
      <Posts />
    </div>
  );
};

export default Home;

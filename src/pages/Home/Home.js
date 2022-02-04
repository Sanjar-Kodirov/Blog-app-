import React from 'react';
import Header from '../../components/Header/Header';
import Nav from '../../components/Nav/Nav';
import Posts from '../../components/Posts/Posts';
import Footer from '../../components/Footer/Footer';
const Home = () => {
  return (
    <div>
      <Nav />
      <Header />
      <Posts />
      <Footer />
    </div>
  );
};

export default Home;

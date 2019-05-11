import React from 'react';
import Header from './Header';

const HomePage = () => (
  <div>
    <Header />
    <div className="homepage">
      <h2 className="homepage">
        Welcome to my website!
      </h2>
      <p className="homepage">
        This website is still a work in progress. This site has been deployed using an AWS 
        Elastic Beanstalk instance.  
      </p>
    </div>
  </div>
)

export default HomePage;

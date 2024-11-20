import React from 'react';
import logo from '../assets/pfp.jpg';

const Profile = () => {
  return (
    <div>
      <div className="logocontainer">
        <div className="logo">
          <img src={logo} alt="Akhil Mahesh Avatar" />
        </div>
      </div>

      <h2 className="name">Akhil Mahesh</h2>
      <p className="about-1">Software Engineer Aspirant</p>
      <p className="about-2">
        Student at University of Calicut
      </p>
    </div>
  );
};

export default Profile;

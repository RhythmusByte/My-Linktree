import { useState } from 'react';
import logo from './assets/pfp.jpg';
import './App.css';

function App() {
  return (
    <>
      <main className="container">
        {/* Profile Section */}
        <div className="logocontainer">
          <div className="logo">
            <img src={logo} alt="Akhil Mahesh Avatar" />
          </div>
        </div>

        <h2 className="name">Akhil Mahesh</h2>
        <p className="about">
          Software Engineer Aspirant<br />
          Student at <b>University of Calicut</b>
        </p>

        {/* Social Links */}
        <div className="tiles">
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/rhythmusbyte" className="link">
            <div className="icon">
              <i className="fa-brands fa-linkedin"></i>
            </div>
            <p className="social">LinkedIn</p>
            <div className="copy" link="https://www.linkedin.com/in/rhythmusbyte">
              <i className="fa-brands fa-creative-commons-share"></i>
            </div>
          </a>
        </div>

        <div className="tiles">
          {/* GitHub */}
          <a href="https://github.com/RhythmusByte" className="link">
            <div className="icon">
              <i className="fa-brands fa-github"></i>
            </div>
            <p className="social">GitHub</p>
            <div className="copy" link="https://github.com/RhythmusByte">
              <i className="fa-brands fa-creative-commons-share"></i>
            </div>
          </a>
        </div>

        <div className="tiles">
          {/* Instagram */}
          <a href="https://instagram.com/rhythmusbyte" className="link">
            <div className="icon">
              <i className="fa-brands fa-instagram"></i>
            </div>
            <p className="social">Instagram</p>
            <div className="copy" link="https://instagram.com/rhythmusbyte">
              <i className="fa-brands fa-creative-commons-share"></i>
            </div>
          </a>
        </div>

        <div className="tiles">
          {/* Email */}
          <a href="mailto:akhilmahesh@proton.me" className="link">
            <div className="icon">
              <i className="fa-regular fa-envelope"></i>
            </div>
            <p className="social">Email</p>
            <div className="copy" link="akhilmahesh@proton.me">
              <i className="fa-brands fa-creative-commons-share"></i>
            </div>
          </a>
        </div>

        <div className="tiles">
          {/* Codepen */}
          <a href="https://codepen.io/RhythmusByte" className="link">
            <div className="icon">
              <i className="fa-brands fa-codepen"></i>
            </div>
            <p className="social">Codepen</p>
            <div className="copy" link="https://codepen.io/RhythmusByte">
              <i className="fa-brands fa-creative-commons-share"></i>
            </div>
          </a>
        </div>

        {/* X */}
        <div className="tiles">
          <a href="https://x.com/RhythmusByte" className="link">
            <div className="icon">
              <i className="fa-brands fa-x-twitter"></i>
            </div>
            <p className="social">X (Twitter)</p>
            <div className="copy" link="https://x.com/RhythmusByte">
              <i className="fa-brands fa-creative-commons-share"></i>
            </div>
          </a>
        </div>

        {/* Discord */}
        <div className="tiles">
          <a href="https://discordapp.com/users/1066242357793656842" className="link">
            <div className="icon">
              <i className="fa-brands fa-discord"></i>
            </div>
            <p className="social">Discord</p>
            <div className="copy" link="https://discordapp.com/users/1066242357793656842">
              <i className="fa-brands fa-creative-commons-share"></i>
            </div>
          </a>
        </div>

        {/* Facebook */}
        <div className="tiles">
          <a href="https://www.facebook.com/RhythmusByte?mibextid=ZbWKwL" className="link">
            <div className="icon">
              <i className="fa-brands fa-facebook"></i>
            </div>
            <p className="social">Facebook</p>
            <div className="copy" link="https://www.facebook.com/RhythmusByte">
              <i className="fa-brands fa-creative-commons-share"></i>
            </div>
          </a>
        </div>

        {/* Threads */}
        <div className="tiles">
          <a href="https://www.threads.net/@rhythmusbyte" className="link">
            <div className="icon">
              <i className="fa-brands fa-threads"></i>
            </div>
            <p className="social">Threads</p>
            <div className="copy" link="https://www.threads.net/@rhythmusbyte">
              <i className="fa-brands fa-creative-commons-share"></i>
            </div>
          </a>
        </div>

        {/* Medium */}
        <div className="tiles">
          <a href="https://medium.com/@rhythmusbyte" className="link">
            <div className="icon">
              <i className="fa-brands fa-medium"></i>
            </div>
            <p className="social">Medium</p>
            <div className="copy" link="https://medium.com/@rhythmusbyte">
              <i className="fa-brands fa-creative-commons-share"></i>
            </div>
          </a>
        </div>

        {/* Dev */}
        <div className="tiles">
          <a href="https://dev.to/rhythmusbyte" className="link">
            <div className="icon">
              <i className="fa-brands fa-dev"></i>
            </div>
            <p className="social">Dev</p>
            <div className="copy" link="https://dev.to/rhythmusbyte">
              <i className="fa-brands fa-creative-commons-share"></i>
            </div>
          </a>
        </div>

        {/* Blogger */}
        <div className="tiles">
          <a href="https://rhythmusbyte.blogspot.com" className="link">
            <div className="icon">
              <i className="fa-brands fa-blogger"></i>
            </div>
            <p className="social">Blog</p>
            <div className="copy" link="https://rhythmusbyte.blogspot.com">
              <i className="fa-brands fa-creative-commons-share"></i>
            </div>
          </a>
        </div>
      </main>
      <footer>
        <h3 id="copyright">
          Created by <a href="https://github.com/RhythmusByte">Akhil Mahesh</a> | &copy; <span id="year"></span> All Rights Reserved
        </h3>
      </footer>
    </>
  );
}

export default App;
 

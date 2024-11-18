import { useState, useEffect } from 'react';
import logo from './assets/pfp.jpg';
import './App.css';

function App() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const copyBtns = document.querySelectorAll('.copy');

    async function copyText(e) {
      e.preventDefault();
      const link = e.target.getAttribute('link');
      console.log(`The link: "${link}"`);
      try {
        await navigator.clipboard.writeText(link);
        alert('Link copied to clipboard');
      } catch (err) {
        console.error('Failed to copy text:', err);
      }
    }

    copyBtns.forEach((btn) => btn.addEventListener('click', copyText));

    // Cleanup event listeners on unmount
    return () => {
      copyBtns.forEach((btn) => btn.removeEventListener('click', copyText));
    };
  }, []);

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
        <p className="about-1">Software Engineer Aspirant</p>
        <p className="about-2">
          Student at University of Calicut
        </p>

        {/* Social Links */}
        {[
          { name: 'LinkedIn', link: 'https://www.linkedin.com/in/rhythmusbyte', icon: 'fa-linkedin' },
          { name: 'GitHub', link: 'https://github.com/RhythmusByte', icon: 'fa-github' },
          { name: 'Instagram', link: 'https://instagram.com/rhythmusbyte', icon: 'fa-instagram' },
          { name: 'Email', link: 'mailto:akhilmahesh@proton.me', icon: 'fa-envelope' },
          { name: 'Codepen', link: 'https://codepen.io/RhythmusByte', icon: 'fa-codepen' },
          { name: 'X (Twitter)', link: 'https://x.com/RhythmusByte', icon: 'fa-x-twitter' },
          { name: 'Discord', link: 'https://discordapp.com/users/1066242357793656842', icon: 'fa-discord' },
          { name: 'Facebook', link: 'https://www.facebook.com/RhythmusByte', icon: 'fa-facebook' },
          { name: 'Threads', link: 'https://www.threads.net/@rhythmusbyte', icon: 'fa-threads' },
          { name: 'Medium', link: 'https://medium.com/@rhythmusbyte', icon: 'fa-medium' },
          { name: 'Dev', link: 'https://dev.to/rhythmusbyte', icon: 'fa-dev' },
          { name: 'Blog', link: 'https://rhythmusbyte.blogspot.com', icon: 'fa-blogger' },
        ].map(({ name, link, icon }) => (
          <div className="tiles" key={name}>
            <a href={link} className="link">
              <div className="icon">
                <i className={`fa-brands ${icon}`}></i>
              </div>
              <p className="social">{name}</p>
              <div className="copy" link={link}>
                <i className="fa-brands fa-creative-commons-share"></i>
              </div>
            </a>
          </div>
        ))}
      </main>

      <footer>
        <h3 id="copyright">
          Created by <a href="https://github.com/RhythmusByte">Akhil Mahesh</a> | &copy; {currentYear} All Rights Reserved
        </h3>
      </footer>
    </>
  );
}

export default App;


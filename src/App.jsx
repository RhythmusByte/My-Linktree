import { useState } from 'react';
import ProfileSection from './components/ProfileSection';
import SocialLinks from './components/SocialLinks';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [currentYear] = useState(new Date().getFullYear());

  return (
    <>
      <main className="container">
        <ProfileSection />
        <SocialLinks />
      </main>
      <Footer currentYear={currentYear} />
    </>
  );
}

export default App;

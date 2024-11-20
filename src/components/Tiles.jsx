import React from 'react';

const Tiles = ({ socialLinks }) => {
  const handleCopy = async (link) => {
    try {
      await navigator.clipboard.writeText(link);
      alert('Link copied to clipboard');
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  return (
    <>
      {socialLinks.map(({ name, link, icon, isBrand }) => (
        <div className="tiles" key={name}>
          <a href={link} className="link">
            <div className="icon">
              <i className={`${isBrand ? 'fa-brands' : 'fa-solid'} ${icon}`}></i>
            </div>
            <p className="social">{name}</p>
            <div 
              className="copy" 
              onClick={(e) => {
                e.preventDefault();
                handleCopy(link);
              }}
            >
              <i className="fa-brands fa-creative-commons-share"></i>
            </div>
          </a>
        </div>
      ))}
    </>
  );
};

export default Tiles;

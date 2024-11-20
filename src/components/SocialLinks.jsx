const links = [
  { name: 'LinkedIn', link: 'https://www.linkedin.com/in/rhythmusbyte', icon: 'fa-linkedin', isBrand: true },
  { name: 'GitHub', link: 'https://github.com/RhythmusByte', icon: 'fa-github', isBrand: true },
  { name: 'Instagram', link: 'https://instagram.com/rhythmusbyte', icon: 'fa-instagram', isBrand: true },
  { name: 'Email', link: 'mailto:akhilmahesh@proton.me', icon: 'fa-envelope', isBrand: false },
  { name: 'Codepen', link: 'https://codepen.io/RhythmusByte', icon: 'fa-codepen', isBrand: true },
  { name: 'X (Twitter)', link: 'https://x.com/RhythmusByte', icon: 'fa-x-twitter', isBrand: true },
  { name: 'Discord', link: 'https://discordapp.com/users/1066242357793656842', icon: 'fa-discord', isBrand: true },
  { name: 'Facebook', link: 'https://www.facebook.com/RhythmusByte', icon: 'fa-facebook', isBrand: true },
  { name: 'Threads', link: 'https://www.threads.net/@rhythmusbyte', icon: 'fa-threads', isBrand: true },
  { name: 'Medium', link: 'https://medium.com/@rhythmusbyte', icon: 'fa-medium', isBrand: true },
  { name: 'Dev', link: 'https://dev.to/rhythmusbyte', icon: 'fa-dev', isBrand: true },
  { name: 'Blog', link: 'https://rhythmusbyte.blogspot.com', icon: 'fa-blogger', isBrand: true },
];

function SocialLinks() {
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
      {links.map(({ name, link, icon, isBrand }) => (
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
}

export default SocialLinks;

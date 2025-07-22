import './Home.css';

const Home = ({ data, id }) => {
  const backgroundStyle = {
    backgroundImage: `url(${data.backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <section className="home-container" style={backgroundStyle} id={id || 'home'}>
      <div className="hero">
        <h1>{data.name}</h1>
        <h2>{data.title}</h2>
        <p>{data.subtitle}</p>
        <div className="hero-buttons">
  <a href={data.resumeLink} download className="hero-button">
    {data?.primaryButton}
  </a>
  <a href="#portfolio" className="hero-button outline">
    {data?.secondaryButton}
  </a>
</div>

      </div>
    </section>
  );
};

export default Home;

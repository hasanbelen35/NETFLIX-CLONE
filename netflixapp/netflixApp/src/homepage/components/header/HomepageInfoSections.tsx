import homepageGif from '../header/homepage-fig.gif';
import homeDownImg from '../header/download.jpg';
import homeWatchGif from '../header/watch.png';
import homeWatchGif2 from '../header/giphy.gif';
import createForKidsImage from '../header/createForKids.png';
import HomePageBlur from '../header/HomePageBlur';

function HomepageInfoSections() {
  return (
    <main className='homepage-main'>
      <section className="gif-div">
        <div className="gif-div-info">
          <h1>Enjoy on your TV</h1>
          <h4>Watch on Smart TVs, Playstation, Xbox, Chromecast, <br /> Apple TV, Blu-ray players, and more.</h4>
        </div>
        <div className="gif-div-gif">
          <img src={homepageGif} alt="Enjoy on your TV" />
        </div>
      </section>

      {/* BLUR EFFECT */}
      <HomePageBlur />

      {/* DOWNLOAD SECTION */}
      <section className='homepage-main-download-section'>
        <img src={homeDownImg} alt="Download shows" />
        <div className="homepage-main-download-info">
          <h1>
            Download your shows to <br /> watch offline
          </h1>
          <h4>Save your favorites easily and always have something <br /> to watch.</h4>
        </div>
      </section>

      {/* BLUR EFFECT */}
      <HomePageBlur />

      {/* WATCH SECTION */}
      <section className='homepage-watch-section'>
        <div className="homepage-watch-section-info">
          <h1>Watch everywhere</h1>
          <h5>Stream unlimited movies and TV shows on your <br /> phone, tablet, laptop, and TV.</h5>
        </div>
        <div className="homepage-watch-section-gif">
          <img className='homeWatchGif' src={homeWatchGif} alt="Watch everywhere" />
          <img className='homeWatchGif2' src={homeWatchGif2} alt="Watch everywhere" />
        </div>
      </section>

      {/* BLUR EFFECT */}
      <HomePageBlur />

      <section className="homepage-createForKids-section">
        <div className="createForKids-image">
          <img src={createForKidsImage} alt="Create profiles for kids" />
        </div>
        <div className="createForKids-info">
          <h1>Create profiles for kids</h1>
          <h4>Send kids on adventures with their favorite <br /> characters in a space made just for them—free <br /> with your membership.</h4>
        </div>
      </section>
    </main>
  );
}

export default HomepageInfoSections;

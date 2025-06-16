import './AppDownload.css';
import Stack from './Stack';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/react-splide/css';

// 👇 Carousel logos
const logos = [
  { id: 1, img: "/mahindra.png" },
  { id: 2, img: "/bmw.png" },
  { id: 3, img: "/honda.png" },
  { id: 4, img: "/ford.png" },
  { id: 5, img: "/kia.png" },
  { id: 6, img: "/hundai.png" },
  { id: 7, img: "/ktm.png" },
  { id: 8, img: "/re.png" },
  { id: 9, img: "/skoda.png" },
  { id: 10, img: "/suzuki.png" },
  { id: 11, img: "/tata.png" },
  { id: 12, img: "/toyota.png" },
  { id: 13, img: "/volvo.png" },
  { id: 14, img: "/yamaha.png" },
];

// 👇 Stack vehicle images
const vehicleImages = [
  { id: 1, img: "https://stimg.cardekho.com/images/carexteriorimages/930x620/MG/Hector/11869/1721899015829/front-left-side-47.jpg" },
  { id: 2, img: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Volvo/XC60/10589/1692870711844/front-left-side-47.jpg" },
  { id: 3, img: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Jaguar/F-Pace/10644/1701246382378/front-left-side-47.jpg" },
  { id: 4, img: "https://cdn.bikedekho.com/processedimages/kawasaki/2020-z900/source/2020-z900683e7512e4390.jpg" }
];

const AppDownload = () => {
  return (
    <section className="app-download">

      <h3 className="carousel-heading">Trusted by India's Top Auto Brands</h3>
      <br />

      {/* 🚗 Brand Logo Carousel */}
      <div className="carousel-wrapper">
        <Splide
          options={{
            type: 'loop',
            drag: 'free',
            focus: 'center',
            perPage: 4,
            gap: '2rem',
            arrows: false,
            pagination: false,
            autoScroll: {
              speed: 1,
            },
          }}
          extensions={{ AutoScroll }}
        >
          {logos.map((brand) => (
            <SplideSlide key={brand.id}>
              <img
                src={brand.img}
                alt={`brand-logo-${brand.id}`}
                className="carousel-logo"
              />
            </SplideSlide>
          ))}
        </Splide>
      </div>

      {/* 🖼️ Vehicle Image Stack */}
      <div className="app-download-image">
        <Stack
          randomRotation={false}
          cardDimensions={{ width: 300, height: 300 }}
          cardsData={vehicleImages}
          autoRotate={true}
          autoRotateInterval={2500}
        />
      </div>

      {/* 📱 Text and Buttons */}
      <div className="app-download-content">
        <h2>Get your FineRides now!</h2>
        <p>
          Book your rides on the go! Access FineRides anytime, anywhere to rent cars and bikes,
          enjoy rides at your doorstep, track your bookings, and experience a smooth, secure journey.
        </p>
        <div className="app-buttons">
          <a href="#/about" className="btn app-store">Our Story</a>
          <a href="#/contact" className="btn play-store">Reach Us</a>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;

import { Carousel } from 'react-responsive-carousel';
import './carousel.min.css';

export default function CarouselComponent() {
  return (
    <Carousel
      showArrows={true}
      showThumbs={false}
      showIndicators={false}
      infiniteLoop={true}
      autoPlay={true}
    >
      <div>
        <img src="/img/sw7.jpg" alt="Star Wars" />
        <p className="legend">The force be with you</p>
      </div>
      <div>
        <img src="/img/sw8.jpg" alt="Star Wars" />
        <p className="legend">Star Trooper</p>
      </div>
      <div>
        <img src="/img/sw9.jpg" alt="Star Wars" />
        <p className="legend">Darth Vader</p>
      </div>
      <div>
        <img src="/img/sw10.jpg" alt="Star Wars" />
        <p className="legend">A long time ago in a galaxy far, far away</p>
      </div>
    </Carousel>
  );
}

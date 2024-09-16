import Carousel from 'react-bootstrap/Carousel';
import Image1 from '../assets/1424858.jpg';
import Image2 from '../assets/3648478.jpg'
import Image3 from '../assets/3648720.jpg';




function DarkVariantExample() {
  return (
    <div className='w-100 justify-content-center'>
              <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100 justify-content-center"
          src={Image1}
          alt="First slide"
          style={{}}
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= {Image2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 justify-content-center align-content-center"
          src= {Image3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default DarkVariantExample;
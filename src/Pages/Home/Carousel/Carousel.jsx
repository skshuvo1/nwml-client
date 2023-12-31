import React from 'react';
import img1 from '../../../assets/noman30.jpg'
import img2 from '../../../assets/noman16.jpg'
import img3 from '../../../assets/noman19.jpg'
import img4 from '../../../assets/noman22.jpg'
import { FaArrowRight } from "react-icons/fa6";
import Management from '../Management/Management';
import { Link } from 'react-router-dom';

const Content = () => {
  return (
    <div className='w-full'>
      <div className="carousel w-full min-h-screen" >
        <div id="slide1" className="carousel-item relative w-full " style={{ backgroundImage: `linear-gradient(to left, rgba(23, 59, 149, 0.1), rgb(0 55 46)), url(${img1}), linear-gradient(to right, rgba(0, 224, 255, 1), rgba(0, 133, 255, 1)) `, backgroundRepeat: 'no-repeat', width: '100vw', backgroundSize: 'cover', marginTop: '-9%', opacity: '1' }} >
          <div className=" max-w-md mt-96 ms-48 text-white ">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <Link to='/portfolio'><button className="btn btn-outline btn-secondary">Our Portfolio <FaArrowRight></FaArrowRight></button></Link>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full" style={{ backgroundImage: `linear-gradient(to left, rgba(23, 59, 149, 0.1), rgb(0 55 46)), url(${img2})`, backgroundRepeat: 'no-repeat', width: '100vw', backgroundSize: 'cover', marginTop: '-9%' }} >
          <div className="max-w-md mt-96 ms-48 text-white">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <Link to='/portfolio'><button className="btn btn-outline btn-secondary">Our Portfolio <FaArrowRight></FaArrowRight></button></Link>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full" style={{ backgroundImage: `linear-gradient(to left, rgba(23, 59, 149, 0.1), rgb(0 55 46)), url(${img3})`, backgroundRepeat: 'no-repeat', width: '100vw', backgroundSize: 'cover', marginTop: '-9%' }} >
          <div className="max-w-md mt-96 ms-48 text-white">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <Link to='/portfolio'><button className="btn btn-outline btn-secondary">Our Portfolio <FaArrowRight></FaArrowRight></button></Link>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full" style={{ backgroundImage: `linear-gradient(to left,rgba(23, 59, 149, 0.1), rgb(0 55 46)), url(${img4})`, backgroundRepeat: 'no-repeat', width: '100vw', backgroundSize: 'cover', marginTop: '-9%' }} >
          <div className="max-w-md mt-96 ms-48 text-white">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <Link to='/portfolio'><button className="btn btn-outline btn-secondary">Our Portfolio <FaArrowRight></FaArrowRight></button></Link>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>

      </div>
      <div>
        <Management></Management>
      </div>
    </div>
  );
};

export default Content;
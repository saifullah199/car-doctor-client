
import Img1 from '../../assets/images/homeCarousel/1.jpg';
import Img2 from '../../assets/images/homeCarousel/2.jpg';
import Img3 from '../../assets/images/homeCarousel/3.jpg';
import Img4 from '../../assets/images/homeCarousel/4.jpg';


const Banner = () => {
    return (
        <div className="carousel w-full rounded-2xl h-[700px]">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={Img1} className="w-full" />
    <div className=" absolute  h-full  text-white 
     left-5 right-5 bottom-0 gap-4 space-y-5 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
      <div className='w-2/3 space-y-5 '>
        <h3 className='text-6xl'> Affordable  Price For Car 
         Servicing </h3>
        <p> There are many variations of passages of  available, 
            but the majority have suffered alteration in some form </p>

            <div>
                <button className='btn mr-5'>Discover More </button>
                <button className='btn'> Latest Project </button>
            </div>
      </div>
      
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2
     left-5 right-5 gap-4 bottom-0">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={Img2} className="w-full" />
    <div className=" absolute  text-white transform -translate-y-1/2
     left-5 right-5 gap-4 bottom-0 space-y-5">
      <div className='w-1/3 space-y-5 '>
        <h3 className='text-6xl'> Affordable <br /> Price For Car <br />
         Servicing </h3>
        <p> There are many variations of passages of  available, 
           <br /> but the majority have suffered alteration in some form </p>
      </div>
      <div>
        <button className='btn mr-5'>Discover More </button>
        <button className='btn'> Latest Project </button>
      </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2
     left-5 right-5 gap-4 bottom-0">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={Img3} className="w-full" />
    <div className=" absolute  text-white transform -translate-y-1/2
     left-5 right-5 gap-4 bottom-0 space-y-5">
      <div className='w-1/3 space-y-5 '>
        <h3 className='text-6xl'> Affordable <br /> Price For Car <br />
         Servicing </h3>
        <p> There are many variations of passages of  available, 
           <br /> but the majority have suffered alteration in some form </p>
      </div>
      <div>
        <button className='btn mr-5'>Discover More </button>
        <button className='btn'> Latest Project </button>
      </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2
     left-5 right-5 gap-4 bottom-0">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={Img4} className="w-full" />
    <div className=" absolute  text-white transform -translate-y-1/2
     left-5 right-5 gap-4 bottom-0 space-y-5">
      <div className='w-1/3 space-y-5 '>
        <h3 className='text-6xl'> Affordable <br /> Price For Car <br />
         Servicing </h3>
        <p> There are many variations of passages of  available, 
           <br /> but the majority have suffered alteration in some form </p>
      </div>
      <div>
        <button className='btn mr-5'>Discover More </button>
        <button className='btn'> Latest Project </button>
      </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2
     left-5 right-5 gap-4 bottom-0">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    );
};

export default Banner;
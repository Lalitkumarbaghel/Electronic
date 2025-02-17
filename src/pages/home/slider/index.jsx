import React from "react";
import Slider from "react-slick";
import './style.css'
import Slider1 from '../../../assets/images/banner1.png'
import Slider2 from '../../../assets/images/banner2.png'
import Slider3 from '../../../assets/images/banner3.png'
export default function SimpleSlider() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (

        <section className="homeslider">
            <div className="container-fuild">
      <Slider {...settings}>
        <div>
          <img src={Slider1} className="img-fluid" />
        </div>
        <div>
        <img src={Slider2} className="img-fluid" />
        </div>
        <div>
        <img src={Slider3} className="img-fluid" />
        </div>
        
      </Slider>
      </div>
      </section>
    );
  }
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
  };

  return (
    <div className="w-full overflow-hidden">
      <Slider {...settings} className="m-0 p-0">
        <figure className="m-0 p-0">
          <img
            src="/images/wp1.jpg"
            alt="Wedding 1"
            className="w-full max-h-[700px] object-cover block focus:outline-none"
            tabIndex="-1"
          />
        </figure>
        <figure className="m-0 p-0">
          <img
            src="/images/wp2.jpg"
            alt="Wedding 2"
            className="w-full max-h-[700px] object-cover block focus:outline-none"
            tabIndex="-1"
          />
        </figure>
        <figure className="m-0 p-0">
          <img
            src="https://images.squarespace-cdn.com/content/569fb1fccbced6e361e09b11/1689174888469-KD16AK7TCF6H07QCI2BA/Portland-Oregon-wedding-planners.jpeg?format=1500w&content-type=image%2Fjpeg"
            alt="Wedding 3"
            className="w-full max-h-[700px] object-cover block focus:outline-none"
            tabIndex="-1"
          />
        </figure>
      </Slider>
      {/* Featured Image Section */}
      <figure className="w-full m-0 p-0">
        <img
          src="https://images.squarespace-cdn.com/content/v1/569fb1fccbced6e361e09b11/0de00ea8-0032-4d21-90f8-688847c45684/Untitled+design+(2).png"
          alt="Featured Wedding"
          className="w-full h-[120px] object-cover object-center "
          loading="lazy"
          decoding="async"
        />
      </figure>
    </div>
  );
};

export default ImageSlider;

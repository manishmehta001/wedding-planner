import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    fade: true,
  };

  return (
    <div className="w-full overflow-hidden">
      <Slider {...settings}>
        <figure>
          <img
            src="/images/wp1.jpg"
            alt="Wedding 1"
            className="w-full max-h-[700px] object-cover"
          />
        </figure>
        <figure>
          <img
            src="/images/wp2.jpg"
            alt="Wedding 2"
            className="w-full max-h-[700px] object-cover"
          />
        </figure>
        <figure>
          <img
            src="/images/wp4.jpg"
            alt="Wedding 2"
            className="w-full max-h-[700px] object-cover"
          />
        </figure>
        <figure>
          <img
            src="/images/wp7.jpg"
            alt="Wedding 2"
            className="w-full max-h-[700px] object-cover"
          />
        </figure>
        <figure>
          <img
            src="/images/wp6.jpg"
            alt="Wedding 2"
            className="w-full max-h-[700px] object-cover"
          />
        </figure>
        <figure>
          <img
            src="https://images.squarespace-cdn.com/content/569fb1fccbced6e361e09b11/1689174888469-KD16AK7TCF6H07QCI2BA/Portland-Oregon-wedding-planners.jpeg?format=1500w&content-type=image%2Fjpeg"
            alt="Wedding 3"
            className="w-full max-h-[700px] object-cover"
          />
        </figure>
      </Slider>
      {/* Featured Image Section */}
    </div>
  );
};

export default ImageSlider;

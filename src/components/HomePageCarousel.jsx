import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export const HomePageCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  const sliderImages = [
    {
      url: "./s_1.jpg",
      alt: "slider1",
    },
    {
      url: "./s_2.jpg",
      alt: "slider2",
    },
    {
      url: "./s_3.jpg",
      alt: "slider3",
    },
    {
      url: "./s_4.jpg",
      alt: "slider4",
    },
    // {
    //   url: "./s_5.jpg",
    //   alt: "slider5",
    // },
  ];

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes());
    }
  }, [emblaApi]);

  return (
    <div className="mb-2 overflow-hidden embla" ref={emblaRef}>
      <div className="flex embla__container">
        {sliderImages.map((sliderImage, index) => (
          <div className="embla__slide" key={index}>
            <img
              src={sliderImage.url}
              alt={sliderImage.alt}
              style={{
                width: "100%",
                maxHeight: 560,
                margin: "0 auto",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePageCarousel;

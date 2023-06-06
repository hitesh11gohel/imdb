import React, { useContext, useEffect, useState } from "react";
import { ImdbContext } from "./ImdbContext";
// import { ImdbContext } from "../../pages/ImdbContext";
import { SliderSkeleton } from "./Loader";

const Overlay = () => {
  const ContextData = useContext(ImdbContext);
  const [sliderData, setSliderData] = useState({});

  useEffect(() => {
    setSliderData(ContextData.data[2]);
  }, [ContextData.data]);

  return !ContextData.loading ? (
    <figure className="relative">
      <a href="#">
        <img
          className="brightness-50 rounded-lg h-96 w-full object-cover"
          src={sliderData["i"]?.imageUrl}
          alt={sliderData["l"]}
        />
      </a>
      <figcaption className="px-6 absolute top-10 right-0 md:right-24 md:top-15 w-full md:w-96">
        <h5 className="text-2xl font-bold my-3">{sliderData["l"]}</h5>
        <p className="text-md">TV-MA Action, Advanture, Drama 9.1/10</p>
        <p className="text-xs md:text-sm text-gray-300 my-3">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </p>
        <a
          href={`https://www.imdb.com/title/${sliderData["id"]}`}
          target="blank"
          className="bg-[#00C2EE] rounded-full text-sm px-5 py-2.5 text-center mr-2 my-3 dark:bg-[#00C2EE]"
        >
          Learn More
        </a>
      </figcaption>
    </figure>
  ) : (
    <SliderSkeleton />
  );
};

export default Overlay;

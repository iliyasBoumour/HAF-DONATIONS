import React from "react";
import Carousel from "react-elastic-carousel";
import Card from "./project";

const MySlider = ({ data }) => {
  // console.log(data);
  const settings = {
    itemsToShow: 4,
    pagination: false,
    itemsToScroll: 4,
    itemPadding: [10],
    // enableAutoPlay: true,
    breakPoints: [
      { width: 1, itemsToShow: 1, itemsToScroll: 1 },
      { width: 550, itemsToShow: 2, itemsToScroll: 2 },
      { width: 850, itemsToShow: 3, itemsToScroll: 3 },
      // { width: 1150, itemsToShow: 3, itemsToScroll: 2 },
      { width: 1450, itemsToShow: 4, itemsToScroll: 4 },
      // { width: 1750, itemsToShow: 5 },
    ],
  };
  return (
    <Carousel {...settings}>
      {data?.map((proj) => (
        <Card key={proj._id} {...proj} />
      ))}
    </Carousel>
  );
};

export default MySlider;

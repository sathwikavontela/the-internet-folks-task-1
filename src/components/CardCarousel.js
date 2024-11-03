import React, { useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Tomato from "../Images/Tomato.png";
import Apple from "../Images/Apple.png";
import Snack from "../Images/Snack.png";
import GrilledTomato from "../Images/GrilledTomato.png";
import Wrap from "../Images/Wrap.png";
import Brocoli from "../Images/Brocoli.png";

const CardCarousel = () => {
  // Manage the index of the visible cards
  const [currentIndex, setCurrentIndex] = useState(0);

  // Data for the cards
  const cards = [
    {
      image: Tomato,
      title: "Grilled Tomatoes at Home",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    },
    {
      image: Apple,
      title: "Snacks for Travel",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    },
    {
      image: Snack,
      title: "Post workout recipes",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    },
    {
      image: GrilledTomato,
      title: "How to Grill Corn",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    },
    {
      image: Wrap,
      title: "Crunchwrap Supreme",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    },
    {
      image: Brocoli,
      title: "Broccoli Cheese Soup",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    },
  ];

  // Handling next and previous buttons
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 < cards.length ? prevIndex + 3 : prevIndex
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 3 >= 0 ? prevIndex - 3 : prevIndex
    );
  };

  return (
    <div className="relative flex flex-col items-center">
      <div className="hidden lg:flex lg:flex-col lg:items-center lg:mt-10 lg:gap-10 lg:relative">
        <div className="flex flex-row gap-10">
          {cards.slice(currentIndex, currentIndex + 3).map((card, index) => (
            <div
              key={index}
              className="relative w-[418px] h-[554px] opacity-100 lg:border lg:border-gray-200 border border-gray-950 rounded-xl"
            >
              <div className="py-5 pl-7">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-[326px] h-[257px] object-cover"
                />
              </div>

              <div className="p-4 space-y-4">
                <h2 className="text-[#0E2368] text-[24px] font-bold">
                  {card.title}
                </h2>

                <p className="text-[#444957] text-[15px] font-normal leading-[27px]">
                  {card.description}
                </p>

                <button className="text-black text-[15px] font-semibold py-2 px-4 rounded-full border border-[#424961]">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center w-full mt-6">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="p-2 rounded-full hover:bg-gray-200 disabled:opacity-50"
          >
            <BiChevronLeft size={30} className="text-[#424961]" />
          </button>
          {Math.ceil(currentIndex / 3) + 1}/2{" "}
          <button
            onClick={handleNext}
            disabled={currentIndex + 3 >= cards.length}
            className="p-2 rounded-full hover:bg-gray-200 disabled:opacity-50"
          >
            <BiChevronRight size={30} className="text-[#424961]" />
          </button>
        </div>
      </div>

      <div className="lg:hidden flex flex-col items-center mt-10">
        {cards.slice(currentIndex, currentIndex + 3).map((card, index) => (
          <div
            key={index}
            className="relative w-full max-w-[418px] mb-6 border border-gray-200 rounded-xl"
          >
            <div className="py-5 px-4">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-[257px] object-cover"
              />
            </div>

            <div className="p-4 space-y-4">
              <h2
                className="text-[#0E2368] text-[18px] font-bold"
                style={{ fontFamily: '"Poppins"' }}
              >
                {card.title}
              </h2>

              <p
                className="text-[#444957] text-[14px] font-normal leading-[24px]"
                style={{ fontFamily: "Open Sans" }}
              >
                {card.description}
              </p>

              <button
                className="text-black text-[14px] font-semibold py-2 px-4 rounded-full border border-[#424961]"
                style={{ fontFamily: '"Source Sans Pro"' }}
              >
                Read More
              </button>
            </div>
          </div>
        ))}

        <div className="flex justify-between items-center w-full mt-6 px-4">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="p-2 rounded-full hover:bg-gray-200 disabled:opacity-50"
          >
            <BiChevronLeft size={30} className="text-[#424961]" />
          </button>
          <span className="mx-4">
            {Math.ceil((currentIndex + 1) / 3)} / {Math.ceil(cards.length / 3)}
          </span>
          <button
            onClick={handleNext}
            disabled={currentIndex + 3 >= cards.length}
            className="p-2 rounded-full hover:bg-gray-200 disabled:opacity-50"
          >
            <BiChevronRight size={30} className="text-[#424961]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardCarousel;

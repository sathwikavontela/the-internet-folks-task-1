import React from "react";
import screenshot from "../Images/image1.png";
import Pizza from "../Images/Pizza.png";
import Vector from "../Images/Vector.png";
import Food from "../Images/Food.png";
import image1 from "../Images/image1.png";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";
import CardCarousel from "./CardCarousel";

const LandingPage = () => {
  return (
    <div className="h-[100%] bg-slate-100 ">
      <div className="h-fit pb-5 bg-white flex lg:flex-row flex-col">
        <div className="flex flex-col lg:pl-[6%] lg:order-1 order-2">
          <img
            src={screenshot}
            alt="Truck Logo"
            className="w-[107px] h-[83px] mt-6 hidden lg:block"
          />

          <div className="lg:mr-[50%] mx-0 flex flex-col items-center lg:mb-0 mb-16  ">
            <h1
              className="lg:text-[62px] text-[38px]  text-[#0E2368]  mt-[4%] font-bold hidden lg:block"
              style={{ fontFamily: '"Source Sans Pro"' }}
            >
              Discover the <span className="text-[#E23744]">Best</span> Food and
              Drinks
            </h1>
            <h1
              className="lg:text-[62px] text-[49px]  text-center text-[#0E2368]  mt-[4%] font-bold block lg:hidden  "
              style={{ fontFamily: '"Source Sans Pro"' }}
            >
              Discover the <br />
              <span className="text-[#E23744]">Best</span> Food and <br />
              Drinks
            </h1>
            <p
              className="text-[#444957] lg:text-[16.44px] text-[11px] mt-[1%] font-normal hidden lg:block"
              style={{ fontFamily: '"Open Sans"' }}
            >
              Naturally made Healthcare products for the better care & support
              of your body.
            </p>
            <p
              className="text-[#444957] lg:text-[16.44px] text-[12px] text-center mt-[1%] font-normal block lg:hidden  w-[240px] h-[130px] "
              style={{ fontFamily: '"Open Sans"' }}
            >
              Naturally made Healthcare products for the better care & support
              of your body.
            </p>
            <button
              className="lg:w-[190px] lg:h-[63px] w-[140px] h-[40px] lg:mt-[4%] -mt-14 rounded-full bg-[#E23744] text-white lg:-ml-48"
              style={{ fontFamily: '"Open Sans"' }}
            >
              Explore Now!
            </button>
          </div>
        </div>
        <div className=" lg:px-5 px-0 lg:order-2 order-1 ">
          <div className="relative lg:px-5">
            <img
              src={Pizza}
              alt="Pizza"
              className="lg:w-[750px] lg:h-[760px] w-full"
            />
            <img
              src={Vector}
              alt="Vector"
              className="absolute top-0 left-0 lg:w-[752px] lg:h-[760px] w-full"
            />
            <button
              className="absolute   w-[122px] h-[42px] top-4 right-4 bg-transparent border border-white text-white px-4 py-2 rounded-full"
              style={{ fontFamily: '"Source Sans Pro"' }}
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>

      <div className=" h-[60vh] lg:h-fit flex justify-center items-center  sm:mt-10 lg:mt-0">
        <div className="flex h-fit items-center lg:space-x-52 ">
          <div className="">
            <img
              src={Food}
              alt="Food-image"
              className="w-[384px] h-[468px] lg:block hidden"
            />
          </div>
          <div className=" lg:max-w-[600px] w-[275px] h-[235px] lg:mt-0 sm:my-10 text-center  ">
            <h1
              className="text-[#0E2368] lg:text-[45px]  text-[26px] font-bold lg:mb-0 mb-5"
              style={{ fontFamily: '"Poppins"' }}
            >
              About Us
            </h1>
            <p
              className="text-[#444957] lg:text-[15px] text-[11px] font-normal lg:leading-[27px] leading-[21px]"
              style={{ fontFamily: "Open Sans" }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries.
            </p>

            <button
              className="lg:w-[190px] lg:h-[63px]  h-[25px] w-[96px] mt-[4%] lg:text-[20px] text-[11px] rounded-full bg-[#E23744] text-white"
              style={{ fontFamily: '"Source Sans Pro"' }}
            >
              Read More
            </button>
          </div>
        </div>
      </div>
      <div className="h-fit flex flex-col bg-white">
        <div className="mt-10  lg:pl-[6%] sm:text-center">
          <h1
            className="lg:text-[56px] text-[38px] sm:text-center lg:text-start text-[#0E2368] font-semibold"
            style={{ fontFamily: '"Source Sans Pro"' }}
          >
            Latest Articles
          </h1>
        </div>
        <div>
          <CardCarousel />
        </div>
      </div>
      <div className="h-fit mt-10 flex lg:flex-row flex-col  lg:justify-evenly lg:items-center pb-14 px-16">
        <div className="my-4">
          <img src={image1} alt="Food truck" />
        </div>
        <div className="flex flex-col">
          <h1
            className="text-[#0E2368] lg:text-[18.84px] text-[15.77px] font-semibold py-1 "
            style={{ fontFamily: '"Source Sans Pro"' }}
          >
            Contact Us
          </h1>
          <p
            className="text-[#646874] font-normal text-[16.66px] py-1 lg:block hidden"
            style={{ fontFamily: '"Source Sans Pro"' }}
          >
            Lorem Ipsum Pvt Ltd.5/1, Magalton <br /> Road, Phartosh Gate near
            YTM
            <br />
            Market, XYZ-343434
          </p>
          <p
            className="text-[#646874] font-normal lg:text-[16.66px] text-[11px] py-1 lg:hidden block"
            style={{ fontFamily: '"Source Sans Pro"' }}
          >
            Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM
            Market, <br /> XYZ-343434
          </p>
          <p
            className="text-[#646874] font-normal lg:text-[16.66px] text-[11px] py-1"
            style={{ fontFamily: '"Source Sans Pro"' }}
          >
            example2020@gmail.com
          </p>
          <p
            className="text-[#646874] font-normal lg:text-[16.66px] text-[11px] py-1"
            style={{ fontFamily: '"Source Sans Pro"' }}
          >
            (904) 443-0343
          </p>
        </div>
        <div className="flex flex-col">
          <h1
            className="text-[#0E2368] lg:text-[18.84px] text-[15.77px] font-semibold py-1.5 "
            style={{ fontFamily: '"Source Sans Pro"' }}
          >
            More
          </h1>
          <p
            className="text-[#646874] font-normal lg:text-[16.66px] text-[11px]  py-1.5"
            style={{ fontFamily: '"Source Sans Pro"' }}
          >
            About Us
          </p>
          <p
            className="text-[#646874] font-normal lg:text-[16.66px] text-[11px]  py-1.5"
            style={{ fontFamily: '"Source Sans Pro"' }}
          >
            Products
          </p>
          <p
            className="text-[#646874] font-normal lg:text-[16.66px] text-[11px]  py-1.5"
            style={{ fontFamily: '"Source Sans Pro"' }}
          >
            Career
          </p>
          <p
            className="text-[#646874] font-normal lg:text-[16.66px] text-[11px]  py-1.5"
            style={{ fontFamily: '"Source Sans Pro"' }}
          >
            Contact Us
          </p>
        </div>
        <div className="flex flex-col items-center">
          <h1
            className="lg:text-[18.84px] text-[15.77px] font-semibold mb-4 text-[#0E2368]  hidden lg:block lg:mt-0 "
            style={{ fontFamily: '"Source Sans Pro"' }}
          >
            Social Links
          </h1>
          <div className="flex flex-row space-x-4">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0E2368] hover:text-[#0E2368]"
            >
              <FaInstagram className="text-[20px] md:text-[30px]" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0E2368] hover:text-[#0E2368]"
            >
              <FaTwitter className="text-[20px] md:text-[30px]" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0E2368] hover:text-[#0E2368]"
            >
              <FaFacebookF className="text-[20px] md:text-[30px]" />
            </a>
          </div>

          <div
            className="text-[#828B9C] text-[14.66px] lg:mt-20 mt-3"
            style={{ fontFamily: '"Roboto"' }}
          >
            @2022 Food Truck Example
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

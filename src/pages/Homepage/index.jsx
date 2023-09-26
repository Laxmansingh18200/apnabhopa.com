import React from "react";

import { useNavigate } from "react-router-dom";
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import Carousel CSS
import { Carousel } from 'react-responsive-carousel'; // Import Carousel component
import './homepage.css'
import {
  Button,
  Img,
  Input,
  Line,
  List,
  PagerIndicator,
  Text,
} from "components";

const HomepagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter gap-[0px] items-center justify-start mx-auto w-full">
      <header className="flex items-center justify-center md:px-0 w-full py-0">
      <div className="bg-bluegray-900 flex flex-row items-center justify-center p-[6px] sm:px-5 w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[94%]">
          <a href="#home" className="scroll-smooth">
            <img src="images/bhopalLogo.jpg" alt="logo" className="scale-75" />
          </a>
          <div className="flex md:flex-col flex-row gap-5 items-center justify-center md:ml-[0] ml-[173px] w-[57%] md:w-full">
            <a href="#home" className="scroll-smooth">
              <p className="text-lg text-white-A700 tracking-[-0.50px]">Home</p>
            </a>
            <a href="#updates" className="scroll-smooth">
              <p className="text-lg text-white-A700 tracking-[-0.50px]">Latest Updates</p>
            </a>
            <a href="#our-services" className="scroll-smooth">
              <p className="text-lg text-white-A700 tracking-[-0.50px]">Our Services</p>
            </a>
            <a href="#about-us" className="scroll-smooth">
              <p className="text-lg text-white-A700 tracking-[-0.50px]">About Us</p>
            </a>
            <a href="#contact-us" className="scroll-smooth">
              <p className="text-lg text-white-A700 tracking-[-0.50px]">Contact Us</p>
            </a>
          </div>
          <div className="flex flex-row items-center justify-between md:ml-[0] ml-[214px] w-[15%] md:w-full">
            <a href="#search" className="scroll-smooth">
              <img
                className="common-pointer h-6 w-6"
                src="images/img_search.svg"
                alt="search"
              />
            </a>
            <div className="bg-white-A700 h-[26px] w-px" />
            <div className="flex flex-row gap-5 items-center justify-between w-[56%]">
              <a href="#login" className="scroll-smooth">
                <p className="common-pointer text-sm text-white-A700 tracking-[-0.50px]">Login</p>
              </a>
              <a href="#register" className="scroll-smooth">
                <p className="common-pointer text-sm text-white-A700 tracking-[-0.50px]">Register</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
        <div id="home" className="w-full mx-auto">
          <Carousel
            className="w-full custom-carousel"
            showThumbs={false} // Optionally, hide the thumbnail navigation
            autoPlay={true} // Enable autoplay
            interval={2000} // Set autoplay interval to 2 seconds (2000 milliseconds)
            infiniteLoop={true} // Make the carousel loop
            dynamicHeight={false}
          >
            <div className="custom-slide">
              <img src="images/bhopalc4.webp" alt="Image 1" className="w-full h-400" />
              <p className="legend">Legend 1</p>
            </div>
            <div className="custom-slide">
              <img src="images/bhopalc2.jpg" alt="Image 2" className="w-full h-400" />
              <p className="legend">Legend 2</p>
            </div>
            <div className="custom-slide">
              <img src="images/bhopalc5.jpg" alt="Image 3" className="w-full h-400" />
              <p className="legend">Legend 3</p>
            </div>
          </Carousel>
        </div>
        <div className="flex flex-col md:gap-10 gap-[120px] items-center justify-start w-full">
          {/* second last div */}
          
          {/* insta start */}
          <div id="updates" className="flex flex-col gap-[50px] items-center justify-start w-full mt-8">
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 text-center tracking-[-0.50px] w-[39%] sm:w-full"
              size="txtInterSemiBold36Black900"
            >
              <>Update&#39;s from our social media handels</>
            </Text>
            <div className="flex flex-col md:px-5 relative w-full">
              <div className="flex flex-col items-center justify-start mx-auto w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[700px] items-center justify-start w-full"
                  style={{ backgroundImage: "url('images/img_slider.png')" }}
                >
                  <div className="bg-gradient1  flex flex-row items-center justify-start p-[75px] md:px-10 sm:px-5 w-full">
                    <div className="flex flex-row items-start justify-between mb-[142px] mt-[245px] w-full">
                      <Img
                        className="h-[60px] mb-[103px] w-[60px]"
                        src="images/img_arrowleft.svg"
                        alt="arrowleft"
                      />
                      <PagerIndicator
                        className="flex h-[15px] mt-[148px] w-[115px]"
                        count={5}
                        activeCss="inline-block cursor-pointer rounded-[50%] h-[15px] bg-white-A700 w-[15px]"
                        activeIndex={1}
                        inactiveCss="inline-block cursor-pointer rounded-[50%] h-[15px] bg-white-A700_4f w-[15px]"
                        selectedWrapperCss="inline-block mx-[5.00px]"
                        unselectedWrapperCss="inline-block mx-[5.00px]"
                      />
                      <Button className="bg-white-A700 border-2 border-solid border-white-A700 flex h-[60px] items-center justify-center mb-[103px] p-[15px] rotate-[180deg] rounded-[50%] w-[60px]">
                        <Img
                          className="h-[27px]"
                          src="images/img_arrowright.svg"
                          alt="arrowright"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <List
                className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center mt-[-197px] mx-auto w-[90%] z-[1]"
                orientation="horizontal"
              >
                <div className="bg-white-A700 flex flex-col gap-5 items-center justify-start sm:ml-[0] pb-[22px] rounded-[10px] w-full">
                  <Img
                    className="h-[307px] sm:h-auto object-cover rounded-[10px] w-[308px] md:w-full"
                    src="images/img_rectangle17.png"
                    alt="RectangleSeventeen"
                  />
                  <div className="flex flex-col gap-[13px] items-center justify-start w-[65%] md:w-full">
                    <Text
                      className="text-black-900 text-lg tracking-[-0.50px]"
                      size="txtInterSemiBold18Black900"
                    >
                      Avengers Age of Ultron
                    </Text>
                    <Text
                      className="text-black-900_7f text-sm tracking-[-0.50px]"
                      size="txtInterRegular14Black9007f"
                    >
                      Genres : Action Adventure Sci-Fi
                    </Text>
                    <Img
                      className="h-5 w-1/2"
                      src="images/img_group51.svg"
                      alt="GroupFiftyOne"
                    />
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col gap-5 items-center justify-start sm:ml-[0] pb-[22px] rounded-[10px] w-full">
                  <Img
                    className="h-[307px] sm:h-auto object-cover rounded-[10px] w-[308px] md:w-full"
                    src="images/img_rectangle17_307X308.png"
                    alt="RectangleSeventeen One"
                  />
                  <div className="flex flex-col gap-[13px] items-center justify-start w-[65%] md:w-full">
                    <Text
                      className="text-black-900 text-lg tracking-[-0.50px]"
                      size="txtInterSemiBold18Black900"
                    >
                      Captain Marvel
                    </Text>
                    <Text
                      className="text-black-900_7f text-sm tracking-[-0.50px]"
                      size="txtInterRegular14Black9007f"
                    >
                      Genres : Action Adventure Sci-Fi
                    </Text>
                    <Img
                      className="h-5 w-1/2"
                      src="images/img_group51.svg"
                      alt="GroupFiftyOne One"
                    />
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col gap-5 items-center justify-start sm:ml-[0] pb-[22px] rounded-[10px] w-full">
                  <Img
                    className="h-[307px] sm:h-auto object-cover rounded-[10px] w-[308px] md:w-full"
                    src="images/img_rectangle17_1.png"
                    alt="RectangleSeventeen Two"
                  />
                  <div className="flex flex-col gap-[13px] items-center justify-start w-[65%] md:w-full">
                    <Text
                      className="text-black-900 text-lg tracking-[-0.50px]"
                      size="txtInterSemiBold18Black900"
                    >
                      Avengers End Game
                    </Text>
                    <Text
                      className="text-black-900_7f text-sm tracking-[-0.50px]"
                      size="txtInterRegular14Black9007f"
                    >
                      Genres : Action Adventure Sci-Fi
                    </Text>
                    <Img
                      className="h-5 w-1/2"
                      src="images/img_group51.svg"
                      alt="GroupFiftyOne Two"
                    />
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col gap-5 items-center justify-start sm:ml-[0] pb-[22px] rounded-[10px] w-full">
                  <Img
                    className="h-[307px] sm:h-auto object-cover rounded-[10px] w-[308px] md:w-full"
                    src="images/img_rectangle17_2.png"
                    alt="RectangleSeventeen Three"
                  />
                  <div className="flex flex-col gap-[13px] items-center justify-start w-[71%] md:w-full">
                    <Text
                      className="text-black-900 text-lg tracking-[-0.50px]"
                      size="txtInterSemiBold18Black900"
                    >
                      Spiderman Far from Home
                    </Text>
                    <Text
                      className="text-black-900_7f text-sm tracking-[-0.50px]"
                      size="txtInterRegular14Black9007f"
                    >
                      Genres : Action Adventure Sci-Fi
                    </Text>
                    <Img
                      className="h-5 w-[47%]"
                      src="images/img_group51.svg"
                      alt="GroupFiftyOne Three"
                    />
                  </div>
                </div>
              </List>
            </div>
            <Button
              className="common-pointer bg-bluegray-900 cursor-pointer font-semibold leading-[normal] min-w-[122px] py-3 rounded-lg text-center text-sm text-white-A700 tracking-[-0.50px]"
              onClick={() => navigate("/allblog")}
            >
              View All
            </Button>
          </div>
          {/* insta end */}

          {/* latest update heading*/}
          <div className="flex flex-row gap-2.5 items-start justify-start w-[26%] md:w-full">
            <div className="bg-bluegray-900 h-[15px] my-[3px] rounded-[50%] w-[15px]"></div>
            <Text
              className=" text-4xl sm:text-[32px] md:text-[34px] text-Black-900 text-center tracking-[-0.50px] w-[100%] sm:w-full"
              size="txtInterSemiBold36Black900"

            >
              <>Latest Update&#39;s</>
            </Text>
          </div>
          {/* latest update section*/}
          <div className="bg-black-900 flex flex-col items-center justify-start p-[50px] md:px-10 sm:px-5 w-full">
            <div className="flex flex-col items-center justify-start max-w-[1291px] mx-auto w-full">
              <div className="flex md:flex-col flex-row md:gap-[50px] items-center justify-between w-full">
                <div className="flex md:flex-1 flex-col items-center justify-start w-[62%] md:w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[600px] items-center justify-start w-full"
                    style={{
                      backgroundImage: "url('images/img_background.png')",
                    }}
                  >
                    <div className="bg-gradient2  flex flex-col gap-[55px] items-center justify-end p-[45px] md:px-10 sm:px-5 w-full">
                      <div className="flex flex-col gap-[50px] items-center justify-start mt-[225px] w-[51%] md:w-full">
                        <div className="flex flex-col gap-[13px] items-center justify-start w-full">
                          <div className="flex flex-row gap-2.5 items-start justify-center w-[43%] md:w-full">
                            <div className="bg-bluegray-900 h-[15px] mt-[3px] rounded-[50%] w-[15px]"></div>
                            <Text
                              className="text-sm text-white-A700 tracking-[-0.50px]"
                              size="txtInterRegular14"
                            >
                              Bhopal Insights
                            </Text>
                          </div>
                          <Text
                            className="text-4xl sm:text-[32px] md:text-[34px] text-center text-white-A700 tracking-[-0.50px] w-full"
                            size="txtInterSemiBold36"
                          >
                            Best Place for Vacation in Sydney
                          </Text>
                        </div>
                        <Button className="border border-solid border-white-A700 cursor-pointer font-semibold leading-[normal] min-w-[154px] py-3 rounded-lg text-center text-lg text-white-A700 tracking-[-0.50px]">
                          Read Now
                        </Button>
                      </div>
                      <PagerIndicator
                        className="flex h-[15px] justify-center w-[115px]"
                        count={5}
                        activeCss="inline-block cursor-pointer rounded-[50%] h-[15px] bg-white-A700 w-[15px]"
                        activeIndex={1}
                        inactiveCss="inline-block cursor-pointer rounded-[50%] h-[15px] bg-white-A700_4f w-[15px]"
                        selectedWrapperCss="inline-block md:ml-[0] mx-[5.00px] sm:ml-[0]"
                        unselectedWrapperCss="inline-block md:ml-[0] mx-[5.00px] sm:ml-[0]"
                      />
                    </div>
                  </div>
                </div>
                <List
                  className="flex flex-col gap-[45px] w-[35%]"
                  orientation="vertical"
                >
                  <div className="flex sm:flex-col flex-row gap-6 items-center justify-between my-0 w-full">
                    <Img
                      className="h-[84px] md:h-auto object-cover"
                      src="images/img_rectangle1479_84X121.png"
                      alt="Rectangle1479 Three"
                    />
                    <div className="flex flex-col gap-[25px] items-start justify-start">
                      <Text
                        className="text-lg text-white-A700 tracking-[-0.50px] w-full"
                        size="txtInterBold18WhiteA700"
                      >
                        How to maximize investment with mutual funds
                      </Text>
                      <div className="flex flex-row gap-[7px] items-center justify-start w-[78%] md:w-full">
                        <Text
                          className="text-white-A700 text-xs tracking-[-0.50px]"
                          size="txtInterSemiBold12WhiteA700"
                        >
                          Indonesia, 22 Agust 2022{" "}
                        </Text>
                        <Text
                          className="text-white-A700_87 text-xs tracking-[-0.50px]"
                          size="txtInterRegular12WhiteA70087"
                        >
                          - 15 minutes ago
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-6 items-center justify-between my-0 w-full">
                    <Img
                      className="h-[84px] md:h-auto object-cover"
                      src="images/img_rectangle1479_2.png"
                      alt="Rectangle1479 Four"
                    />
                    <div className="flex flex-col gap-[25px] items-start justify-start">
                      <Text
                        className="text-lg text-white-A700 tracking-[-0.50px] w-full"
                        size="txtInterBold18WhiteA700"
                      >
                        How to maximize investment with mutual funds
                      </Text>
                      <div className="flex flex-row gap-[7px] items-center justify-start w-[78%] md:w-full">
                        <Text
                          className="text-white-A700 text-xs tracking-[-0.50px]"
                          size="txtInterSemiBold12WhiteA700"
                        >
                          Indonesia, 22 Agust 2022{" "}
                        </Text>
                        <Text
                          className="text-white-A700_87 text-xs tracking-[-0.50px]"
                          size="txtInterRegular12WhiteA70087"
                        >
                          - 15 minutes ago
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-6 items-center justify-between my-0 w-full">
                    <Img
                      className="h-[84px] md:h-auto object-cover"
                      src="images/img_rectangle1479_3.png"
                      alt="Rectangle1479 Five"
                    />
                    <div className="flex flex-col gap-[25px] items-start justify-start">
                      <Text
                        className="text-lg text-white-A700 tracking-[-0.50px] w-full"
                        size="txtInterBold18WhiteA700"
                      >
                        How to maximize investment with mutual funds
                      </Text>
                      <div className="flex flex-row gap-[7px] items-center justify-start w-[78%] md:w-full">
                        <Text
                          className="text-white-A700 text-xs tracking-[-0.50px]"
                          size="txtInterSemiBold12WhiteA700"
                        >
                          Indonesia, 22 Agust 2022{" "}
                        </Text>
                        <Text
                          className="text-white-A700_87 text-xs tracking-[-0.50px]"
                          size="txtInterRegular12WhiteA70087"
                        >
                          - 15 minutes ago
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-6 items-center justify-between my-0 w-full">
                    <Img
                      className="h-[84px] md:h-auto object-cover"
                      src="images/img_rectangle1479_4.png"
                      alt="Rectangle1479 Six"
                    />
                    <div className="flex flex-col gap-[25px] items-start justify-start">
                      <Text
                        className="text-lg text-white-A700 tracking-[-0.50px] w-full"
                        size="txtInterBold18WhiteA700"
                      >
                        How to maximize investment with mutual funds
                      </Text>
                      <div className="flex flex-row gap-[7px] items-center justify-start w-[78%] md:w-full">
                        <Text
                          className="text-white-A700 text-xs tracking-[-0.50px]"
                          size="txtInterSemiBold12WhiteA700"
                        >
                          Indonesia, 22 Agust 2022{" "}
                        </Text>
                        <Text
                          className="text-white-A700_87 text-xs tracking-[-0.50px]"
                          size="txtInterRegular12WhiteA70087"
                        >
                          - 15 minutes ago
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-6 items-center justify-between my-0 w-full">
                    <Img
                      className="h-[84px] md:h-auto object-cover"
                      src="images/img_rectangle1479_5.png"
                      alt="Rectangle1479 Seven"
                    />
                    <div className="flex flex-col gap-[25px] items-start justify-start">
                      <Text
                        className="text-lg text-white-A700 tracking-[-0.50px] w-full"
                        size="txtInterBold18WhiteA700"
                      >
                        How to maximize investment with mutual funds
                      </Text>
                      <div className="flex flex-row gap-[7px] items-center justify-start w-[78%] md:w-full">
                        <Text
                          className="text-white-A700 text-xs tracking-[-0.50px]"
                          size="txtInterSemiBold12WhiteA700"
                        >
                          Indonesia, 22 Agust 2022{" "}
                        </Text>
                        <Text
                          className="text-white-A700_87 text-xs tracking-[-0.50px]"
                          size="txtInterRegular12WhiteA70087"
                        >
                          - 15 minutes ago
                        </Text>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
            </div>
          </div>
          {/* latest update heading end*/}

          {/* <div className="bg-gray-900 flex flex-col items-center justify-start max-w-[1290px] mx-auto p-[37px] md:px-5 rounded-[20px] w-full">
            <div className="flex flex-col gap-[30px] items-center justify-start mb-[5px] rounded-[50px] w-[54%] md:w-full">
              <div className="flex flex-col gap-[38px] items-center justify-start w-full">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-center text-white-A700 tracking-[-0.50px] w-full"
                  size="txtInterSemiBold48"
                >
                  Get the Latest Notifications and Info from Us
                </Text>
                <Text
                  className="leading-[35.00px] text-base text-center text-white-A700_b2 tracking-[-0.50px] w-full"
                  size="txtInterRegular16"
                >
                  <>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled.
                  </>
                </Text>
              </div>
              <Button className="bg-white-A700 border border-bluegray-900 border-solid cursor-pointer font-semibold leading-[normal] min-w-[196px] py-[15px] rounded-[26px] text-bluegray-900 text-center text-lg tracking-[-0.50px]">
                Subscribe Now
              </Button>
            </div>
          </div> */}
          <footer className="flex items-center justify-center md:px-5 w-full">
            <div className="bg-black-900 flex flex-col items-center justify-center p-[30px] md:px-10 sm:px-5 w-full">
              <div className="flex flex-col gap-[53px] items-center justify-center w-[98%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                  <div className="flex flex-col gap-[25px] items-start justify-start">
                    <Text
                      className="text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[-0.50px]"
                      size="txtInterSemiBold24WhiteA700"
                    >
                      <img src="images/bhopalLogo.jpg" alt="" />
                    </Text>
                  
                  </div>
                  <div className="flex md:flex-1 flex-row items-start justify-between pt-2.5 w-[57%] md:w-full">
                    <div className="flex flex-col gap-[25px] items-start justify-start w-[10%]">
                      <Text
                        className="text-sm text-white-A700 tracking-[-0.50px]"
                        size="txtInterBold14"
                      >
                        Home
                      </Text>
              
                    </div>
                    <div className="flex flex-col gap-[25px] items-start justify-start w-[8%]">
                      <Text
                        className="text-sm text-white-A700 tracking-[-0.50px]"
                        size="txtInterBold14"
                      >
                        News
                      </Text>
                      
                    </div>
                    <div className="flex flex-col gap-[25px] items-start justify-start w-[5%]">
                      <Text
                        className="text-sm text-white-A700 tracking-[-0.50px]"
                        size="txtInterBold14"
                      >
                        Events
                      </Text>
                     
                    </div>
                    <div className="flex flex-col gap-[23px] items-start justify-start w-[9%]">
                      <Text
                        className="text-sm text-white-A700 tracking-[-0.50px]"
                        size="txtInterBold14"
                      >
                        Our Services
                      </Text>
                      
                    </div>
                    <div className="flex flex-col gap-[25px] items-start justify-start w-[14%]">
                      <Text
                        className="text-sm text-white-A700 tracking-[-0.50px]"
                        size="txtInterBold14"
                      >
                        About Us
                      </Text>
                     
                    </div>
                    <div className="flex flex-col gap-[25px] items-start justify-start w-[14%]">
                      <Text
                        className="text-sm text-white-A700 tracking-[-0.50px]"
                        size="txtInterBold14"
                      >
                        Contact Us
                      </Text>
                     
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[29px] items-center justify-start w-full">
                  <Line className="bg-white-A700 h-px w-full" />
                  <div className="flex flex-row md:gap-10 items-start justify-between w-full">
                    <Text
                      className="mt-1 text-sm text-white-A700 tracking-[-0.50px]"
                      size="txtInterRegular14"
                    >
                      Copyright © Neuzy | All Rights Reserved
                    </Text>
                    <Img
                      className="h-6"
                      src="images/img_group20875.svg"
                      alt="Group20875"
                    />
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default HomepagePage;

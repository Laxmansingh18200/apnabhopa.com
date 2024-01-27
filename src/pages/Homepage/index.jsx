import React from "react";

import { useNavigate } from "react-router-dom";
import "tailwindcss/tailwind.css"; // Import Tailwind CSS
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import Carousel CSS
import { Carousel } from "react-responsive-carousel"; // Import Carousel component
import "./homepage.css";
import {
  Button,
  Img,
  Input,
  Line,
  List,
  PagerIndicator,
  Text,
} from "components";
import { useState } from "react";

const HomepagePage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback submitted:", { name, email, feedback });
    setName("");
    setEmail("");
    setFeedback("");
  };
  const services = [
    {
      title: "Service 1",
      image: <img src="images/insta1.jpeg" alt="service1" srcset="" />,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Service 2",
      image: <img src="images/insta1.jpeg" alt="service1" srcset="" />,
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Service 3",
      image: <img src="images/insta1.jpeg" alt="service1" srcset="" />,
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
  ];
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter gap-[0px] items-center justify-start mx-auto w-full">
        <header className="flex items-center justify-center md:px-0 w-full py-0">
          <div className="bg-bluegray-900 flex flex-row items-center justify-center p-[6px] sm:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[94%]">
              <a href="" className="scroll-smooth">
                <img
                  src="images/bhopalLogo.png"
                  alt="logo"
                  className="scale-75"
                />
              </a>
              <div className="flex md:flex-col flex-row gap-5 items-center justify-center md:ml-[0] ml-[173px] w-[57%] md:w-full">
                <a href="#home-updates" className="scroll-smooth">
                  <p className="text-lg text-white-A700 tracking-[-0.50px]">
                    Home
                  </p>
                </a>
                <a href="#updates" className="scroll-smooth">
                  <p className="text-lg text-white-A700 tracking-[-0.50px]">
                    Latest Updates
                  </p>
                </a>
                <a href="#our-services" className="scroll-smooth">
                  <p className="text-lg text-white-A700 tracking-[-0.50px]">
                    Our Services
                  </p>
                </a>
                <a href="#about-us" className="scroll-smooth">
                  <p className="text-lg text-white-A700 tracking-[-0.50px]">
                    About Us
                  </p>
                </a>
                <a href="#contact-us" className="scroll-smooth">
                  <p className="text-lg text-white-A700 tracking-[-0.50px]">
                    Contact Us
                  </p>
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
                    <p className="common-pointer text-sm text-white-A700 tracking-[-0.50px]">
                      Login
                    </p>
                  </a>
                  <a href="#register" className="scroll-smooth">
                    <p className="common-pointer text-sm text-white-A700 tracking-[-0.50px]">
                      Register
                    </p>
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
              <img
                src="images/bhopalc4.webp"
                alt="Image 1"
                className="w-full h-400"
              />
              <p className="legend">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Doloremque quas expedita labore rerum quae distinctio.
              </p>
            </div>
            <div className="custom-slide">
              <img
                src="images/bhopalc2.jpg"
                alt="Image 2"
                className="w-full h-400"
              />
              <p className="legend">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis ipsa eaque veniam quo, soluta ratione!
              </p>
            </div>
            <div className="custom-slide">
              <img
                src="images/bhopalc5.jpg"
                alt="Image 3"
                className="w-full h-400"
              />
              <p className="legend">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
                dolore laboriosam sint repellendus hic unde?
              </p>
            </div>
          </Carousel>
        </div>
        <div className="flex flex-col md:gap-10 gap-[50px] items-center justify-start w-full">
          {/* second last div */}

          {/* Updateste from social media section starts from here */}
          <div
            id="home-updates"
            className="flex flex-col gap-[20px] items-center justify-start w-full mt-10"
          >
            <Text className="text-4xl sm:text-[32px] md:text-[34px] text-center text-black-900 font-semibold text-3xl tracking-[-0.50px] w-[39%] sm:w-full">
              <>Update&#39;s From Our Social Media Platforms</>
            </Text>
            <div className="flex flex-col md:px-5 relative w-full">
              <div className="flex flex-col items-center justify-start mx-auto w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[700px] items-center justify-start w-full"
                  style={{
                    backgroundImage:
                      "url('images/social_media_updates_banner.jpg')",
                  }}
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
                          src="images/img_arrow1.svg"
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
                    className="h-[400px] sm:h-auto object-cover rounded-[10px] w-[308px] md:w-full"
                    src="images/insta1.jpeg"
                    alt="RectangleSeventeen"
                  />
                  <div className="flex flex-col gap-[13px] items-center justify-start w-[100%] md:w-full">
                    {/* <Text
                      className="text-black-900 text-lg tracking-[-0.50px]"
                      size="txtInterSemiBold18Black900"
                    >
                      Latest Post1
                    </Text> */}
                    <Text
                      className="text-black-900_7f text-sm tracking-[-0.50px]"
                      size="txtInterRegular14Black9007f"
                    >
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Eius labore repellendus pariatur quisquam voluptates
                      perspiciatis impedit corrupti nemo consequatur tempore!
                    </Text>
                    {/* <Img
                      className="h-5 w-1/2"
                      src="images/img_group51.svg"
                      alt="GroupFiftyOne"
                    /> */}
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col gap-5 items-center justify-start sm:ml-[0] pb-[22px] rounded-[10px] w-full">
                  <Img
                    className="h-[400px] sm:h-auto object-cover rounded-[10px] w-[308px] md:w-full"
                    src="images/insta2.jpeg"
                    alt="RectangleSeventeen"
                  />
                  <div className="flex flex-col gap-[13px] items-center justify-start w-[100%] md:w-full">
                    {/* <Text
                      className="text-black-900 text-lg tracking-[-0.50px]"
                      size="txtInterSemiBold18Black900"
                    >
                      Latest Post1
                    </Text> */}
                    <Text
                      className="text-black-900_7f text-sm tracking-[-0.50px]"
                      size="txtInterRegular14Black9007f"
                    >
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Eius labore repellendus pariatur quisquam voluptates
                      perspiciatis impedit corrupti nemo consequatur tempore!
                    </Text>
                    {/* <Img
                      className="h-5 w-1/2"
                      src="images/img_group51.svg"
                      alt="GroupFiftyOne"
                    /> */}
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col gap-5 items-center justify-start sm:ml-[0] pb-[22px] rounded-[10px] w-full">
                  <Img
                    className="h-[400px] sm:h-auto object-cover rounded-[10px] w-[308px] md:w-full"
                    src="images/insta3.heic"
                    alt="RectangleSeventeen"
                  />
                  <div className="flex flex-col gap-[13px] items-center justify-start w-[100%] md:w-full">
                    {/* <Text
                      className="text-black-900 text-lg tracking-[-0.50px]"
                      size="txtInterSemiBold18Black900"
                    >
                      Latest Post1
                    </Text> */}
                    <Text
                      className="text-black-900_7f text-sm tracking-[-0.50px]"
                      size="txtInterRegular14Black9007f"
                    >
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Eius labore repellendus pariatur quisquam voluptates
                      perspiciatis impedit corrupti nemo consequatur tempore!
                    </Text>
                    {/* <Img
                      className="h-5 w-1/2"
                      src="images/img_group51.svg"
                      alt="GroupFiftyOne"
                    /> */}
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col gap-5 items-center justify-start sm:ml-[0] pb-[22px] rounded-[10px] w-full">
                  <Img
                    className="h-[400px] sm:h-auto object-cover rounded-[10px] w-[308px] md:w-full"
                    src="images/insta1.jpeg"
                    alt="RectangleSeventeen"
                  />
                  <div className="flex flex-col gap-[13px] items-center justify-start w-[100%] md:w-full">
                    {/* <Text
                      className="text-black-900 text-lg tracking-[-0.50px]"
                      size="txtInterSemiBold18Black900"
                    >
                      Latest Post1
                    </Text> */}
                    <Text
                      className="text-black-900_7f text-sm tracking-[-0.50px]"
                      size="txtInterRegular14Black9007f"
                    >
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Eius labore repellendus pariatur quisquam voluptates
                      perspiciatis impedit corrupti nemo consequatur tempore!
                    </Text>
                    {/* <Img
                      className="h-5 w-1/2"
                      src="images/img_group51.svg"
                      alt="GroupFiftyOne"
                    /> */}
                  </div>
                </div>
              </List>
            </div>
           {/*} <Button
              className="common-pointer bg-bluegray-900 cursor-pointer font-semibold leading-[normal] min-w-[122px] py-3 rounded-lg text-center text-sm text-white-A700 tracking-[-0.50px]"
              onClick={() => navigate("/allblog")}
            >
              View All
                  </Button> */}
          </div>
          {/* insta end */}

          {/* latest update heading*/}
          <div id="updates" className="flex flex-row gap-2.5 items-start justify-start w-[35%] md:w-full">
            <div className="bg-bluegray-900 h-[15px] my-[3px] rounded-[50%] w-[15px]"></div>
            <Text
              className=" text-4xl sm:text-[32px] md:text-[34px] text-Black-900 text-center tracking-[-0.50px] w-[100%] sm:w-full"
              size="txtInterSemiBold36Black900"
            >
              <>Latest News & Update&#39;s</>
            </Text>
          </div>
          {/* latest update section*/}
          <div className="bg-black-900 flex flex-col items-center justify-start p-[50px] md:px-10 sm:px-5 w-full">
            <div className="flex flex-col items-center justify-start max-w-[1291px] mx-auto w-full">
              <div className="flex md:flex-col flex-row md:gap-[50px] items-center justify-between w-full">
                <div className="flex md:flex-1 flex-col items-center justify-start w-[62%] md:w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[590px] items-center justify-start w-full"
                    style={{
                      backgroundImage:
                        "url('images/latest_updates_banner.jpg')",
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
                            Must Visit Places In Bhopal
                          </Text>
                        </div>
                        <Button className="border border-solid border-white-A700 cursor-pointer font-semibold leading-[normal] min-w-[154px] py-3 rounded-lg text-center text-lg text-white-A700 tracking-[-0.50px]">
                          Know More..
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
                  className="flex flex-col gap-[10px] w-[35%]"
                  orientation="vertical"
                >
                  <div className="flex sm:flex-col flex-row gap-6 items-center justify-between my-0 w-full">
                    <Img
                      className="h-[90px] md:h-auto object-cover"
                      src="images/img_rectangle1479_84X121.png"
                      alt="Rectangle1479 Three"
                    />
                    <div className="flex flex-col gap-[15px] items-start justify-start">
                      <Text
                        className="text-sm text-white-A700 tracking-[-0.50px] w-full"
                        size="txtInterBold18WhiteA700"
                      >
                        Modi to attend 125th foundation ceremony of Scindia
                        School in Gwalior today.
                      </Text>
                      <div className="flex flex-row gap-[7px] items-center justify-start w-[78%] md:w-full">
                        <Text
                          className="text-white-A700 text-xs tracking-[-0.50px]"
                          size="txtInterSemiBold12WhiteA700"
                        >
                          Bhopal, 08 December 2023{" "}
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
                      className="h-[90px] md:h-auto object-cover"
                      src="images/img_rectangle1479_84X121.png"
                      alt="Rectangle1479 Three"
                    />
                    <div className="flex flex-col gap-[15px] items-start justify-start">
                      <Text
                        className="text-sm text-white-A700 tracking-[-0.50px] w-full"
                        size="txtInterBold18WhiteA700"
                      >
                        Modi to attend 125th foundation ceremony of Scindia
                        School in Gwalior today.
                      </Text>
                      <div className="flex flex-row gap-[7px] items-center justify-start w-[78%] md:w-full">
                        <Text
                          className="text-white-A700 text-xs tracking-[-0.50px]"
                          size="txtInterSemiBold12WhiteA700"
                        >
                          Bhopal, 08 December 2023{" "}
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
                      className="h-[90px] md:h-auto object-cover"
                      src="images/img_rectangle1479_84X121.png"
                      alt="Rectangle1479 Three"
                    />
                    <div className="flex flex-col gap-[15px] items-start justify-start">
                      <Text
                        className="text-sm text-white-A700 tracking-[-0.50px] w-full"
                        size="txtInterBold18WhiteA700"
                      >
                        Modi to attend 125th foundation ceremony of Scindia
                        School in Gwalior today.
                      </Text>
                      <div className="flex flex-row gap-[7px] items-center justify-start w-[78%] md:w-full">
                        <Text
                          className="text-white-A700 text-xs tracking-[-0.50px]"
                          size="txtInterSemiBold12WhiteA700"
                        >
                          Bhopal, 08 December 2023{" "}
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
                      className="h-[90px] md:h-auto object-cover"
                      src="images/img_rectangle1479_84X121.png"
                      alt="Rectangle1479 Three"
                    />
                    <div className="flex flex-col gap-[15px] items-start justify-start">
                      <Text
                        className="text-sm text-white-A700 tracking-[-0.50px] w-full"
                        size="txtInterBold18WhiteA700"
                      >
                        Modi to attend 125th foundation ceremony of Scindia
                        School in Gwalior today.
                      </Text>
                      <div className="flex flex-row gap-[7px] items-center justify-start w-[78%] md:w-full">
                        <Text
                          className="text-white-A700 text-xs tracking-[-0.50px]"
                          size="txtInterSemiBold12WhiteA700"
                        >
                          Bhopal, 08 December 2023{" "}
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
                      className="h-[90px] md:h-auto object-cover"
                      src="images/img_rectangle1479_84X121.png"
                      alt="Rectangle1479 Three"
                    />
                    <div className="flex flex-col gap-[15px] items-start justify-start">
                      <Text
                        className="text-sm text-white-A700 tracking-[-0.50px] w-full"
                        size="txtInterBold18WhiteA700"
                      >
                        Modi to attend 125th foundation ceremony of Scindia
                        School in Gwalior today.
                      </Text>
                      <div className="flex flex-row gap-[7px] items-center justify-start w-[78%] md:w-full">
                        <Text
                          className="text-white-A700 text-xs tracking-[-0.50px]"
                          size="txtInterSemiBold12WhiteA700"
                        >
                          Bhopal, 08 December 2023{" "}
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
          {/* latest update section end*/}

          {/* Our Services Section Starts */}
          <div id="our-services" className="container py-5">
            <h2 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
              Our Services
            </h2>
            <h5 className="text-center py-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad porro
              minus doloribus odit eius explicabo voluptates repudiandae, autem
              totam vel sit qui. Labore distinctio et aperiam similique
              voluptate? Soluta, exercitationem ipsum pariatur placeat inventore
              adipisci delectus dignissimos consectetur non voluptatibus
              laudantium voluptates ducimus consequatur minus, aliquam id quo
              sunt. Fugiat.
            </h5>
            <section className="bg-blue-50 py-10 px-0 m-0">
              <div className="container mx-auto text-center">
                {/* <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                  Our Services
                </h2> */}

                <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-8 m-4">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className="bg-blue-100 p-6 rounded-lg shadow-md"
                    >
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        {service.title}
                      </h3>
                      {/* <p className="text-gray-600">{service.description}</p> */}
                      <p>{service.image}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
          {/* Our Services Section Ends */}
          {/* About Us Starts here */}

          <div id="about-us" className="container px-0 py-0 mx-auto">
            <h2 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
              Our Team
            </h2>
            <h5 className="text-center py-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad porro
              minus doloribus odit eius explicabo voluptates repudiandae, autem
              totam vel sit qui. Labore distinctio et aperiam similique
              voluptate? Soluta, exercitationem ipsum pariatur placeat inventore
              adipisci delectus dignissimos consectetur non voluptatibus
              laudantium voluptates ducimus consequatur minus, aliquam id quo
              sunt. Fugiat.
            </h5>

            <div className="grid grid-cols-3 grid gap-20 mt-0 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 bg-cyan-50 py-10">
              <div className="w-full max-w-xs text-center">
                <img
                  className="w-48 h-48 mx-auto object-cover object-center rounded-full"
                  src="https://images.unsplash.com/photo-1516756587022-7891ad56a8cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                  alt="avatar"
                />

                <div className="mt-2">
                  <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">
                    Aruneshwar Sunhara
                  </h3>
                  <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">
                    Co-founder
                  </span>
                </div>
              </div>

              <div className="w-full max-w-xs text-center">
                <img
                  className="w-48 h-48 mx-auto object-cover object-center rounded-full"
                  src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80"
                  alt="avatar"
                />

                <div className="mt-2">
                  <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">
                    Steve Ben
                  </h3>
                  <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">
                    UI/UX
                  </span>
                </div>
              </div>

              <div className="w-full max-w-xs text-center">
                <img
                  className="w-48 h-48 mx-auto object-cover object-center rounded-full"
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                  alt="avatar"
                />

                <div className="mt-2">
                  <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">
                    Patterson Johnson
                  </h3>
                  <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">
                    Software Engineer
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* About Us Ends here */}
          {/* Contact Us section starts here */}
          <div id="contact-us" className="container px-0 py-5 mx-auto bg-purple-0">
            <h2 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
              Contact Us
            </h2>
            <div className="container flex items-center justify-center mx-auto p-4">
              <div className="w-full max-w-lg bg-gray-200 shadow-md rounded p-7">
                <h1 className="text-2xl font-bold mb-4">
                  Post Your Query/Suggession ?
                </h1>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="feedback"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Your Message/Feedback
                    </label>
                    <textarea
                      id="feedback"
                      name="feedback"
                      value={feedback}
                      onChange={(e) => setFeedback(e.target.value)}
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                      rows="4"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                  >
                    Submit Feedback
                  </button>
                </form>
              </div>
            </div>
          </div>
          {/* Contact Us section ends here */}
          <footer className="flex items-center justify-center md:px-5 w-full">
            <div className="bg-black-900 flex flex-col items-center justify-center p-[30px] md:px-10 sm:px-5 w-full">
              <div className="flex flex-col gap-[53px] items-center justify-center w-[98%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                  <div className="flex flex-col gap-[25px] items-start justify-start">
                    <Text
                      className="text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[-0.50px]"
                      size="txtInterSemiBold24WhiteA700"
                    >
                      <img src="images/bhopalLogo.png" alt="" />
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
                      Copyright © Apna Bhopal | All Rights Reserved
                    </Text>
                    <div>
                      <div className="flex">
                        <a
                          href="https://www.instagram.com/apna_bhopal/"
                          className="mr-4"
                        >
                          <img src="images/instagram.png" width={20} alt="" />
                        </a>

                        <a
                          href="https://www.instagram.com/apna_bhopal/"
                          className="mr-4"
                        >
                          <img src="images/facebook.png" width={20} alt="" />
                        </a>
                        <a
                          href="https://www.instagram.com/apna_bhopal/"
                          className="mr-4"
                        >
                          <img src="images/telegram.png" width={20} alt="" />
                        </a>

                        <a href="https://www.instagram.com/apna_bhopal/">
                          <img src="images/twitter.png" width={20} alt="" />
                        </a>
                      </div>
                      {/* click to chat with whatsapp */}
                      <div className="fixed bottom-12 right-4">
                        <a
                          href="https://wa.me/7869992531" // Replace with your WhatsApp number
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="images/whatsapp.png"
                            alt="click to chat"
                            className="w-12 h-12"
                          />
                        </a>
                      </div>
                    </div>
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

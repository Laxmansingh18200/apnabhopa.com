import React from "react";
import { default as ModalProvider } from "react-modal";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, List, Text } from "components";

const AllBlogFilterModal = (props) => {
  const navigate = useNavigate();

  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[90%]"
      overlayClassName="bg-black-900_90 fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-white-A700 flex flex-col gap-14 items-start justify-start max-w-[1290px] mb-[1090px] mt-7 mx-auto p-[39px] md:px-5 rounded-[30px] w-full">
          <div className="flex flex-row md:gap-10 items-end justify-between md:ml-[0] ml-[27px] w-[96%] md:w-full">
            <Text
              className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[-0.50px]"
              size="txtInterSemiBold24"
            >
              Filter News
            </Text>
            <Img
              className="common-pointer h-6 mt-1.5 w-6"
              src="images/img_close.svg"
              alt="close"
              onClick={() => navigate("/allblog")}
            />
          </div>
          <div className="flex flex-col gap-[27px] items-start justify-start md:ml-[0] ml-[27px] rounded-[10px] w-[71%] md:w-full">
            <Text
              className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[-0.50px]"
              size="txtInterSemiBold24"
            >
              Category News
            </Text>
            <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between rounded-[10px] w-full">
              <Button className="bg-bluegray-900 cursor-pointer leading-[normal] min-w-[86px] py-2 rounded-[10px] text-center text-lg text-white-A700 tracking-[-0.50px]">
                Sport
              </Button>
              <Button className="bg-gray-50 cursor-pointer leading-[normal] min-w-[94px] py-2 rounded-[10px] text-black-900 text-center text-lg tracking-[-0.50px]">
                Health
              </Button>
              <Button className="bg-gray-50 cursor-pointer leading-[normal] min-w-[102px] py-2 rounded-[10px] text-black-900 text-center text-lg tracking-[-0.50px]">
                Political
              </Button>
              <Button className="bg-gray-50 cursor-pointer leading-[normal] min-w-[113px] py-2 rounded-[10px] text-black-900 text-center text-lg tracking-[-0.50px]">
                Business
              </Button>
              <Button className="bg-gray-50 cursor-pointer leading-[normal] min-w-[104px] py-2 rounded-[10px] text-black-900 text-center text-lg tracking-[-0.50px]">
                Finance
              </Button>
              <Button className="bg-gray-50 cursor-pointer leading-[normal] min-w-[70px] py-2 rounded-[10px] text-black-900 text-center text-lg tracking-[-0.50px]">
                Life
              </Button>
              <Input
                name="FrameThirteen"
                placeholder="Entertainment"
                className="leading-[normal] p-0 placeholder:text-black-900 text-black-900 text-left text-lg tracking-[-0.50px] w-full"
                wrapClassName="bg-gray-50 sm:flex-1 px-5 py-2 rounded-[10px] sm:w-full"
              ></Input>
            </div>
          </div>
          <List
            className="flex flex-col gap-[55px] md:ml-[0] ml-[27px] w-[48%]"
            orientation="vertical"
          >
            <div className="flex flex-col gap-[27px] items-start justify-start rounded-[10px] w-[94%] md:w-full">
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[-0.50px]"
                size="txtInterSemiBold24"
              >
                News Rating
              </Text>
              <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between rounded-[10px] w-full">
                <Button className="bg-gray-50 cursor-pointer leading-[normal] min-w-[118px] py-2 rounded-[10px] text-black-900 text-center text-lg tracking-[-0.50px]">
                  Hot Topic
                </Button>
                <Button className="bg-gray-50 cursor-pointer leading-[normal] min-w-[127px] py-2 rounded-[10px] text-black-900 text-center text-lg tracking-[-0.50px]">
                  Most Seen
                </Button>
                <Button className="bg-bluegray-900 cursor-pointer leading-[normal] min-w-[143px] py-2 rounded-[10px] text-center text-lg text-white-A700 tracking-[-0.50px]">
                  The Craziest
                </Button>
                <Button className="bg-gray-50 cursor-pointer leading-[normal] min-w-[87px] py-2 rounded-[10px] text-black-900 text-center text-lg tracking-[-0.50px]">
                  Fraud
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-[27px] items-start justify-start rounded-[10px] w-full">
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[-0.50px]"
                size="txtInterSemiBold24"
              >
                News post time
              </Text>
              <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between rounded-[10px] w-full">
                <Button className="bg-gray-50 cursor-pointer leading-[normal] min-w-[131px] py-2 rounded-[10px] text-black-900 text-center text-lg tracking-[-0.50px]">
                  Last 1 Hour
                </Button>
                <Button className="bg-gray-50 cursor-pointer leading-[normal] min-w-[135px] py-2 rounded-[10px] text-black-900 text-center text-lg tracking-[-0.50px]">
                  Last 3 Hour
                </Button>
                <Button className="bg-bluegray-900 cursor-pointer leading-[normal] min-w-[124px] py-2 rounded-[10px] text-center text-lg text-white-A700 tracking-[-0.50px]">
                  This Week
                </Button>
                <Button className="bg-gray-50 cursor-pointer leading-[normal] min-w-[132px] py-2 rounded-[10px] text-black-900 text-center text-lg tracking-[-0.50px]">
                  This Month
                </Button>
              </div>
            </div>
          </List>
          <Button className="bg-black-900 cursor-pointer font-semibold leading-[normal] mb-1.5 min-w-[171px] md:ml-[0] ml-[27px] py-[15px] rounded-[10px] text-center text-lg text-white-A700 tracking-[-0.50px]">
            Apply Now
          </Button>
        </div>
      </div>
    </ModalProvider>
  );
};

export default AllBlogFilterModal;

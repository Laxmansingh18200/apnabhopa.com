import React from "react";
import { default as ModalProvider } from "react-modal";

import { Button, Img, Input, Line, Text } from "components";

const SearchModal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[90%]"
      overlayClassName="bg-black-900_90 fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-white-A700 flex flex-col gap-[50px] items-start justify-start max-w-[1290px] mb-[549px] mt-7 mx-auto p-[41px] md:px-5 rounded-[30px] w-full">
          <div className="flex flex-col gap-14 items-center justify-start md:ml-[0] ml-[19px] w-[96%] md:w-full">
            <div className="flex flex-row md:gap-10 items-end justify-between w-full">
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[-0.50px]"
                size="txtInterSemiBold24"
              >
                Search News
              </Text>
              <Img
                className="h-6 mt-1.5 w-6"
                src="images/img_close.svg"
                alt="close"
              />
            </div>
            <div className="flex flex-col gap-[15px] items-start justify-start w-full">
              <Text
                className="text-black-900 text-lg tracking-[-0.50px]"
                size="txtInterRegular18Black900"
              >
                Search News here...
              </Text>
              <Line className="bg-black-900_7f h-px w-full" />
            </div>
          </div>
          <div className="flex flex-col gap-[27px] items-start justify-start mb-1 md:ml-[0] ml-[19px] rounded-[10px] w-[71%] md:w-full">
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
                name="items"
                placeholder="Entertainment"
                className="leading-[normal] p-0 placeholder:text-black-900 text-black-900 text-left text-lg tracking-[-0.50px] w-full"
                wrapClassName="bg-gray-50 sm:flex-1 px-5 py-2 rounded-[10px] sm:w-full"
              ></Input>
            </div>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
};

export default SearchModal;

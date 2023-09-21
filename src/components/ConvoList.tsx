import React from "react";
import { Conversation } from "./ConvoDetail";
import { useMediaQuery } from "react-responsive";

export interface Convo {
  avatar: string;
  id: string;
  name: string;
  // lastMessage: string;
  conversation: Conversation[];
  timestampt: string;
  status: "sent" | "delivered" | "read";
}

export type ConvoListProp = React.HTMLAttributes<HTMLOrSVGElement> & {
  list: Convo[];
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  setDummyConvo: React.Dispatch<React.SetStateAction<Convo[]>>;
  menu?: boolean;
  setMenu?: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ConvoList = (props: ConvoListProp) => {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 });
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });

  const handleChange = (index: number) => {
    props.setIndex(index);
    console.log(props.menu);
    if (props.menu === true) {
      props.setMenu && props.setMenu(false);
    }
  };

  if (isDesktopOrLaptop) {
    return (
      <div
        {...props}
        className="flex flex-col justify-start items-start h-full bg-gray-800"
      >
        <div className="bg-gray-800 w-full ">
          <div className="text-3xl font-bold p-2 ml-3 text-white">Chats</div>
          <div className="ml-3 mr-3">
            <label className="relative block">
              <input
                className="w-full  py-2 pl-2 pr-3 shadow-sm  focus:ring-sky-500 focus:border-sky-500 placeholder:italic  focus:outline-none focus:ring-2 placeholder:text-slate-400 p-1 rounded-full"
                type="text"
                placeholder="Search Messenger"
              />
            </label>
          </div>
        </div>

        {props.list.map((convo, index) => (
          <div
            key={convo.id}
            className="p-2 flex flex-row justify-center items-center bg-gray-800 hover:bg-gray-600 cursor-pointer text-white gap-2"
            onClick={() => props.setIndex(index)}
          >
            <div className="p-2">
              <img
                src={convo.avatar}
                className="h-12 w-12 rounded-full bg-white"
              />
            </div>
            <div className="flex flex-col justify-start items-start w-[250px] gap-1">
              <div className="w-full">
                <div className="float-left">{convo.name}</div>
                {convo.status !== "read" ? (
                  <div className={"text-blue-400 float-right"}>
                    <div>{convo.timestampt.toString()} ●</div>
                  </div>
                ) : (
                  <div className="float-right">
                    {convo.timestampt.toString()}
                  </div>
                )}
              </div>

              {convo.status === "read" ? (
                <div className="w-full text-left text-gray-500 line-clamp-1 text-sm">
                  {convo.conversation[convo.conversation.length - 1]?.message}
                </div>
              ) : (
                <div className="w-full text-left text-gray-100 line-clamp-1 text-sm">
                  {convo.conversation[convo.conversation.length - 1]?.message}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (isTabletOrMobile && props.menu) {
    return (
      <div
        {...props}
        className="flex flex-col justify-start items-start h-full w-full bg-gray-800"
      >
        <div className="bg-gray-800 w-full ">
          <div className="text-3xl font-bold p-2 ml-3 text-white">Chats</div>
          <div className="ml-3 mr-3">
            <label className="relative block">
              <input
                className="w-full py-2 pl-4 pr-3 shadow-sm  focus:ring-sky-500 focus:border-sky-500 placeholder:italic  focus:outline-none focus:ring-2 placeholder:text-slate-400 p-1 rounded-full"
                type="text"
                placeholder="Search Messenger"
              />
            </label>
          </div>
        </div>

        {props.list.map((convo, index) => (
          <div
            key={convo.id}
            className="p-2 mt-3 w-full flex flex-row justify-center items-center bg-gray-800 hover:bg-gray-600 cursor-pointer text-white gap-2"
            onClick={() => handleChange(index)}
          >
            <div className="p-2">
              <img
                src={convo.avatar}
                className="h-12 w-12 rounded-full bg-white"
              />
            </div>
            <div className="flex flex-col justify-start items-start w-full gap-1">
              <div className="w-full">
                <div className="float-left">{convo.name}</div>
                {convo.status !== "read" ? (
                  <div className={"text-blue-400 float-right"}>
                    <div>{convo.timestampt.toString()} ●</div>
                  </div>
                ) : (
                  <div className="float-right">
                    {convo.timestampt.toString()}
                  </div>
                )}
              </div>

              {convo.status === "read" ? (
                <div className="w-full text-left text-gray-500 line-clamp-1 text-sm">
                  {convo.conversation[convo.conversation.length - 1]?.message}
                </div>
              ) : (
                <div className="w-full text-left text-gray-100 line-clamp-1 text-sm">
                  {convo.conversation[convo.conversation.length - 1]?.message}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }
};

import { useCallback, useState } from "react";
import { ConvoListProp } from "./ConvoList";
import { useMediaQuery } from "react-responsive";

export interface Conversation {
  who: "sender" | "receiver";
  id: string;
  name: string;
  message: string;
}

export interface Sender {
  avatar: string;
  id: string;
  name: string;
  status: "online" | "offline";
}

export const ConvoDetail = ({
  onMessageSent,
  ...props
}: ConvoListProp & { onMessageSent: (msg: string) => void }) => {
  const [txt, setTxt] = useState("");
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 });
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });

  const handleSend = useCallback(() => {
    if (!txt) {
      return;
    }
    setTxt("");
    onMessageSent(txt);
  }, [txt, onMessageSent]);

  if (isDesktopOrLaptop) {
    return (
      <div {...props} className="flex flex-col h-full">
        <div className="flex bg-blue-800 text-white text-left ">
          <img className="h-10 p-1" src={props.list[props.index]?.avatar} />
          <div className="p-1">{props.list[props.index]?.name}</div>
        </div>
        <div className="flex flex-col justify-end h-full bg-slate-500">
          {props.list[props.index]?.conversation.map((conv, index) => (
            <div key={index}>
              {conv.who === "sender" && (
                <div className="flex float-left items-center">
                  <img
                    className="h-7 float-left mr-1 "
                    src={props.list[props.index]?.avatar}
                  />
                  <div className="float-left bg-slate-400 rounded-3xl p-1.5 m-1">
                    {conv.message}
                  </div>
                </div>
              )}
              {conv.who === "receiver" && (
                <div className="float-right bg-blue-500 rounded-3xl p-1.5 m-1">
                  {conv.message}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className=" bg-slate-400  p-1">
          <div className="flex">
            <input
              className="rounded-full  w-full float-left mr-10"
              type="text"
              placeholder="   Aa"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setTxt(e.target.value)
              }
              value={txt}
            />
            <button
              className="bg-blue-400 rounded-lg p-2 float-right"
              onClick={handleSend}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (isTabletOrMobile && !props.menu) {
    return (
      <div {...props} className="flex flex-col h-full">
        <div className="flex bg-blue-800 text-white text-left ">
          <button
            type="button"
            className="bg-blue-8000 text-white rounded-l-md border-r border-gray-100 py-2 hover:bg-red-700 hover:text-white px-3"
            onClick={() => props.setMenu && props.setMenu(true)}
          >
            <div className="flex flex-row align-middle">
              <svg className="w-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </button>
          <img className="h-10 p-1" src={props.list[props.index]?.avatar} />
          <div className="p-1">{props.list[props.index]?.name}</div>
        </div>
        <div className="flex flex-col justify-end h-full bg-slate-500">
          {props.list[props.index]?.conversation.map((conv, index) => (
            <div key={index}>
              {conv.who === "sender" && (
                <div className="flex float-left items-center">
                  <img
                    className="h-7 float-left mr-1 "
                    src={props.list[props.index]?.avatar}
                  />
                  <div className="float-left bg-slate-400 rounded-3xl p-1.5 m-1">
                    {conv.message}
                  </div>
                </div>
              )}
              {conv.who === "receiver" && (
                <div className="float-right bg-blue-500 rounded-3xl p-1.5 m-1">
                  {conv.message}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className=" bg-slate-400  p-1">
          <div className="flex">
            <input
              className="rounded-full  w-full float-left mr-10"
              type="text"
              placeholder="   Aa"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setTxt(e.target.value)
              }
              value={txt}
            />
            <button
              className="bg-blue-400 rounded-lg p-2 float-right"
              onClick={handleSend}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    );
  }
};

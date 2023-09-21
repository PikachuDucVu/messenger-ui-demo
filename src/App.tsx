import { useCallback, useState } from "react";
import { ConvoDetail } from "./components/ConvoDetail";
import { Convo, ConvoList } from "./components/ConvoList";
import { useMediaQuery } from "react-responsive";

const date = new Date();
const timeFormatted =
  date.getHours().toString() + ":" + date.getMinutes().toString();

// eslint-disable-next-line prefer-const

function App() {
  const [index, setIndex] = useState(0);
  const [DUMMY_CONVO, setNewDUMMY_CONVO] = useState([
    {
      avatar: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      id: "1",
      name: "Vu",
      // lastMessage: "Lorem ipsum dolor sit amet, vu xau trai nhu mot con cho!",
      conversation: [
        {
          who: "receiver",
          id: "1",
          name: "duc",
          message: "123",
        },
        {
          who: "sender",
          id: "1",
          name: "vu",
          message: "dcm123",
        },
        {
          who: "receiver",
          id: "1",
          name: "duc",
          message: "dcm123",
        },
        {
          who: "receiver",
          id: "1",
          name: "vu",
          message: "dcm123",
        },
        {
          who: "sender",
          id: "1",
          name: "vu",
          message: "45aaaaaaaaaaaaaaaaaaaaaaaaa",
        },
      ],
      timestampt: timeFormatted,
      status: "read",
    },
    {
      avatar: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      id: "2",
      name: "Vu",
      // lastMessage: "Lorem ipsum dolor sit amet, vu xau trai nhu mot con cho!",
      conversation: [
        {
          who: "receiver",
          id: "1",
          name: "duc",
          message: "123",
        },
        {
          who: "sender",
          id: "1",
          name: "vu",
          message: "dcm123asdasd",
        },
        {
          who: "receiver",
          id: "1",
          name: "duc",
          message: "dcm123",
        },
        {
          who: "receiver",
          id: "1",
          name: "vu",
          message: "dcm123asdas",
        },
        {
          who: "sender",
          id: "1",
          name: "vu",
          message: "456",
        },
      ],
      timestampt: timeFormatted,
      status: "read",
    },
    {
      avatar: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      id: "3",
      name: "Vu",
      // lastMessage: "Lorem ipsum dolor sit amet, vu xau trai nhu mot con cho!",
      conversation: [
        {
          who: "receiver",
          id: "1",
          name: "duc",
          message: "123asdasd",
        },
        {
          who: "sender",
          id: "1",
          name: "vu",
          message: "dcm123asdas",
        },
        {
          who: "receiver",
          id: "1",
          name: "duc",
          message: "dcm123",
        },
        {
          who: "receiver",
          id: "1",
          name: "vu",
          message: "dcm123asdasd",
        },
        {
          who: "sender",
          id: "1",
          name: "vu",
          message: "456",
        },
      ],
      timestampt: timeFormatted,
      status: "sent",
    },
    {
      avatar: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      id: "4",
      name: "Vu",
      // lastMessage: "Lorem ipsum dolor sit amet, vu xau trai nhu mot con cho!",
      conversation: [
        {
          who: "receiver",
          id: "1",
          name: "duc",
          message: "123",
        },
        {
          who: "sender",
          id: "1",
          name: "vu",
          message: "dcm123",
        },
        {
          who: "receiver",
          id: "1",
          name: "duc",
          message: "dcm123",
        },
        {
          who: "receiver",
          id: "1",
          name: "vu",
          message: "dcm123",
        },
        {
          who: "sender",
          id: "1",
          name: "vu",
          message: "456asdasda",
        },
      ],
      timestampt: timeFormatted,
      status: "read",
    },
    {
      avatar: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      id: "5",
      name: "Vu",
      // lastMessage: "Lorem ipsum dolor sit amet, vu xau trai nhu mot con cho!",
      conversation: [
        {
          who: "receiver",
          id: "1",
          name: "duc",
          message: "123asdasd",
        },
        {
          who: "sender",
          id: "1",
          name: "vu",
          message: "dcm123",
        },
        {
          who: "receiver",
          id: "1",
          name: "duc",
          message: "dcm123",
        },
        {
          who: "receiver",
          id: "1",
          name: "vu",
          message: "asdasd",
        },
        {
          who: "sender",
          id: "1",
          name: "vu",
          message: "456afasd as",
        },
      ],
      timestampt: timeFormatted,
      status: "delivered",
    },
  ] as Convo[]);

  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 });
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  const [menu, setMenu] = useState(false);

  const handleMessageSent = useCallback((txt: string, index: number) => {
    console.log(txt, index);
    setNewDUMMY_CONVO((convos) => {
      return convos.map((convo, idx) => {
        if (idx === index) {
          convo.conversation.push({
            id: "100",
            message: txt,
            name: "Duc",
            who: "receiver",
          });
          return { ...convo, conversation: convo.conversation.slice(0) };
        }
        return convo;
      });
    });
  }, []);

  if (isDesktopOrLaptop) {
    return (
      <div className="flex flex-row justify-center items-center w-full h-full">
        <ConvoList
          className="h-full"
          list={DUMMY_CONVO}
          index={index}
          setIndex={setIndex}
          setDummyConvo={setNewDUMMY_CONVO}
        />
        <div className="flex-1 bg-gray-700 h-full">
          <ConvoDetail
            onMessageSent={(txt: string) => handleMessageSent(txt, index)}
            list={DUMMY_CONVO}
            index={index}
            setIndex={setIndex}
            setDummyConvo={setNewDUMMY_CONVO}
          />
        </div>
      </div>
    );
  }

  if (isTabletOrMobile) {
    return (
      <div className="flex flex-row justify-center items-center w-full h-full">
        <ConvoList
          className="h-full"
          list={DUMMY_CONVO}
          index={index}
          setIndex={setIndex}
          setDummyConvo={setNewDUMMY_CONVO}
          menu={menu}
          setMenu={setMenu}
        />
        <div className="flex-1 bg-gray-700 h-full">
          <ConvoDetail
            onMessageSent={(txt: string) => handleMessageSent(txt, index)}
            list={DUMMY_CONVO}
            index={index}
            setIndex={setIndex}
            setDummyConvo={setNewDUMMY_CONVO}
            menu={menu}
            setMenu={setMenu}
          />
        </div>
      </div>
    );
  }
}

export default App;

import { useSelector } from "react-redux";

const ChatContainer = () => {
  const { messages, isMessagesLoading, selectedUser } = useSelector(
    (state) => state.chat
  );

  return <></>;
};

export default ChatContainer;

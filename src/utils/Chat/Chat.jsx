import { ThemeProvider, Toggle } from 'react-hook-theme';
import 'react-hook-theme/dist/styles/style.css';
import { ChatContainer, ChatHeader, ChatHeaderLogo, ChatHeading, ToggleContainer } from './Chat.styled';
import { ChatBody } from './ChatBody';
import { ChatFooter } from './ChatFooter';

export const Chat = ({ socket, messages, isChatOpen, currentUser }) => {
  return (
    <ThemeProvider
      options={{
        theme: 'dark',
        save: true,
      }}
    >
      <ChatContainer>
        <ChatHeader>
          <ChatHeading> <ChatHeaderLogo/> AP Open Chat</ChatHeading>
          <ToggleContainer><Toggle /></ToggleContainer>
        </ChatHeader>
        <ChatBody messages={messages} isChatOpen={isChatOpen} />
        <ChatFooter socket={socket} currentUser={currentUser} />
      </ChatContainer>
    </ThemeProvider>
  );
};

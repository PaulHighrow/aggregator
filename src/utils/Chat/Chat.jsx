import { ThemeProvider, Toggle } from 'react-hook-theme';
import 'react-hook-theme/dist/styles/style.css';
import {
  ChatContainer,
  ChatHeader,
  ChatHeaderLogo,
  ChatHeading,
  ToggleContainer,
} from './Chat.styled';
import { ChatBody } from './ChatBody';
import { ChatFooter } from './ChatFooter';
import { useState } from 'react';

export const Chat = ({ socket, messages, isChatOpen }) => {
  const [theme, setTheme] = useState('auto');

  const handleThemeClick = () => {
    const themeFromStorage = localStorage.getItem('rht-theme');
    console.log(themeFromStorage);
    setTheme(theme => (theme = themeFromStorage));
  };

  return (
    <ThemeProvider
      options={{
        theme: 'dark',
        save: true,
      }}
    >
      <ChatContainer>
        <ChatHeader>
          <ChatHeading>
            <ChatHeaderLogo /> AP Open Chat
          </ChatHeading>
          <ToggleContainer onClick={handleThemeClick}>
            <Toggle />
          </ToggleContainer>
        </ChatHeader>
        <ChatBody messages={messages} isChatOpen={isChatOpen} />
        <ChatFooter socket={socket} theme={theme} />
      </ChatContainer>
    </ThemeProvider>
  );
};

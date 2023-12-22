export const ChatBody = () => {
  return (
    <>
      {/*This shows messages sent from you*/}
      <div className="message__container">
        <div className="message__chats">
          <p className="sender__name">You</p>
          <div className="message__sender">
            <p>Hello there</p>
          </div>
        </div>

        {/*This shows messages received by you*/}
        <div className="message__chats">
          <p>Other</p>
          <div className="message__recipient">
            <p>Hey, I'm good, you?</p>
          </div>
        </div>

        {/*This is triggered when a user is typing*/}
        <div className="message__status">
          <p>Someone is typing...</p>
        </div>
      </div>
    </>
  );
};

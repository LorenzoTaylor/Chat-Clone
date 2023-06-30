import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatsPage = (props) => {
    return (
        <PrettyChatWindow
          projectId="2e8994ec-b37d-4b21-bf82-0ba5a4d3ac0b"
          username={props.user.username}
          secret={props.user.secret}
          style={{ height: '100vh' }}
        />
      );
};

export default ChatsPage;
import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { authSelector } from '../../../modules/auth/reducer';
import SpeechOpponent from '../ChatSpeech/SpeechOpponent';
import SpeechMe from '../ChatSpeech/SpeechMe';
import ChatForm from '../ChatForm/ChatForm';

interface Props {
  children: React.ReactNode;
}

const ChatRoom = () => {
  const chat = [
    {
      user: 'example123',
      time: '12:50',
      message: 'helloπ',
    },
    {
      user: 'john',
      time: '18:30',
      message: 'μλνμΈμ. μ±ν νμ΄μ§ μλλ€.',
    },
    {
      user: 'example123',
      time: '12:50',
      message: 'hellooooooo ~_~ !! :_: π',
    },
    {
      user: 'john',
      time: '18:30',
      message: 'μλνμΈμ. μ±ν νμ΄μ§ μλλ€. Win Study Cafe Coffee',
    },
    {
      user: 'example123',
      time: '12:50',
      message: 'hellooooooo ~_~ !! :_: π',
    },
    {
      user: 'john',
      time: '18:30',
      message: 'μλνμΈμ. μ±ν νμ΄μ§ μλλ€. Win Study Cafe Coffee',
    },
    {
      user: 'example123',
      time: '03:21',
      message:
        'μλνμΈμ. μ±ν νμ΄μ§ μλλ€. μλνμΈμ κΈ΄ λ©μΈμ§λ₯Ό λ³΄λΌκ±°μμ λ€μ μΉΈμΌλ‘ λμ΄κ°μ κ°μ κ°μ κ°μ κ°μ~',
    },
  ];
  const { user } = useSelector(authSelector);
  console.log('user=', user);
  return (
    <ChatRoomContainer>
      <ChatRoomTitle>μ±ν</ChatRoomTitle>
      <ChatContainer>
        {chat.map((chatting, index) => {
          return chatting.user === user.userid ? (
            <SpeechMe key={index}>{chatting.message}</SpeechMe>
          ) : (
            <SpeechOpponent key={index}>{chatting.message}</SpeechOpponent>
          );
        })}
      </ChatContainer>

      <ChatForm />
    </ChatRoomContainer>
  );
};

const ChatRoomContainer = styled.div`
  flex: 5;
  width: 100%;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ChatRoomTitle = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 1rem;
  font-weight: 600;
  border-right: 1px solid rgba(0, 0, 0, 0.3);
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`;

const ChatContainer = styled.div`
  padding: 2rem;
  background-color: #f4f4fa;
`;

export default ChatRoom;

import { StyleSheet, Text, View } from 'react-native';
import Wrapper from '../styles/Wrapper'

import {
  RoomDisplay,
  Navbar,
  DisconnectBtn,
  DisconnectTxt,
  ChatBox,
  MessageContainer,
  MessageData,
  MessageDataUserTxt,
  MessageDataTimeTxt

} from '../styles/room' 

export default function RoomScreen() {
  return (
    <Wrapper>
      <RoomDisplay>
        <Navbar>
          <DisconnectBtn onPress={console.log('disconnect')}>
            <DisconnectTxt>Disconnect</DisconnectTxt>
          </DisconnectBtn>
        </Navbar>

        <ChatBox> 
          <MessageContainer key={index}>
            <MessageData>
              <MessageDataUserTxt>
                Patrick
              </MessageDataUserTxt>
            
              <MessageDataTimeTxt>03:00</MessageDataTimeTxt>
            </MessageData>
            
            <TextMessage>
              {content.message}
            </TextMessage>
          </MessageContainer>
        </ChatBox>
      </RoomDisplay> 
    </Wrapper>
  )
}


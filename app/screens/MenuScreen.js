import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Wrapper from '../styles/Wrapper'

import {
  MenuDisplay,
  SelectRoomTitle,
  RoomContent,
  GoRoom,
  GoRoomText
} from '../styles/menu'

export default function RoomScreen() {
  return (
    <Wrapper>
      <MenuDisplay>

        <SelectRoomTitle>SELECT ROOM</SelectRoomTitle>

        <RoomContent>
          <ScrollView>
            <GoRoom onPress={console.log("hello")}>
              <GoRoomText>Coffee</GoRoomText>
            </GoRoom>

            <GoRoom onPress={console.log("hello")}>
              <GoRoomText>404</GoRoomText>
            </GoRoom>
    
            <GoRoom onPress={console.log("hello")}>
              <GoRoomText>Programming</GoRoomText>
            </GoRoom>
    
            <GoRoom onPress={console.log("hello")}>
              <GoRoomText>Foods</GoRoomText>
            </GoRoom>
    
          </ScrollView>
        </RoomContent>

      </MenuDisplay>
    </Wrapper>
  )
}


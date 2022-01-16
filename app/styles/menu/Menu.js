import styled from 'styled-components/native'

const MenuSection = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const SelectRoomTitle = styled.Text`
  color: gray;
  font-size: 25px;
  font-family: 'MPlus';
  font-weight: bold;
  margin-bottom: 10%;
`

const RoomContent  = styled.View` 
  height: 70%;
  width: 100%;
`

const GoRoom  = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.backgroundGoRoom};
  margin: 5%;
  padding: 2%;
  border-radius: 15px;
`

const GoRoomText  = styled.Text`
  color: white;
  font-size: 20px;
  font-family: 'Andika';
  font-weight: bold;
  text-align: center;
`

export {
  MenuSection,
  SelectRoomTitle,
  RoomContent,
  GoRoom,
  GoRoomText
}

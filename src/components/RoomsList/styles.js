import styled from 'styled-components';
export const RoomWrapper = styled.div`
  max-width: 940px;
  margin: 0 auto;
  padding: 40px 0 0 0;
`
export const RoomGroup = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -20px;
  padding: 20px 0 0 0;
  list-style: none;
  li{
    margin: 10px 20px;
  }
  a{
    color: #333;
    text-decoration: none;
  }
`
export const RoomButtonArea = styled.div`
  text-align: left;
`
export const RoomButton = styled.button`
  padding: 6px 10px;
  border: 1px solid #333;
  background: ${props => props.active ? "#333" : "#fff"};
  color: ${props => props.active ? "#fff" : "#333"};
  cursor: pointer;
  font-weight: 500;
  & + & {
    border-left: 0;
  }
  &:hover{
    background: #333;
    color: #fff;
  }
`
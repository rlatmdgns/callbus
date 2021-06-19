import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderWrapper = styled.header`
  background: #ffde00;
`
export const Inner = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 940px;
  margin: 0 auto;
  padding: 0 20px;
  
`

export const Logo = styled.h1`
  font-size: 20px;
`

export const GoRoomButton = styled(Link)`
  color: #fff;
  padding: 6px 10px;
  font-weight: 700;
  border-radius: 6px;
  background: #333;
  font-size: 12px;
  text-decoration: none;
`
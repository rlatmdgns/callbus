import React from "react";
import { HeaderWrapper, Inner, Logo, GoRoomButton } from "./styles";

const Header = () => {
  return (
    <HeaderWrapper>
      <Inner>
        <Logo>CALLROOM</Logo>
        <GoRoomButton to="/rooms">방 등록하기</GoRoomButton>
      </Inner>
    </HeaderWrapper>
  );
};

Header.propTypes = {};

export default Header;

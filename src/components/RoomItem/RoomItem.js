import React from "react";
import { changePriceWon } from "../../common/common";
import { Room, Amount, Address } from "./styles";

const RoomItem = ({ room }) => {
  const depositAmount = changePriceWon(room.depositAmount);
  return (
    <Room>
      <img src={room.thumbnail} alt="방 이미지" />
      <Amount>{depositAmount}</Amount>
      <Address>
        {room.address} {room.detailAddress}
      </Address>
    </Room>
  );
};

RoomItem.propTypes = {};

export default RoomItem;

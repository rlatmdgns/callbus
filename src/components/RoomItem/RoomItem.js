import React from "react";
import { Room } from "./styles";

const RoomItem = ({ room }) => {
  return (
    <Room>
      <img src={room.thumbnail} />
      <div>
        <div>
        {room.depositAmount}
      {/* 임대료{room.rentAmount}
      관리비 {room.maintenanceFee} */}
        </div>
     <div>
     주소 {room.address}
     </div>
    <div>
    상세주소 {room.detailAddress}
    </div>
      </div>
    </Room>
  );
};

RoomItem.propTypes = {};

export default RoomItem;

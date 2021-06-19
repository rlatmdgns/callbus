import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loadRooms, sortRooms } from "../../actions";
import { RoomItem } from "../RoomItem";
import { RoomWrapper, RoomGroup, RoomButton, RoomButtonArea } from "./styles";
const RoomsList = () => {
  const dispatch = useDispatch();
  const { rooms } = useSelector((state) => state.rooms);
  const [roomCancel, setRoomCancel] = useState("");

  const onClickRoomSort = (index) => {
    const cancel = {
      0: false,
      1: true,
    };
    dispatch(sortRooms(cancel[index]));
    setRoomCancel(index);
  };

  const roomSort = ["올린 방", "내린 방"];
  useEffect(() => {
    dispatch(loadRooms());
  }, []);
  return (
    <RoomWrapper>
      <RoomButtonArea>
        {roomSort.map((type, index) => {
          if (index === roomCancel) {
            return (
              <RoomButton key={index} type="button" active>
                {type}
              </RoomButton>
            );
          }
          return (
            <RoomButton key={index} type="button" onClick={() => onClickRoomSort(index)}>
              {type}
            </RoomButton>
          );
        })}
      </RoomButtonArea>
      <RoomGroup>
        {rooms.map((room) => (
          <li key={room.pk}>
            <Link to={`/rooms/${room.pk}`}>
              <RoomItem room={room} />
            </Link>
          </li>
        ))}
      </RoomGroup>
    </RoomWrapper>
  );
};

export default RoomsList;

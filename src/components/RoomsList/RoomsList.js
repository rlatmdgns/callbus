
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadRooms } from '../../actions';
import {RoomItem} from '../RoomItem'
const RoomsList = () => {
  const dispatch = useDispatch();
  const {rooms} = useSelector(state => state.rooms);
  console.log(rooms)
  useEffect(() => {
    dispatch(loadRooms());
  }, []);
  return (
    <ul>
      {rooms.map(room =>(
        <li key={room.pk}>
          <RoomItem room={room}/>
        </li>
      ))}
    </ul>
  );
};



export default RoomsList;

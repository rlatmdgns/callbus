import React from 'react';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadRoomDetail, loadRooms } from '../actions';
import RoomDetailContainer from '../container/RoomDetailContainer';


const RoomDetail = ({match}) => {
  const { roomPK } = match.params;
  const dispatch = useDispatch()
  const {roomDetail} = useSelector(state => state.rooms);
  useEffect(() => {
    dispatch(loadRoomDetail(roomPK));
  }, []);
  return (
      <RoomDetailContainer roomDetail={roomDetail}/>
  );
};

export default RoomDetail;

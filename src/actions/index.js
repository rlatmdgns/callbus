export const LOAD_ROOMS_SUCCESS = 'LOAD_ROOMS_SUCCESS';
export const LOAD_ROOMS_FAIL = 'LOAD_ROOMS_FAIL';
export const LOAD_ROOMS_REQUEST = 'LOAD_ROOMS_REQUEST';

export const LOAD_ROOMDETAIL_SUCCESS = 'LOAD_ROOMDETAIL_SUCCESS';
export const LOAD_ROOMDETAIL_FAIL = 'LOAD_ROOMDETAIL_FAIL';
export const LOAD_ROOMDETAIL_REQUEST = 'LOAD_ROOMDETAIL_REQUEST';

export const SORT_ROOMS_SUCCESS = 'SORT_ROOMS_SUCCESS';
export const SORT_ROOMS_FAIL = 'SORT_ROOMS_FAIL';
export const SORT_ROOMS_REQUEST = 'SORT_ROOMS_REQUEST';


export const loadRooms = () => ({
  type: LOAD_ROOMS_REQUEST,
});

export const loadRoomDetail = (data) => ({
  type: LOAD_ROOMDETAIL_REQUEST,
  data,
});

export const sortRooms= (data) => ({
  type: SORT_ROOMS_REQUEST,
  data,
});

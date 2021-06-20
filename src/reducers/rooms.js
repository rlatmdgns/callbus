import produce from "immer";

import {
  SORT_ROOMS_REQUEST,
  SORT_ROOMS_SUCCESS,
  SORT_ROOMS_FAIL,
  LOAD_ROOMS_REQUEST,
  LOAD_ROOMS_SUCCESS,
  LOAD_ROOMS_FAIL,
  LOAD_ROOMDETAIL_REQUEST,
  LOAD_ROOMDETAIL_SUCCESS,
  LOAD_ROOMDETAIL_FAIL,
  CHANGE_CANCLE_REQUEST,
  CHANGE_CANCLE_SUCCESS,
  CHANGE_CANCLE_FAIL,
} from "../actions";

export const initalState = {
  changeCancleRoomLoading: false,
  changeCancleRoomDone: false,
  changeCancleRoomError: null,
  sortRoomsLoading: false,
  sortRoomsDone: false,
  sortRoomsError: null,
  loadRoomsLoading: false,
  loadRoomsDone: false,
  loadRoomsError: null,
  loadRoomDetailLoading: false,
  loadRoomDetailDone: false,
  loadRoomDetailError: null,
  rooms: [
    {
      pk: 1,
      address: "서울 성동구 왕십리로 125", // 주소
      detailAddress: "KD타워 101호", // 상세주소
      realEstate: "APARTMENT", // 매물종류
      realEstatePriceType: "JEONSE", // 가격종류
      depositAmount: 200000000, // 보증금 또는 매매가
      rentAmount: 0, // 임대료
      maintenanceFee: 100000, // 관리비
      maintenanceFeeItems: ["ELECTRIC"], // 관리항목
      floor: "1", // 층수
      sunlightDirection: "NORTH", // 방향
      leasableArea: 119.0, // 평수, m2
      pet: true, // 애완동물 여부
      thumbnail: "https://static.zaritalk.com/images/img-default-thumbnail@2x.png", // 썸네일 주소
      canceled: false, // 올린방, 내린방 여부
    },
    {
      pk: 2,
      address: "서울 성동구 왕십리로 125",
      detailAddress: "KD타워 반지하",
      realEstate: "SEMI_BASEMENT",
      realEstatePriceType: "SELLING",
      depositAmount: 500000000,
      rentAmount: 0,
      maintenanceFee: 0,
      maintenanceFeeItems: [],
      floor: "1",
      sunlightDirection: "SOUTH",
      leasableArea: 33.05,
      pet: false,
      thumbnail: "https://static.zaritalk.com/images/img-default-thumbnail@2x.png",
      canceled: false,
    },
    {
      pk: 3,
      address: "서울 성동구 왕십리로 125",
      detailAddress: "KD타워 710호",
      realEstate: "EFFICIENCY_APARTMENT",
      realEstatePriceType: "MONTHLY",
      depositAmount: 200000000,
      rentAmount: 1000000,
      maintenanceFee: 50000,
      maintenanceFeeItems: ["ELECTRIC", "WATERWORKS"],
      floor: "7",
      sunlightDirection: "SOUTH_EAST",
      leasableArea: 231.4,
      pet: false,
      thumbnail: "https://static.zaritalk.com/images/img-default-thumbnail@2x.png",
      canceled: true,
    },
  ],
  roomDetail: [],
};

// 더미데이터로 진행 중이여서 새로고침시 state가 초기화 되어 미리 데이터를 넣어놓았습니다.

const reducer = (state = initalState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case CHANGE_CANCLE_REQUEST:
        draft.changeCancleRoomLoading = true;
        break;
      case CHANGE_CANCLE_SUCCESS:
        {
          const room = draft.rooms.find((room) => room.pk === action.data.pk);
          room.canceled = action.data.canceled
          draft.changeCancleRoomLoading = false;
          draft.changeCancleRoomDone = true;
        }
        break;
      case CHANGE_CANCLE_FAIL:
        draft.changeCancleRoomError = action.data;
        break;
      case SORT_ROOMS_REQUEST:
        draft.sortRoomsLoading = true;
        break;
      case SORT_ROOMS_SUCCESS:
        draft.sortRoomsLoading = false;
        draft.rooms = draft.rooms.filter((room) => room.canceled === action.data);
        draft.sortRoomsDone = true;
        break;
      case SORT_ROOMS_FAIL:
        draft.sortRoomsError = action.data;
        break;
      case LOAD_ROOMDETAIL_REQUEST:
        draft.loadRoomDetailLoading = true;
        break;
      case LOAD_ROOMDETAIL_SUCCESS:
        draft.loadRoomDetailLoading = false;
        draft.roomDetail = draft.rooms.find((room) => room.pk == action.data);
        break;
      case LOAD_ROOMDETAIL_FAIL:
        draft.loadRoomDetailLoading = false;
        draft.loadRoomDetailError = action.data;
        break;
      case LOAD_ROOMS_REQUEST:
        draft.loadRoomsLoading = true;
        draft.loadRoomsDone = false;
        draft.loadRoomsError = null;
        break;
      case LOAD_ROOMS_SUCCESS:
        draft.loadRoomsLoading = false;
        draft.rooms = action.data;
        draft.loadRoomsDone = true;
        break;
      case LOAD_ROOMS_FAIL:
        draft.loadRoomsLoading = false;
        draft.loadRoomsError = action.data;
        break;
      default:
        return state;
    }
  });

export default reducer;

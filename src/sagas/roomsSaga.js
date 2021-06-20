import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import {
  LOAD_ROOMS_FAIL,
  LOAD_ROOMS_REQUEST,
  LOAD_ROOMS_SUCCESS,
  LOAD_ROOMDETAIL_REQUEST,
  LOAD_ROOMDETAIL_SUCCESS,
  LOAD_ROOMDETAIL_FAIL,
  SORT_ROOMS_REQUEST,
  SORT_ROOMS_SUCCESS,
  SORT_ROOMS_FAIL,
  CHANGE_CANCLE_REQUEST,
  CHANGE_CANCLE_SUCCESS,
  CHANGE_CANCLE_FAIL,
} from "../actions";

const roomItems = [
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
];
function* changeCancleRoom(action) {
  try {
    yield put({
      type: CHANGE_CANCLE_SUCCESS,
      data: action.data,
    });
    action.data.canceled ? alert("방이 내려갔습니다.") : alert("방이 올라갔습니다.");
  } catch (error) {
    yield put({
      type: CHANGE_CANCLE_FAIL,
      data: error,
    });
  }
}
function* sortRooms(action) {
  try {
    yield put({
      type: SORT_ROOMS_SUCCESS,
      data: action.data,
    });
  } catch (error) {
    yield put({
      type: SORT_ROOMS_FAIL,
      data: error,
    });
  }
}

function* loadRooms() {
  try {
    yield put({
      type: LOAD_ROOMS_SUCCESS,
      data: roomItems,
    });
  } catch (error) {
    yield put({
      type: LOAD_ROOMS_FAIL,
      data: error,
    });
  }
}

function* loadRoomDetail(action) {
  try {
    yield put({
      type: LOAD_ROOMDETAIL_SUCCESS,
      data: action.data,
    });
  } catch (error) {
    yield put({
      type: LOAD_ROOMDETAIL_FAIL,
      data: error,
    });
  }
}
function* watchChangeCancleRoom() {
  yield takeLatest(CHANGE_CANCLE_REQUEST, changeCancleRoom);
}
function* watchSortRooms() {
  yield takeLatest(SORT_ROOMS_REQUEST, sortRooms);
}

function* watchLoadRooms() {
  yield takeLatest(LOAD_ROOMS_REQUEST, loadRooms);
}
function* watchLoadRoomDetail() {
  yield takeLatest(LOAD_ROOMDETAIL_REQUEST, loadRoomDetail);
}

export default function* roomsSaga() {
  yield all([fork(watchSortRooms), fork(watchChangeCancleRoom), fork(watchLoadRooms), fork(watchLoadRoomDetail)]);
}

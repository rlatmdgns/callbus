import { all, call, fork, put, takeLatest, } from 'redux-saga/effects';
import {
  LOAD_ROOMS_FAIL,
  LOAD_ROOMS_REQUEST,
  LOAD_ROOMS_SUCCESS,
} from '../actions';

const roomItems = [
  {
    "pk": 1, 
    "address": "서울 성동구 왕십리로 125", // 주소
    "detailAddress": "KD타워 101호", // 상세주소
    "realEstate": "APARTMENT", // 매물종류
    "realEstatePriceType": "JEONSE", // 가격종류
    "depositAmount": 200000000, // 보증금 또는 매매가
    "rentAmount": 0, // 임대료
    "maintenanceFee": 100000, // 관리비
    "maintenanceFeeItems": ["ELECTRIC"], // 관리항목
    "floor": "1", // 층수
    "sunlightDirection": "NORTH", // 방향
    "leasableArea": 119.00, // 평수, m2
    "pet": true, // 애완동물 여부
    "thumbnail": "https://static.zaritalk.com/images/img-default-thumbnail@2x.png", // 썸네일 주소
    "canceled": false // 올린방, 내린방 여부
  },
  {
    "pk": 2,
    "address": "서울 성동구 왕십리로 125",
    "detailAddress": "KD타워 반지하",
    "realEstate": "SEMI_BASEMENT",
    "realEstatePriceType": "SELLING",
    "depositAmount": 500000000,
    "rentAmount": 0,
    "maintenanceFee": 0,
    "maintenanceFeeItems": [],
    "floor": "1",
    "sunlightDirection": "SOUTH",
    "leasableArea": 33.05,
    "pet": false,
    "thumbnail": "https://static.zaritalk.com/images/img-default-thumbnail@2x.png",
    "canceled": false
  },
  {
    "pk": 3,
    "address": "서울 성동구 왕십리로 125",
    "detailAddress": "KD타워 710호",
    "realEstate": "EFFICIENCY_APARTMENT",
    "realEstatePriceType": "MONTHLY",
    "depositAmount": 200000000,
    "rentAmount": 1000000,
    "maintenanceFee": 50000,
    "maintenanceFeeItems": ["ELECTRIC", "WATERWORKS"],
    "floor": "7",
    "sunlightDirection": "SOUTH_EAST",
    "leasableArea": 231.40,
    "pet": false,
    "thumbnail": "https://static.zaritalk.com/images/img-default-thumbnail@2x.png",
    "canceled": true
  }
]
function* loadRooms(action) {
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

function* watchRooms() {
  yield takeLatest(LOAD_ROOMS_REQUEST, loadRooms);
}

export default function* roomsSaga() {
  yield all([
    fork(watchRooms),
  ]);
}
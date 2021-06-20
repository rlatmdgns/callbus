import React from "react";
import PropTypes from "prop-types";
import { changePriceWon } from "../../common/common";
import { DetailWrapper, DetailHeader, Info, DetailInfo, RoomOnOffButton } from "./styles";
import { useDispatch } from "react-redux";
import { changeCancleRoom } from "../../actions";
const RoomDetail = ({ detail }) => {
  console.log(detail);
  const dispatch = useDispatch();
  const depositAmount = changePriceWon(detail.depositAmount);
  const rentAmount = changePriceWon(detail.rentAmount);
  const maintenanceFee = changePriceWon(detail.maintenanceFee);
  const realEstatePriceType = {
    JEONSE: "전세",
    SELLING: "매매",
    MONTHLY: "월세",
  };
  const realEstate = {
    ONE_ROOM: "원룸",
    TWO_ROOM: "투룸",
    SEMI_BASEMENT: "반지하",
    APARTMENT: "아파트",
    EFFICIENCY_APARTMENT: "오피스텔",
  };
  const sunlightDirection = {
    NORTH: "북향",
    EAST: "동향",
    SOUTH: "남향",
    WEST: "서향",
    SOUTH_EAST: "남동향",
    SOUTH_WEST: "남서향",
    NORTH_WEST: "북서향",
    NORTH_EAST: "북동향",
  };
  const maintenanceFeeItems = {
    ELECTRIC: "전기",
    WATERWORKS: "수도",
    GAS: "가스",
    INTERNET: "인터넷",
    TV: "TV",
  };
  const managementTopics =
    detail.maintenanceFeeItems && detail.maintenanceFeeItems.map((item) => maintenanceFeeItems[item]).join(",");
  const onClickOffRoom = () => {
    const data = {
      pk: detail.pk,
      canceled: true,
    };
    dispatch(changeCancleRoom(data));
  };
  const onClickOnRoom = () => {
    const data = {
      pk: detail.pk,
      canceled: false,
    };
    dispatch(changeCancleRoom(data));
  };
  return (
    <DetailWrapper>
      <DetailHeader>
        <Info>
          <dt>{realEstate[detail.realEstate]}</dt>
          <dd>
            {realEstatePriceType[detail.realEstatePriceType]}
            {depositAmount}
            {detail.realEstatePriceType === "MONTHLY" && ` / ${rentAmount}`}
          </dd>
        </Info>
        <Info>
          <dt>전용면적</dt>
          <dd>{detail.leasableArea}㎡</dd>
        </Info>
      </DetailHeader>
      <img src={detail.thumbnail} />
      <DetailInfo>
        <caption>매물정보</caption>
        <tbody>
          <tr>
            <th>매물종류</th>
            <td>{realEstate[detail.realEstate]}</td>
          </tr>
          <tr>
            <th>가격종류</th>
            <td>{realEstatePriceType[detail.realEstatePriceType]}</td>
          </tr>
          <tr>
            <th>임대료</th>
            <td>{rentAmount === "" ? "없음" : rentAmount}</td>
          </tr>
          <tr>
            <th>관리비</th>
            <td>{maintenanceFee === "" ? "없음" : maintenanceFee}</td>
          </tr>
          <tr>
            <th>관리항목</th>
            <td>{managementTopics ? managementTopics : "없음"}</td>
          </tr>
          <tr>
            <th>방향</th>
            <td>{sunlightDirection[detail.sunlightDirection]}</td>
          </tr>
          <tr>
            <th>면적</th>
            <td>{detail.leasableArea}m²</td>
          </tr>
          <tr>
            <th>층수</th>
            <td>{detail.floor}</td>
          </tr>
          <tr>
            <th>애완동물 여부</th>
            <td>{detail.pet ? "가능" : "불가능"}</td>
          </tr>
          <tr>
            <th>주소</th>
            <td>
              {detail.address} {detail.detailAddress}
            </td>
          </tr>
        </tbody>
      </DetailInfo>
      {detail.canceled ? (
        <RoomOnOffButton onClick={onClickOnRoom}>방 올리기</RoomOnOffButton>
      ) : (
        <RoomOnOffButton onClick={onClickOffRoom}>방 내리기</RoomOnOffButton>
      )}
    </DetailWrapper>
  );
};

export default RoomDetail;

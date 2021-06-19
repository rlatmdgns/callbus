import React from "react";
import PropTypes from "prop-types";

const RoomDetail = ({ detail }) => {
  const realEstatePriceType = {
    JEONSE: "전세",
    SELLING: "매매",
    MONTHLY: "월세",
  };
  const realEstate = {
    SEMI_BASEMENT: "반지하",
    APARTMENT: "아파트",
    EFFICIENCY_APARTMENT: "아파트",
  };
  return (
    <div>
      <div>
        <dl>
          <dt>{realEstate[detail.realEstate]}</dt>
          <dd>
            {realEstatePriceType[detail.realEstatePriceType]}
            {detail.depositAmount}
          </dd>
        </dl>
        <dl>
          <dt>전용면적</dt>
          <dd>{detail.leasableArea}㎡</dd>
        </dl>
      </div>
      <table>
        <tbody>
          <tr>
            <th>매물종류</th>
            <td>{detail.realEstate}</td>
          </tr>
          <tr>
            <th>가격종류</th>
            <td>{detail.realEstatePriceType}</td>
          </tr>
          <tr>
            <th>임대료</th>
            <td>{detail.rentAmount}</td>
          </tr>
          <tr>
            <th>관리비</th>
            <td>{detail.maintenanceFee}</td>
          </tr>
          <tr>
            <th>관리항목</th>
            <td>{detail.maintenanceFeeItems}</td>
          </tr>
          <tr>
            <th>방향</th>
            <td>{detail.sunlightDirection}</td>
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
            <td>{detail.pet}</td>
          </tr>
          <tr>
            <th>주소</th>
            <td>
              {detail.address}
              {detail.detailAddress}
            </td>
          </tr>
        </tbody>
      </table>
      <img src={detail.thumbnail}/>
    </div>
  );
};

export default RoomDetail;

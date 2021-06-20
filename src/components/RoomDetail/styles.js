import styled from "styled-components";

export const DetailWrapper = styled.div`
  max-width: 940px;
  margin: 0 auto;
  text-align: left;
`;
export const DetailHeader = styled.div`
  display: flex;
  padding: 30px 0;
`;

export const Info = styled.dl`
  margin: 0;
  dt {
    margin-bottom: 5px;
    color: rgb(101, 101, 101);
    font-size: 14px;
    line-height: 20px;
  }
  dd {
    margin: 0;
    font-size: 30px;
    font-weight: 700;
  }
  & + & {
    padding-left: 28px;
    margin-left: 28px;
    border-left: 1px solid rgb(231, 231, 231);
  }
`;
export const DetailInfo = styled.table`
  width: 100%;
  margin-top: 20px;
  table-layout: fixed;
  border-spacing: 0;
  caption {
    margin-bottom: 10px;
    font-size: 22px;
    font-weight: blod;
    text-align: left;
  }
  th,
  td {
    padding: 10px 0;
  }
  th {
    width: 140px;
    border-top: 1px solid #ddd;
  }
  td {
    border-top: 1px solid #ddd;
  }
`;

export const RoomOnOffButton = styled.button`
  display: block;
  width: 100px;
  height: 50px;
  margin: 50px auto 0;
  border:0;
  border-radius:10px;
  background: #333;
  color: #fff;
  font-size: 15px;
`
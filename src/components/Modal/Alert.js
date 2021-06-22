import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 400px;
  border-radius: 10px;
  background: #fff;
  padding: 20px;
  text-align: center;
`;
const Text = styled.p`
  margin: 40px 0;
  font-size: 20px;
`;

const AlertButton = styled.button`
  width: 100%;
  padding: 10px;
  background: #333;
  color: #fff;
  border: 0;
`;
const Alert = ({ children, setIsShow }) => {
  return (
    <Wrapper>
      <Text>{children}</Text>
      <AlertButton type="button" onClick={() => setIsShow(false)}>
        확인
      </AlertButton>
    </Wrapper>
  );
};

Alert.propTypes = {};

export default Alert;

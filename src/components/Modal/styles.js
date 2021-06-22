import styled from 'styled-components';

export const ModalWrapper = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 11;
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.dimd ? 'rgba(0, 0, 0, 0.3)' : 'transparent')};
  & > button{
    position: absolute;
    top: 100px;
    right: 100px;
    font-size: 30px;
    font-weight: 700;
  }
`;
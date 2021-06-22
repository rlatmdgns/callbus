import React, { useEffect, useRef, useCallback } from "react";
import ReactDOM from "react-dom";

import { ModalWrapper } from "./styles";

const Modal = ({ children, isShow, setIsShow, dimd }) => {
  const modalEl = useRef(); //
  const CloseModal = (e) => {
    if (modalEl.current === e.target) {
      setIsShow(false);
    }
  };
  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && !isShow) {
        setIsShow(false);
      }
    },
    [isShow, setIsShow]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, []);

  const modalContent = (
    <ModalWrapper visible={isShow} ref={modalEl} dimd={dimd} onClick={CloseModal}>
      {children}
    </ModalWrapper>
  );
  return ReactDOM.createPortal(modalContent, document.getElementById('modal-root'));
};

export default Modal;

import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import {
  RegisterForm,
  FormCell,
  Input,
  Select,
  CustomLabelWrapper,
  CustomLabel,
  TextWithInputWrapper,
  InputBox,
  Label,
} from "./styles";
import PropTypes from "prop-types";
import DaumPostcode from "react-daum-postcode";
const RoomForm = () => {
  const [address, setAddress] = useState(""); // 주소
  const [isOpenPost, setIsOpenPost] = useState(false);
  const [prevRegister, setPrevRegister] = useState({});
  const { register, handleSubmit, watch } = useForm();
  const addressInput = useRef();
  const realEstate = [
    { title: "원룸", value: "ONE_ROOM" },
    { title: "투룸", value: "TWO_ROOM" },
    { title: "아파트", value: "APARTMENT" },
    { title: "오피스텔", value: "ONEEFFICIENCY_APARTMENTROOM" },
  ];
  const priceType = [
    { title: "월세", value: "MONTHLY" },
    { title: "전세", value: "JEONSE" },
    { title: "매매", value: "SELLING" },
  ];
  const direction = [
    { title: "동", value: "EAST" },
    { title: "서", value: "WEST" },
    { title: "남", value: "SOUTH" },
    { title: "북", value: "NORTH" },
    { title: "남동", value: "SOUTH_EAST" },
    { title: "남서", value: "SOUTH_WEST" },
    { title: "북서", value: "NORTH_WEST " },
    { title: "북동", value: "NORTH_EAST" },
  ];
  const feeItems = [
    { title: "전기", value: "ELECTRIC" },
    { title: "가스", value: "GAS" },
    { title: "수도", value: "WATERWORKS" },
    { title: "인터넷", value: "INTERNET" },
    { title: "TV", value: "TV" },
    { title: "청소", value: "CLEAN" },
  ];
  const animalAvailability = [
    { title: "가능", value: true },
    { title: "불가능", value: false },
  ];
  const onChangeOpenPost = () => {
    setIsOpenPost(true);
  };

  const onCompletePost = (data) => {
    let fullAddress = data.address;
    let extraAddr = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddr += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddr += extraAddr !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddr !== "" ? ` (${extraAddr})` : "";
    }

    setAddress(data.zonecode + fullAddress);
    addressInput.current.focus();
    setIsOpenPost(false);
  };
  const onSubmit = (data) => {
    console.log(data);
  };
  const watchAllFields = watch();
  useEffect(() => {
    if (localStorage.getItem("register")) {
      if (window.confirm("이어서 입력하시겠습니까?")) {
        setPrevRegister(JSON.parse(localStorage.getItem("register")));
      } else {
        localStorage.removeItem("register");
      }
    }
  }, []);
  // useEffect(() => {
  //   return () => {
  //     console.log(111)
  //     localStorage.setItem("register", JSON.stringify(watchAllFields));
  //   };
  // }, []);

  const postCodeStyle = {
    display: "block",
    position: "absolute",
    top: "100px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "100%",
  };

  return (
    <RegisterForm onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <legend>방 등록 폼</legend>
        <FormCell>
          <Label>주소</Label>
          {isOpenPost ? <DaumPostcode style={postCodeStyle} autoClose onComplete={onCompletePost} /> : null}
          <Input
            type="text"
            placeholder="건물주소 or 건물명을 검색하세요."
            title="주소"
            value={address}
            {...register("address")}
            ref={addressInput}
            onClick={() => onChangeOpenPost()}
          />
          <Input
            type="text"
            {...register("detailAddress")}
            placeholder="상세주소(동/호수를 입력해주세요.)"
            title="상세주소"
            defaultValue={prevRegister.detailAddress}
          />
        </FormCell>
        <FormCell>
          <Label htmlFor="">종류</Label>
          <Select name="" id="" {...register("realEstate")} defaultValue={prevRegister.realEstate}>
            {realEstate.map((item) => {
              if (item.value === prevRegister.realEstate) {
                return (
                  <option value={item.value} selected>
                    {item.title}
                  </option>
                );
              }
              return <option value={item.value}>{item.title}</option>;
            })}
          </Select>
        </FormCell>
        <FormCell>
          <Label>가격</Label>
          <CustomLabelWrapper>
            {priceType.map((item) => {
              return (
                <>
                  <input
                    type="radio"
                    id={item.value}
                    value={item.value}
                    {...register("realEstatePriceType")}
                    defaultValue={prevRegister.realEstatePriceType}
                  />
                  <CustomLabel htmlFor={item.value}>{item.title}</CustomLabel>
                </>
              );
            })}
          </CustomLabelWrapper>
          <TextWithInputWrapper>
            <InputBox>
              <Input
                type="text"
                placeholder="보증금"
                {...register("depositAmount")}
                defaultValue={prevRegister.depositAmount}
              />
              만원
            </InputBox>
            <InputBox>
              <Input
                type="text"
                placeholder="임대료"
                {...register("rentAmount")}
                defaultValue={prevRegister.rentAmount}
              />
              만원
            </InputBox>
          </TextWithInputWrapper>
        </FormCell>
        <FormCell>
          <Label htmlFor="">관리비</Label>
          <InputBox>
            <Input type="text" {...register("maintenanceFee")} defaultValue={prevRegister.maintenanceFee} /> 만원 / 월
          </InputBox>
        </FormCell>
        <FormCell>
          <Label>방향</Label>
          <Select name="" id="" {...register("sunlightDirection")} defaultValue={prevRegister.sunlightDirection}>
            {direction.map((item) => {
              return <option value={item.value}>{item.title}</option>;
            })}
          </Select>
        </FormCell>
        <FormCell>
          <Label>관리 항목 (다중선택가능)</Label>
          <CustomLabelWrapper>
            {feeItems.map((item) => {
              return (
                <>
                  <input
                    type="checkbox"
                    id={item.value}
                    value={item.value}
                    {...register("maintenanceFeeItems")}
                    defaultValue={prevRegister.maintenanceFeeItems}
                  />
                  <CustomLabel htmlFor={item.value}>{item.title}</CustomLabel>
                </>
              );
            })}
          </CustomLabelWrapper>
        </FormCell>
        <FormCell>
          <Label>전용면적</Label>
          <TextWithInputWrapper>
            <InputBox>
              <Input type="text" {...register("leasableArea")} defaultValue={prevRegister.leasableArea} />평
            </InputBox>
            <InputBox>
              <Input type="text" {...register("rentAmount")} defaultValue={prevRegister.leasableArea} />
              m2
            </InputBox>
          </TextWithInputWrapper>
        </FormCell>
        <FormCell>
          <Label>애완동물 여부</Label>
          <CustomLabelWrapper>
            {animalAvailability.map((item) => {
              return (
                <>
                  <input
                    type="radio"
                    id={item.title}
                    value={item.value}
                    {...register("pet")}
                    defaultValue={prevRegister.pet}
                  />
                  <CustomLabel htmlFor={item.title}>{item.title}</CustomLabel>
                </>
              );
            })}
          </CustomLabelWrapper>
        </FormCell>
        <button type="submit">버튼</button>
      </fieldset>
    </RegisterForm>
  );
};

RoomForm.propTypes = {};

export default RoomForm;

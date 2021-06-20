import React, { ref } from "react";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import DaumPostcode from "react-daum-postcode";

const RoomForm = () => {
  const { register, handleSubmit,watch } = useForm();
  const onSubmit = data => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <legend>방 등록 폼</legend>
        <div>
          <label>주소</label>
          {/* <DaumPostcode onComplete={handleComplete} /> */}
          <input type="text" {...register("detailAddress")} placeholder="상세주소(동/호수를 입력해주세요.)" title="상세주소" />
          
        </div>
        <div>
          <label htmlFor="">종류</label>
          <select name="" id="" {...register("realEstate")}>
            <option>매물종류</option>
            <option value="ONE_ROOM">원룸</option>
            <option value="TWO_ROOM">투룸</option>
            <option value="APARTMENT">아파트</option>
            <option value="EFFICIENCY_APARTMENT">오피스텔</option>
          </select>
        </div>
        <div>
          가격
          <div>
            <input type="radio" value="MONTHLY" {...register("realEstatePriceType")} />
            <label htmlFor="">월세</label>
            <input type="radio" value="JEONSE" {...register("realEstatePriceType")} />
            <label htmlFor="">전세</label>
            <input type="radio" value="SELLING" {...register("realEstatePriceType")}/>
            <label htmlFor="">매매</label>
          </div>
          <div>
          <input type="text" placeholder="보증금" {...register("depositAmount")}/>  <input type="text" placeholder="임대료"{...register("rentAmount")}/>
          </div>
        </div>
        <div>
          <label htmlFor="">관리비</label>
          <div>
            <input type="text" {...register("maintenanceFee")}/> 만원/월
          </div>
        </div>
        <div>
          <select name="" id="" {...register("sunlightDirection")}>
            <option value="EAST">동</option>
            <option value="WEST">서</option>
            <option value="SOUTH">남</option>
            <option value="NORTH">북</option>
            <option value="SOUTH_EAST">남동</option>
            <option value="SOUTH_WEST">남서</option>
            <option value="NORTH_WEST">북서</option>
            <option value="NORTH_EAST">북동</option>
          </select>
        </div>
        <div>
          <input type="checkbox" value="" {...register("maintenanceFeeItems")}/>
          <label htmlFor="">전기</label>
          <input type="checkbox" {...register("maintenanceFeeItems")}/>
          <label htmlFor="">가스</label>
          <input type="checkbox"{...register("maintenanceFeeItems")} />
          <label htmlFor="">수도</label>
          <input type="checkbox" {...register("maintenanceFeeItems")}/>
          <label htmlFor="">인터넷</label>
          <input type="checkbox" {...register("maintenanceFeeItems")}/>
          <label htmlFor="">TV</label>
          <input type="checkbox"{...register("maintenanceFeeItems")}/>
          <label htmlFor="">청소</label>
        </div>
        <div>
          <label>
            전용면적
             
          </label>
          <input type="text" />평
          <input type="text" {...register("leasableArea")}/>m2
        </div>
        <div>
          애완동물 여부 
          <label><input type="radio" value={true}  {...register("pet")}/>가능</label>
          <label><input type="radio"  value={false} {...register("pet")}/></label>
        </div>
        <button type="submit">버튼</button>
      </fieldset>
    </form>
  );
};

RoomForm.propTypes = {};

export default RoomForm;

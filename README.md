# 프론트엔드 개발자 과제

## **실행 방법**

node -v 14.15.1 로 설치

`npm i`

`npm start`

## **프로젝트 소개**

퍼블스토어 상품 목록, 장바구니 기능(담기, 수량변경 삭제 등) 구현하기!

## **프로젝트 목표**

필수 조건에 맞게 상품 목록, 장바구니 기능을 구현하는 것을 목표로 했습니다.

### 필수조건

- Redux사용하여 State 관리를 합니다.
  (선택) Redux-saga, Redux-Toolkit 사용
- Next.js, React와 Hooks, JSX를 사용하여 구현해야 합니다.
- ES6 이상의 JavaScript를 사용하여 구현해야 합니다.
- styled-components, sass등을 사용하여 스타일링을 합니다.
- UI라이브러리 미사용
  (필수 라이브러리를 제외한 라이브러리를 사용하신 경우, 해당 라이브러리 사용의 근거 설명 필요)
- 인증에 Basic Auth를 사용합니다.

## **기술**

- React.js
- stlyed-components
- Redux
- Redux-Saga
- immer
- react-hook-form

## **구현 기능**

api 연결 대비하여 작업하였습니다.

1. 방 등록 페이지
   - 매물종류
   - 가격
   - 임대료 - 월세만
   - 관리비 - 월세, 전세의 경우만
   - 등록이 성공할 경우 완료 팝업.
2. 방 상세페이지
   - 상세정보 출력
   - 방 내리기 버튼 , 올리기 버튼
3. 방 목록 페이지
   - 목록 탭 전환
   - 가격과 사진 주소 출력
   - 등록 페이지 이동 버튼 오른쪽 상단

## **구현하지 못한 기능**

1. **방이 내려져 있는 경우**

   상세페이지에서 canceled 값을 가져와 true일 경우

   input 컴포넌트로 변경하여 수정 가능하게합니다.

2. **방 등록 페이지**

   필수 입력

   { required: true} 사용

   유효성 검사 및 에러 처리

   react-hook-from 스키마로 유효성 검사

   const schema = yup.object().shape({
   firstName: yup.string().required(),
   age: yup.number().positive().integer().required(),
   });

   {errors.firstName?.type === 'required' && "First name is required"}

   **입력하는 중간에 페이지에서 나가는 경우 경우 다시 접속할 때 이어서 입력여부를 받습니다**

   ```jsx
   useEffect(() => {
     if (localStorage.getItem("register")) {
       if (window.confirm("이어서 입력하시겠습니까?")) {
         setPrevRegister(JSON.parse(localStorage.getItem("register")));
       } else {
         localStorage.removeItem("register");
       }
     }
   }, []);

   useEffect(() => {
     return () => {
       localStorage.setItem("register", JSON.stringify(watchAllFields));
     };
   }, []);
   ```

언마운트 될 때 watchAllFields를 이용하여 로컬 스토리지에 저장하고 다시 등록 페이지로 이동 했을 때 로컬 스토리지에 register 가 존재하면 comfirm으로 이어서 입력 여부를 물어본 후 true 면 state에 저장하여 defaultValue={이전 값} 을 추가하고 등록 했을 때는 로컬스토리지에서 값을 제거하려고 하였습니다. 제대로 저장이 안되는 이슈가 발생하여 개선방안으로 1분마다 로컬 스토리지에 자동저장을 하여 처리예정입니다.

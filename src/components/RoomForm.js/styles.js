import styled from "styled-components";

export const RegisterForm = styled.form`
  max-width: 940px;
  margin: 0 auto;
  padding: 20px;
  fieldset {
    padding: 0;
    margin: 0;
    border: 0;
  }
  legend {
    position: absolute;
    clip: rect(0 0 0 0);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
  }
  text-align: left;
`;
export const Label = styled.label`
  display:block;
  margin-bottom: 10px;
  font-weight: 600;
`;

export const FormCell = styled.div`
  & + & {
    margin-top: 20px;
  }
`;
export const Input = styled.input`
  display: block;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
  & + & {
    margin-top: 10px;
  }
`;

export const CustomLabel = styled.label`
  flex: 1 1 33%;
  padding: 10px 0;
  text-align: center;
  border: 1px solid #ccc;
  & + & {
    border-left: 0;
  }
`;

export const CustomLabelWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  input {
    display: none;
  }
  input:checked + ${CustomLabel} {
    background: #fff29b;
  }
`;

export const TextWithInputWrapper = styled.div`
  display: flex;
  margin-top: 10px;
  ${Input} {
    width: auto;
    display: inline-block;
  }
`;
export const InputBox = styled.div`
  flex: 1;
  border: 1px solid #ccc;
  ${Input} {
    display: inline-block;
    width: 85%;
    border: 0;
  }
  & + & {
    margin-left: 10px;
  }
`;

export const Select = styled.select`
  display: block;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

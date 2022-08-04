import styled from 'styled-components';
import { css } from 'styled-components';

const Inputs = () => {
  return (
    <div>
      <Label>
        <Input defaultChecked />
        <LabelText>Hello</LabelText>
      </Label>
      <Label>
        <Input />
        <LabelText $mode="dark">Hello</LabelText>
      </Label>
      <Label>
        <Input defaultChecked />
        <LabelText>Hello</LabelText>
      </Label>
      <Label>
        <Input defaultChecked />
        <LabelText $mode="dark">Hello</LabelText>
      </Label>
    </div>
  );
};

const Input = styled.input.attrs({ type: 'checkbox' })``;

const Label = styled.label`
  dispaly: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
`;

const LabelText = styled.span`
  ${(props) => {
    switch (props.$mode) {
      case 'dark':
        return css`
          background-color: black;
          color: white;
          ${Input}:checked + && {
            color: red;
          }
        `;
      default:
        return css`
          background-color: white;
          color: black;
          ${Input}:checked + && {
            color: brown;
          }
        `;
    }
  }}
`;

export default Inputs;

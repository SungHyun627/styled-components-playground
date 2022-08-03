import styled from 'styled-components';
const Buttons = () => {
  return (
    <div>
      <Button>Normal</Button>

      {/* Adapting based on Props */}
      <Button primary>Primary</Button>

      {/* Based button, but override styles */}
      <Orangebutton>Orange</Orangebutton>

      {/* Use as polymorphic prop */}
      <Button as={ReversedButton}>Reversed Button</Button>

      {/* If simple element, pass props related with HTML attribute */}
      <CustomizedButton>Very Nice</CustomizedButton>

      {/* If customized element, pass all props */}
      <CustomizedButton buttonColor="purple">Very Nice</CustomizedButton>
    </div>
  );
};

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid brown;
  border-radius: 3px;
  background: ${(props) => (props.primary ? 'brown' : 'white')};
  color: ${(props) => (props.primary ? 'white' : 'brown')};
`;

const Orangebutton = styled(Button)`
  color: orange;
  border-color: orange;
`;

const ReversedButton = (props) => (
  <Button {...props} children={props.children.split('').reverse()} />
);

const CustomizedButton = styled.button`
  padding: 0.5em;
  margin: 0.5em;
  background: pink;
  border-color: black;
  border-radius: 3px;
  color: ${(props) => props.buttonColor || 'white'};
`;

export default Buttons;

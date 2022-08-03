import styled from 'styled-components';
const Buttons = () => {
  return (
    <div>
      <Button>Normal</Button>
      <Button primary>Primary</Button>
    </div>
  );
};

// Adapting based on Props
const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid brown;
  border-radius: 3px;
  background: ${(props) => (props.primary ? 'brown' : 'white')};
  color: ${(props) => (props.primary ? 'white' : 'brown')};
`;

export default Buttons;

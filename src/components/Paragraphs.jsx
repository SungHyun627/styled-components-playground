import styled from 'styled-components';

const Paragraphs = () => {
  return (
    <div>
      <Paragraph>Hello</Paragraph>
      <Paragraph>Hello</Paragraph>
      <Paragraph>Hello</Paragraph>
      <div>nice</div>
      <Paragraph>Hello</Paragraph>
      <div>weather</div>
      <Paragraph>Hello</Paragraph>
      <Paragraph className="orange">Hello</Paragraph>
      <div className="pink">
        <Paragraph>pink</Paragraph>
      </div>
    </div>
  );
};

const Paragraph = styled.p`
  color: white;
  background: blue;
  &:hover {
    color: green;
  }

  & ~ & {
    background: navy;
  }

  & + & {
    background: lime;
  }

  &.orange {
    background: orange;
  }

  .pink & {
    background: pink;
  }
`;
export default Paragraphs;

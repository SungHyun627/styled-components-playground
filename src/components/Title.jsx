import styled from 'styled-components';

const Title = () => {
  return (
    <Background>
      <TitleWrapper>Styled Title</TitleWrapper>
    </Background>
  );
};

const TitleWrapper = styled.h1`
  font-size: 2em;
  text-align: center;
  color: palevioletred;
`;

const Background = styled.section`
  padding: 1em;
  background: papayawhip;
`;

export default Title;

import { styled } from 'styled-components';

import { Scene } from '.';

export const MixingHtmlAndWebglWithOcclusion = () => {
  return (
    <Container>
      <Scene />
    </Container>
  );
};

const Container = styled.div`
  @import url('https://rsms.me/inter/inter.css');
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: inter;
  color: black;
  background: #202025;

  .content {
    width: 334px;
    height: 216px;
    background: #f0f0f0;
    border-radius: 3px;
    overflow-y: auto;
    padding: 0;
  }

  .wrapper {
    padding: 10px;
    width: 668px;
    height: 432px;
    transform: scale(0.5);
    transform-origin: top left;
  }
`;

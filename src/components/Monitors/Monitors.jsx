import { useEffect } from 'react';
import { styled } from 'styled-components';

import { Overlay, Scene } from './';
import { dataStore } from '../../store/dataStore';

export const Monitors = () => {
  const { setLogoPosition } = dataStore((state) => ({ setLogoPosition: state.setLogoPosition }));
  useEffect(() => setLogoPosition('bottom left'), []);

  return (
    <Container>
      <Overlay />
      <Scene />
    </Container>
  );
};

const Container = styled.div`
  @font-face {
    font-family: 'Inter';
    src: url('/src/components/Monitors/assets/Inter-Medium.woff');
  }

  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;

  a {
    color: #f0f0f0;
  }

  a {
    pointer-events: all;
    color: #f0f0f0;
    text-decoration: none;
  }

  svg {
    fill: #f0f0f0;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  canvas {
    opacity: 0;
    touch-action: none;
    animation: fade-in 5s ease 1s forwards;
  }

  input {
    font-family: 'Inter';
    width: 100px;
    border: none;
    background-image: none;
    background-color: transparent;
    color: transparent;
    caret-color: #555;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    font-weight: 400;
  }

  input:focus {
    outline: none;
    box-shadow: none !important;
  }
`;

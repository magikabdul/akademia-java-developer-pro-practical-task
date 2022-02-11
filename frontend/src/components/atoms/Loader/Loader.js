import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

const rotate = keyframes`
  0% {
    transform: rotate(0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  50% {
    transform: rotate(900deg);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  100% {
    transform: rotate(1800deg);
  }
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HourGlass = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  &::after {
    content: ' ';
    display: block;
    border-radius: 50%;
    width: 0;
    height: 0;
    margin: 8px;
    box-sizing: border-box;
    border: 32px solid;
    border-color: #fff transparent;
    animation: ${rotate} 1.2s infinite;
  }
`;

const Loader = ({ setLoader }) => (
  <Container onClick={() => setLoader(false)}>
    <HourGlass />
  </Container>
);

Loader.propTypes = {
  setLoader: PropTypes.func.isRequired,
};

export default Loader;

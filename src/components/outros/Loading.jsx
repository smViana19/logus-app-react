import React from 'react';
import styled, { keyframes } from 'styled-components';

// Define the keyframes for the animation
const p6 = keyframes`
  100% {
    inset: 0;
  }
`;

// Create the styled component for the loader
const CustomLoader = styled.div`
  width: 120px;
  height: 22px;
  border-radius: 20px;
  color: #820AD1;
  border: 2px solid;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    margin: 2px;
    inset: 0 100% 0 0;
    border-radius: inherit;
    background: #820AD1S;
    animation: ${p6} 2s infinite;
  }
`;

export default function Loading() {
  return (
    <CustomLoader />
  );
}

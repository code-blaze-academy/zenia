import React from "react";
import styled, { keyframes } from "styled-components";

// Define keyframes for animations
const pulse1 = keyframes`
  0%, 100% { height: 14.0164px; }
  50% { height: 28px; }
`;

const pulse2 = keyframes`
  0%, 100% { height: 18.6885px; }
  50% { height: 25px; }
`;

const pulse3 = keyframes`
  0%, 100% { height: 28.0328px; }
  50% { height: 35px; }
`;

const pulse4 = keyframes`
  0%, 100% { height: 18.6885px; }
  50% { height: 25px; }
`;

const pulse5 = keyframes`
  0%, 100% { height: 14.0164px; }
  50% { height: 20px; }
`;

const pulse6 = keyframes`
  0%, 100% { height: 18.6885px; }
  50% { height: 25px; }
`;

const pulse7 = keyframes`
  0%, 100% { height: 28.0328px; }
  50% { height: 35px; }
`;

const pulse8 = keyframes`
  0%, 100% { height: 18.6885px; }
  50% { height: 25px; }
`;

const pulse9 = keyframes`
  0%, 100% { height: 14.0164px; }
  50% { height: 20px; }
`;

const pulse10 = keyframes`
  0%, 100% { height: 5.60656px; }
  50% { height: 10px; }
`;

// Define styled components for each bar with animations
const SVGContainer = styled.svg`
  width: 57px;
  height: 29px;
`;

const Bar = styled.rect`
  fill: #0c8ce9;
  transform-origin: bottom;
`;

const Bar1 = styled(Bar)`
  animation: ${pulse1} 1s infinite;
`;

const Bar2 = styled(Bar)`
  animation: ${pulse2} 1s infinite;
`;

const Bar3 = styled(Bar)`
  animation: ${pulse3} 1s infinite;
`;

const Bar4 = styled(Bar)`
  animation: ${pulse4} 1s infinite;
`;

const Bar5 = styled(Bar)`
  animation: ${pulse5} 1s infinite;
`;

const Bar6 = styled(Bar)`
  animation: ${pulse6} 1s infinite;
`;

const Bar7 = styled(Bar)`
  animation: ${pulse7} 1s infinite;
`;

const Bar8 = styled(Bar)`
  animation: ${pulse8} 1s infinite;
`;

const Bar9 = styled(Bar)`
  animation: ${pulse9} 1s infinite;
`;

const Bar10 = styled(Bar)`
  animation: ${pulse10} 1s infinite;
`;

// Main React component
const EqualizerAudio = () => {
  return (
    <SVGContainer
      viewBox="0 0 57 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Bar1 y="7.49121" width="2.33607" height="14.0164" rx="1.16803" />
      <Bar2
        x="6.07373"
        y="5.15527"
        width="2.33607"
        height="18.6885"
        rx="1.16803"
      />
      <Bar3
        x="12.1475"
        y="0.483398"
        width="2.33607"
        height="28.0328"
        rx="1.16803"
      />
      <Bar4
        x="18.2212"
        y="5.15527"
        width="2.33607"
        height="18.6885"
        rx="1.16803"
      />
      <Bar5
        x="24.2949"
        y="7.49121"
        width="2.33607"
        height="14.0164"
        rx="1.16803"
      />
      <Bar6
        x="30.3687"
        y="5.15527"
        width="2.33607"
        height="18.6885"
        rx="1.16803"
      />
      <Bar7
        x="36.4424"
        y="0.483398"
        width="2.33607"
        height="28.0328"
        rx="1.16803"
      />
      <Bar8
        x="42.5166"
        y="5.15527"
        width="2.33607"
        height="18.6885"
        rx="1.16803"
      />
      <Bar9
        x="48.5903"
        y="7.49121"
        width="2.33607"
        height="14.0164"
        rx="1.16803"
      />
      <Bar10
        x="54.6641"
        y="11.6963"
        width="2.33607"
        height="5.60656"
        rx="1.16803"
      />
    </SVGContainer>
  );
};

export default EqualizerAudio;

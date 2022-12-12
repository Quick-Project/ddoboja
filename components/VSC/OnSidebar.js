import React from 'react';
import styled from 'styled-components';
import onFile from './img/Onfile.png';
import OffFile from './img/offfile.png';
import Image from 'next/image';

// const Onfile = styled(Image)``;
const OnFile = styled(Image)``;
const SideContain = styled.div`
  width: 40px;
  height: 100vh;
  border-right: 1px solid black;
  background-color: #191919;
  position: absolute;
`;
const Line = styled.div`
  border: 1px solid white;
  width: 2px;
  height: 50px;
  position: absolute;
`;

const OnSideBar = () => {
  return (
    <div>
      <SideContain>
        <Line />
        <OnFile src={onFile} />
      </SideContain>
    </div>
  );
};
export default OnSideBar;

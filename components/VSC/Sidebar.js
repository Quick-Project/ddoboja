import React from 'react';
import styled from 'styled-components';
import OnFile from './img/Onfile.png';
import OffFile from './img/Offfile.png';
import Image from 'next/image';

// const Onfile = styled(Image)``;
const Offfile = styled(Image)``;
const SideContain = styled.div`
  width: 40px;
  height: 100vh;
  border-right: 1px solid black;
  background-color: #191919;
  position: absolute;
`;

const SideBar = () => {
  return (
    <div>
      <SideContain>
        <Offfile src={OffFile} />
      </SideContain>
    </div>
  );
};
export default SideBar;

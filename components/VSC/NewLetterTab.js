import React from 'react';
import styled from 'styled-components';
import jsLogo from './img/JS.png';
import Image from 'next/image';

const MainContain = styled.div`
  width: 100%;
`;
const JSLogoImage = styled(Image)`
  color: white;
`;
const TabContain = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-bottom: 1px solid #69b0a9;
  width: 180px;
  height: 40px;
  background-color: #1e1e1e;
`;
const TabText = styled.div`
  color: rgb(41, 128, 185);
  margin: 0 13px 0 8px;
`;

const NewTabTab = ({ contentsData, id }) => {
  console.log(contentsData);
  return (
    contentsData &&
    contentsData.map((el, idx) => {
      return idx === id ? (
        <div key={idx}>
          <MainContain>
            <TabContain>
              <JSLogoImage src={jsLogo} width={15} height={15} />
              <TabText>{`${el.title}`}</TabText>
              <div>x</div>
            </TabContain>
          </MainContain>
        </div>
      ) : (
        <></>
      );
    })
  );
};

export default NewTabTab;

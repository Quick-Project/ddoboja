import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import folder from './img/folder.png';
import jsLogo from './img/JS.png';
import jsonFile from './img/jsonFile.png';
import esLintLogo from './img/ESLint.png';
import cssLogo from './img/css.png';

const Contain = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  border-right: 1px solid black;
  width: 200px;
  height: 100vh;
  margin-left: 40px;
`;
const Head = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 20px 20px 20px;
`;
const JSLogo = styled(Image)``;
const Folder = styled(Image)``;
const JsonLogo = styled(Image)``;
const ESLint = styled(Image)``;
const CSS = styled(Image)``;

const MainContain = styled.div`
  margin-left: 10px;
  margin-bottom: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const FolderContain = styled.div`
  margin-left: 30px;
  display: flex;
  flex-direction: row;
  margin-bottom: 5px;
  margin-top: 5px;
  align-items: center;
`;
const HeadText = styled.div`
  font-size: 13px;
`;
const MainText = styled.div`
  margin-left: 10px;
  font-size: 15px;
  color: rgb(41, 128, 185); ;
`;
const Text = styled.div`
  margin-left: 10px;
  font-size: 15px;
  color: rgb(142, 142, 142);
`;

const FolderLine = () => {
  return (
    <Contain>
      <Head>
        <HeadText>탐색기</HeadText>
        <HeadText> . . . </HeadText>
      </Head>
      <MainContain>
        <Folder src={folder} width={15} height={20} />
        <Text>Goodbye_FE_40th</Text>
      </MainContain>
      <FolderContain>
        <JSLogo src={jsLogo} width={15} height={15} />
        <MainText> {`40기_동기에게 .js`}</MainText>
      </FolderContain>
      <FolderContain>
        <JSLogo src={jsLogo} width={15} height={15} />
        <Text> {`6개월간의_여정 .js`}</Text>
      </FolderContain>
      <FolderContain>
        <JSLogo src={jsLogo} width={15} height={15} />
        <Text>{`고생_많았습니다 .js`}</Text>
      </FolderContain>
      <FolderContain>
        <JSLogo src={jsLogo} width={15} height={15} />
        <Text>{`다음에 만날 때는 .js`}</Text>
      </FolderContain>
      <FolderContain>
        <JSLogo src={jsLogo} width={15} height={15} />
        <Text>{`현직에서_만납시다 .js`}</Text>
      </FolderContain>
      <FolderContain>
        <CSS src={cssLogo} width={15} height={15} />
        <Text>{`고마원던_동기에게 .css`}</Text>
      </FolderContain>
      <FolderContain>
        <CSS src={cssLogo} width={15} height={15} />
        <Text>{`마음을_담은_편지 .css`}</Text>
      </FolderContain>
      <FolderContain>
        <JsonLogo src={jsonFile} width={20} height={20} />
        <Text>{`package-lock .json`}</Text>
      </FolderContain>
      <FolderContain>
        <JsonLogo src={jsonFile} width={20} height={20} />
        <Text>{`package .json`}</Text>
      </FolderContain>
      <FolderContain>
        <ESLint src={esLintLogo} width={18} height={17} />
        <Text>{`.eslintrc .js`}</Text>
      </FolderContain>
    </Contain>
  );
};

export default FolderLine;
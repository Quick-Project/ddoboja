import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import OnSideBar from '../components/VSC/OnSidebar';
import BottomLine from '../components/VSC/BottomLine';
import FolderLine from '../components/VSC/LeftFolderLine';
import MainInput from '../components/VSC/MainInput';
import NewTabTab from '../components/VSC/NewLetterTab';
import axios from 'axios';

const Body = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #1e1e1e;
`;
const VscContain = styled.div`
  margin-left: 240px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const WelcomeText = styled.div`
  margin: 76px 0 0 10px;
`;

const NewLetter = () => {
  const [data, setData] = useState();
  const [content, setContent] = useState();
  const [id, setId] = useState(-1);

  useEffect(() => {
    axios.get('http://localhost:3000/api/letter/FE40').then((res) => {
      setData(res.data);
    });
  }, []);

  const viewHandler = (idx) => {
    setId(idx);
  };

  const folder = () => {
    if (data) {
      return (
        <FolderLine
          viewHandler={viewHandler}
          contentsData={data && data}
          id={id}
        />
      );
    }
  };

  // const contents = () => {
  //   if (!data) {
  //     return <div>편지를 기다리고 있어요!</div>;
  //   }
  //   if (content) {
  //     return <MainInput data={content && content} />;
  //   } else {
  //     return <div>편지를 기다리고 있어요!</div>;
  //   }
  // };

  useEffect(() => {
    if (data) {
      setContent(data[id]);
    }
  }, [id]);

  return (
    <Body>
      <OnSideBar />
      <FolderLine
        viewHandler={viewHandler}
        contentsData={data && data}
        id={id}
      />
      <VscContain>
        <NewTabTab contentsData={data && data} id={id} />
        {content ? (
          <MainInput data={content && content} />
        ) : (
          <WelcomeText>{`← 보고싶은 롤링페이퍼를 클릭해보세요!`}</WelcomeText>
        )}
        <BottomLine />
      </VscContain>
    </Body>
  );
};

export default NewLetter;

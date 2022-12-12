import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import OnSideBar from '../components/VSC/OnSidebar';
import BottomLine from '../components/VSC/BottomLine';
import TerminalSpace from '../components/VSC/Terminal';
import FolderLine from '../components/VSC/LeftFolderLine';
import MainInput from '../components/VSC/MainInput';
import NewTabTab from '../components/VSC/NewLetterTab';
import ButtonCP from '../components/VSC/Button';
import axios from 'axios';

const body = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #1e1e1e;
`;
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
const NewLetter = () => {
  const [data, setData] = useState();
  const [content, setContent] = useState();
  const [id, setId] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:3000/api/letter/FE40').then((res) => {
      setData(res.data);
    });
  }, []);

  const viewHandler = (idx) => {
    setId(idx);
    console.log(data[idx]);
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
        <NewTabTab />
        {content ? (
          <MainInput data={content && content} />
        ) : (
          <div>편지를 기다리고 있어요!</div>
        )}
        <ButtonCP />
        <TerminalSpace />
        <BottomLine />
      </VscContain>
    </Body>
  );
};

export default NewLetter;

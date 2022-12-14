import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { InputValue } from '../../states';
import { useRecoilState, useRecoilValue } from 'recoil';
import { currentUser } from '../../states';
import useGetname from '../hook/useGetname';
import useGetTyping from '../hook/useGetTyping';

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const NumberContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;
  background-color: #f7f7f7;
  padding-top: 3px;
  padding-bottom: 3px;
  border-right: 1px solid #999999;
`;

const NumbersList = styled.li`
  width: 30px;
  height: 25px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  color: #999999;
  list-style: none;
  padding-right: 3px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const SourcecodeContainer = styled.div`
  font-weight: 600;
  margin-right: 30px;
  width: 82px;
  margin-top: 5px;
  font-size: 13px;
  height: 25px;
  text-align: right;
  width: 100%;
`;

const WorkContainer = styled.div`
  width: 900px;
  padding-top: 3px;
  display: flex;
  flex-direction: column;
`;

const CodeContainer = styled.div`
  padding-left: 5px;
  width: 100%;
  height: ${({ h }) => h || '25px'};
  display: flex;
  margin-bottom: ${({ mb }) => mb || '0px'};
  align-items: center;
`;

const UserInput = styled.input`
  width: auto;
  margin-bottom: ${({ mb }) => mb || '3px'};
  border: 0;
  display: block;
  color: #a83636;
  padding-left: 3px;
  font-size: 13px;
  padding-left: 3px;
  padding-right: 3px;
  background-color: white;
  width: ${({ width }) => width};
  &::placeholder {
    content: attr(placeholder);
    color: #a83636;
    font-size: 13px;
  }
`;

const UserTextArea = styled.textarea`
  width: 700px;
  margin-bottom: ${({ mb }) => mb || '3px'};
  border: 0;
  display: block;
  color: #a83636;
  font-size: 15px;
  padding-top: 2px;
  padding-left: 5px;
  resize: none;
  height: 66px;
  background-color: #eee;
  align-self: flex-start;
  opacity: 0.8;
  width: ${({ width }) => width};
  border-radius: 3px;
  &::placeholder {
    content: attr(placeholder);
    color: #a83636;
    font-size: 15px;
    padding-left: 3px;
    padding-top: 1px;
  }
`;

const Code = styled.div`
  display: flex;
  align-items: center;
  color: ${({ color }) => color || '#000000'};
  font-weight: 600;
  margin-right: ${({ margin }) => margin || '10px'};
  margin-left: ${({ marginL }) => marginL || '0'};
  margin-bottom: ${({ mb }) => mb || '0'};
  letter-spacing: ${({ ls }) => ls || '1px'};
  text-align: center;
  width: ${({ width }) => width};
`;

export default function WriterContainer() {
  // 현재 유저 받아오는 훅
  const currentUsername = useGetname();
  const [inputValue, onValue] = useGetTyping();
  // console.log(currentUsername);
  const [size, setSize] = useState(23);
  const [titleSize, setTitlesize] = useState(17);

  useEffect(() => {
    if (inputValue.title === '') {
      setTitlesize(17);
    } else {
      setTitlesize(inputValue.title.length * 1.5 + 4);
    }

    if (inputValue.reciever === '') {
      setSize(23);
    } else {
      setSize(inputValue.reciever.length * 1.8);
    }
  }, [inputValue]);

  return (
    <Container>
      <SourcecodeContainer>소스 코드</SourcecodeContainer>
      <NumberContainer>
        {new Array(16)
          .fill(0)
          .map((x, idx) => idx)
          .map((num) => (
            <NumbersList key={num}>{num}</NumbersList>
          ))}
      </NumberContainer>
      <WorkContainer>
        <CodeContainer>
          <Code color={'#006699'}>const </Code>
          <Code color={'#808080'}>fs</Code>
          <Code margin={'3px'}>= require( </Code>
          <Code margin={'2px'} color={'#A83636'}>
            {`"fs"`}
          </Code>
          <Code> )</Code>
        </CodeContainer>

        <CodeContainer>
          <Code color={'#006699'}>const </Code>
          <Code color={'#808080'}>input</Code>
          <Code margin={'3px'}>= fs.readFileSync(</Code>
          <Code margin={'2px'} color={'#A83636'}>
            {`"/dev/stdin"`}
          </Code>
          <Code margin={'0px'}> ).toString().trim().split(</Code>
          <Code margin={'2px'} color={'#A83636'}>
            {`"\n"`}
          </Code>
          <Code margin={'0px'}>)</Code>
        </CodeContainer>

        <CodeContainer>
          <Code color={'#006699'}>function </Code>
          <Code color={'#808080'} margin={'0px'}>
            FE40Letter
          </Code>
          <Code margin={'3px'} marginL={'2px'} ls={'2px'}>
            (){' '}
          </Code>
          <Code margin={'0px'}>{`{`} </Code>
        </CodeContainer>
        {/* 여기서 인풋에 DB상태 넣어줄것 작성자*/}

        <CodeContainer>
          <Code color={'#006699'} marginL={'30px'}>
            const
          </Code>
          <Code color={'#808080'} margin={'0px'}>
            reciever
          </Code>
          <Code margin={'3px'}> = [</Code>
          <div>
            {/* 인풋 넣어놓기 */}
            <UserInput
              type={'text'}
              placeholder={'받는 분의 이름을 입력하세요.'}
              size={size}
              name="reciever"
              value={inputValue.reciever}
              onChange={(e) => onValue(e)}
              mb={'1px'}
            />
          </div>
          <Code marginL={'5px'}>]</Code>
        </CodeContainer>

        {/* 제목 작성하기 */}
        <CodeContainer>
          <Code color={'#006699'} marginL={'30px'}>
            const
          </Code>
          <Code color={'#808080'} margin={'0px'}>
            Title
          </Code>
          <Code margin={'1px'}> = [</Code>

          <UserInput
            type={'text'}
            placeholder={'제목을 입력해주세요.'}
            size={titleSize}
            name="title"
            value={inputValue.title}
            onChange={(e) => onValue(e)}
            mb={'0px'}
          />

          <Code marginL={'1px'}>]</Code>
        </CodeContainer>

        <CodeContainer>
          <Code color={'#006699'} marginL={'80px'}>
            const
          </Code>
          <Code color={'#808080'} margin={'0px'}>
            contents
          </Code>
          <Code margin={'3px'} marginL={'3px'}>
            {' '}
            = (
          </Code>
          <Code color={'#808080'} margin={'0px'} mb={'3px'}>
            e
          </Code>
          <Code marginL={'3px'}>
            ) {'=>'} {`{`}
          </Code>
        </CodeContainer>

        <CodeContainer h={'72px'} mb={'2px'}>
          <Code marginL={'120px'} margin={'0px'}>
            <UserTextArea
              placeholder="편지 본문을 입력해주세요. 쿠션어를 사용해서 편지를 작성해주세요."
              value={inputValue.content}
              onChange={(e) => onValue(e)}
              name="content"
            />
          </Code>
        </CodeContainer>
        <CodeContainer>
          <Code marginL={'80px'} margin={'0px'}>
            {'}'}
          </Code>
        </CodeContainer>
        <CodeContainer>
          <Code color={'#006699'} marginL={'80px'}>
            const{' '}
          </Code>
          <Code color={'#808080'}>today</Code>
          <Code margin={'3px'} ls={'1px'}>
            = {`{new Date( )}`}{' '}
          </Code>
        </CodeContainer>
        <CodeContainer>
          <Code color={'#006699'} marginL={'80px'}>
            const{' '}
          </Code>
          <Code color={'#808080'}>writer</Code>
          <Code margin={'2px'} ls={'1px'}>
            = [
          </Code>

          <Code margin={'2px'} ls={'1px'} color={'#a83636'}>
            {/* 현재 유저 이름 적을것 */}
            {currentUsername}
          </Code>
          <Code margin={'2px'} ls={'1px'}>
            ]
          </Code>
        </CodeContainer>
        <CodeContainer>
          <Code color={'#006699'} marginL={'80px'} margin={'0px'}>
            return
          </Code>
          <Code color={'#FF7035'} marginL={'0px'} margin={'0px'}>
            `${`{`}
          </Code>
          <Code color={'#006699'} marginL={'0px'} margin={'0px'}>
            writer
          </Code>
          <Code color={'#FF7035'} marginL={'0px'} margin={'5px'}>
            {`}`}
          </Code>
          <Code color={'#FF7035'} marginL={'0px'} margin={'0px'}>
            ${`{`}
          </Code>
          <Code color={'#006699'} marginL={'0px'} margin={'0px'}>
            title
          </Code>
          <Code color={'#FF7035'} marginL={'0px'} margin={'5px'}>
            {`}`}
          </Code>
          <Code color={'#FF7035'} marginL={'0px'} margin={'0px'}>
            ${`{`}
          </Code>
          <Code color={'#006699'} marginL={'0px'} margin={'0px'}>
            contents
          </Code>
          <Code color={'#FF7035'} marginL={'0px'} margin={'0px'}>
            {`}`}
          </Code>
        </CodeContainer>
        <CodeContainer>
          <Code marginL={'5px'}>{'}'}</Code>
        </CodeContainer>
        <CodeContainer></CodeContainer>
        <CodeContainer>
          <Code marginL={'5px'} ls={'1px'}>{`console.log(FE40Letter())`}</Code>
        </CodeContainer>
      </WorkContainer>
    </Container>
  );
}

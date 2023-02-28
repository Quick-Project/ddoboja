import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

const NumberContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;
  background-color: #1e1e1e;
  padding-top: 3px;
  padding-bottom: 3px;
  padding-left: 10px;
  padding-right: 20px;
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

const WorkContainer = styled.div`
  width: 900px;
  padding-top: 18px;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;
const CodeContainer = styled.div`
  padding-left: 5px;
  width: 100%;
  height: ${({ h }) => h || '25px'};
  display: flex;
  margin-bottom: ${({ mb }) => mb || '0px'};
  align-items: center;
`;
const UserInput = styled.div`
  width: auto;
  margin-bottom: ${({ mb }) => mb || '3px'};
  color: #ffd400;
  border: 0;
  display: block;
  /* color: white; */
  padding-left: 13px;
  font-size: 16px;
  font-weight: 600;
  padding-right: 13px;
  resize: none;
  width: ${({ width }) => width};
`;
const UserTextArea = styled.div`
  width: 1000px;
  margin-bottom: ${({ mb }) => mb || '3px'};
  border: 0;
  display: flex;
  flex-direction: row;
  color: #ffd400;
  font-size: 17px;
  padding-top: 2px;
  padding-left: 5px;
  resize: none;
  height: 66px;
  background-color: #1e1e1e;
  opacity: 0.8;
  width: ${({ width }) => width};
  border-radius: 3px;
`;
const Code = styled.div`
  display: flex;
  align-items: center;
  color: ${({ color }) => color || 'white'};
  font-weight: 600;
  margin-right: ${({ margin }) => margin || '10px'};
  margin-left: ${({ marginL }) => marginL || '0'};
  margin-bottom: ${({ mb }) => mb || '0'};
  letter-spacing: ${({ ls }) => ls || '1px'};
  text-align: center;
  width: ${({ width }) => width};
`;

const MainInput = ({ data }) => {
  const [inputValue, setInputValue] = useState({
    title: data.title,
    content: data.content,
    sender: data.sender,
    date: `"${new Date(data.date).toDateString()}"`,
  });

  useEffect(() => {
    setInputValue({
      title: data.title,
      content: data.content,
      sender: data.sender,
      date: `"${new Date(data.date).toDateString()}"`,
    });
  }, [data]);

  if (inputValue) {
    return (
      <Container>
        <NumberContainer>
          {new Array(16)
            .fill(0)
            .map((x, idx) => idx + 1)
            .map((num) => (
              <NumbersList key={num}>{num}</NumbersList>
            ))}
        </NumberContainer>
        <WorkContainer>
          <CodeContainer>
            <Code color={'#82D3F0'}>import </Code>
            <Code color={'white'}>React</Code>
            <Code color={'#82D3F0'}>from </Code>
            <Code color={'#82D3F0'}>&apos;</Code>
            <Code color={'#2E6A4D'}>react</Code>
            <Code color={'#82D3F0'}>&apos;</Code>
          </CodeContainer>

          <CodeContainer>
            <Code color={'#82D3F0'}>import </Code>
            <Code color={'white'}>Styled</Code>
            <Code color={'#82D3F0'}>from</Code>
            <Code color={'#82D3F0'}>&apos;</Code>
            <Code color={'#2E6A4D'}>styled-components</Code>
            <Code color={'#82D3F0'}>&apos;</Code>
          </CodeContainer>

          <CodeContainer>
            <Code color={'#006699'}>function </Code>
            <Code color={'white'} margin={'0px'}>
              FE40Letter
            </Code>
            <Code margin={'3px'} marginL={'2px'} ls={'2px'}>
              (){' '}
            </Code>
            <Code margin={'0px'}>{`{`} </Code>
          </CodeContainer>

          {/* 제목 작성하기 */}
          <CodeContainer>
            <Code color={'#DAA1D6'} marginL={'30px'}>
              const
            </Code>
            <Code color={'white'} margin={'0px'}>
              title
            </Code>
            <Code margin={'3px'}> = &quot;</Code>

            <UserInput mb={'0px'}>{inputValue.title}</UserInput>

            <Code marginL={'1px'}>&quot;</Code>
          </CodeContainer>

          <CodeContainer>
            <Code color={'#DAA1D6'} marginL={'80px'}>
              const
            </Code>
            <Code color={'white'} margin={'0px'}>
              contents
            </Code>
            <Code margin={'3px'} marginL={'3px'}>
              = (
            </Code>
            <Code color={'red'} margin={'0px'} mb={'3px'}>
              e
            </Code>
            <Code marginL={'3px'}>) =&gt; {`{`}</Code>
          </CodeContainer>

          <CodeContainer h={'72px'} mb={'2px'}>
            <Code marginL={'120px'} margin={'0px'}>
              <UserTextArea>{inputValue.content}</UserTextArea>{' '}
            </Code>
          </CodeContainer>
          <CodeContainer>
            <Code marginL={'80px'} margin={'0px'}>
              {'}'}
            </Code>
          </CodeContainer>
          <CodeContainer>
            <Code color={'#DAA1D6'} marginL={'80px'}>
              const{' '}
            </Code>
            <Code color={'white'}>sendDate =</Code>
            <Code color={'#ffd400'} margin={'3px'} ls={'1px'}>
              {inputValue.date}
            </Code>
          </CodeContainer>
          <CodeContainer>
            <Code color={'#DAA1D6'} marginL={'80px'}>
              const{' '}
            </Code>
            <Code color={'white'}>writer</Code>
            <Code margin={'2px'} ls={'1px'}>
              = [
            </Code>

            <Code margin={'2px'} ls={'1px'} color={'#ffd400'}>
              {/* 작성자 이름 */}
              {inputValue.sender}
            </Code>
            <Code margin={'2px'} ls={'1px'}>
              ]
            </Code>
          </CodeContainer>
          <CodeContainer>
            <Code color={'#006699'} marginL={'80px'} margin={'0px'}>
              return
            </Code>
            <Code color={'#2E6A4D'} marginL={'0px'} margin={'0px'}>
              `${`{`}
            </Code>
            <Code color={'#ff5500'} marginL={'0px'} margin={'0px'}>
              writer
            </Code>
            <Code color={'#2E6A4D'} marginL={'0px'} margin={'5px'}>
              {`}`}
            </Code>
            <Code color={'#2E6A4D'} marginL={'0px'} margin={'0px'}>
              ${`{`}
            </Code>
            <Code color={'#ff5500'} marginL={'0px'} margin={'0px'}>
              title
            </Code>
            <Code color={'#2E6A4D'} marginL={'0px'} margin={'5px'}>
              {`}`}
            </Code>
            <Code color={'#2E6A4D'} marginL={'0px'} margin={'0px'}>
              ${`{`}
            </Code>
            <Code color={'#ff5500'} marginL={'0px'} margin={'0px'}>
              contents
            </Code>
            <Code color={'#2E6A4D'} marginL={'0px'} margin={'0px'}>
              {`}`}
            </Code>
            <Code color={'#2E6A4D'} marginL={'0px'} margin={'0px'}>
              {'`'}
            </Code>
          </CodeContainer>
          <CodeContainer>
            <Code marginL={'5px'}>{'}'}</Code>
          </CodeContainer>
          <CodeContainer></CodeContainer>
          <CodeContainer>
            <Code marginL={'5px'} ls={'1px'}>{`FE40Letter()`}</Code>
          </CodeContainer>
        </WorkContainer>
      </Container>
    );
  }
};
export default MainInput;

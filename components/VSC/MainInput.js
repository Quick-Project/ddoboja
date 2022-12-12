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
  color: white;
  padding-left: 13px;
  font-size: 13px;
  padding-right: 13px;
  resize: none;
  width: ${({ width }) => width};
  &::placeholder {
    content: attr(placeholder);
    color: #ff7035;
    font-size: 13px;
  }
`;
const UserTextArea = styled.textarea`
  width: 700px;
  margin-bottom: ${({ mb }) => mb || '3px'};
  border: 0;
  display: block;
  color: white;
  font-size: 17px;
  padding-top: 2px;
  padding-left: 5px;
  resize: none;
  height: 66px;
  background-color: #1e1e1e;
  align-self: flex-start;
  opacity: 0.8;
  width: ${({ width }) => width};
  border-radius: 3px;
  &::placeholder {
    content: attr(placeholder);
    color: #ff7035;
    font-size: 15px;
    padding-left: 3px;
    padding-top: 1px;
  }
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

const MainInput = () => {
  const [inputValue, setInputValue] = useState({
    reciever: '',
    title: '',
    content: '',
  });

  const onValue = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };

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
        {/* 여기서 인풋에 DB상태 넣어줄것 작성자*/}

        <CodeContainer>
          <Code color={'#DAA1D6'} marginL={'30px'}>
            const
          </Code>
          <Code color={'white'} margin={'0px'}>
            reciever
          </Code>
          <Code margin={'3px'}> = [</Code>
          <div>
            {/* 인풋 넣어놓기 */}
            <UserInput
              type={'text'}
              placeholder={'받는 분의 이름을 입력하세요.'}
              size={inputValue.reciever ? inputValue.reciever.length * 1.8 : 22}
              name="reciever"
              value={inputValue.reciever}
              onChange={(e) => onValue(e)}
              mb={'0px'}
            />
          </div>
          <Code marginL={'5px'}>]</Code>
        </CodeContainer>

        {/* 제목 작성하기 */}
        <CodeContainer>
          <Code color={'#DAA1D6'} marginL={'30px'}>
            const
          </Code>
          <Code color={'white'} margin={'0px'}>
            title
          </Code>
          <Code margin={'3px'}> = [</Code>

          <UserInput
            type={'text'}
            placeholder={'제목을 입력해주세요.'}
            size={
              inputValue.title.length < 9
                ? 16
                : inputValue.title.length * 1.5 + 4
            }
            name="title"
            value={inputValue.title}
            onChange={(e) => onValue(e)}
            mb={'0px'}
          />

          <Code marginL={'1px'}>]</Code>
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
          <Code color={'white'} margin={'0px'} mb={'3px'}>
            e
          </Code>
          <Code marginL={'3px'}>) =&gt; {`{`}</Code>
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
          <Code color={'#DAA1D6'} marginL={'80px'}>
            const{' '}
          </Code>
          <Code color={'white'}>today</Code>
          <Code margin={'3px'} ls={'1px'}>
            = {`{ new Date( ) }`}
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

          <Code margin={'2px'} ls={'1px'} color={'#a83636'}>
            {/* 현재 유저 이름 적을것 */}
            {'DATA'}
          </Code>
          <Code margin={'2px'} ls={'1px'}>
            ]
          </Code>
        </CodeContainer>
        <CodeContainer>
          <Code color={'#69b0a9'} marginL={'80px'} margin={'0px'}>
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
          <Code marginL={'5px'} ls={'1px'}>{`FE40Letter()`}</Code>
        </CodeContainer>
      </WorkContainer>
    </Container>
  );
};
export default MainInput;

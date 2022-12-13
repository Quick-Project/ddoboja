import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Ddoboja from '../../icon/Ddoboja.png';
import GoodFe from '../../icon/GoodFe.png';
import axios from 'axios';
import { InputValue } from '../../states';
import { useRecoilState } from 'recoil';

const Progamers_Main = () => {
  const [isHovering, setIsHovering] = useState(1);
  const [inputValue, setInputValue] = useRecoilState(InputValue);
  const onValue = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Content_Container>
      <Top_Content>
        <Title> 편지 보내기 </Title>
        <Select>
          <option value=""> 쿠션어 </option>
        </Select>
      </Top_Content>
      <Middle_Content>
        <Problem_info>
          <p>문제 설명</p>
          <div className="expln">
            <p>
              이제 코드스테이츠 졸업을 앞둔 개발자 /이름props 은/는 큰 고민에
              빠졌다.
            </p>
            <p>
              그(녀)가 페어(또는 프로젝트 등) 활동 등을 통해 도움을 받은
              분들에게
            </p>
            <p>고마움을 표현하고 싶은데 방법을 찾지 못하고 있었기 때문이다.</p>
          </div>
          <div className="expln">
            <p>그런데 마침 스프린트에 중독된 6인의 개발자들이 만든</p>
            <ExplnImg
              width={'70px'}
              height={'40px'}
              src={isHovering ? GoodFe : Ddoboja}
              onMouseOver={() => setIsHovering(0)}
              onMouseOut={() => setIsHovering(1)}
            ></ExplnImg>
            <p>의 마음의 편지 보내기 프로젝트에 참석할 기회가 생겼다.</p>
          </div>
          <div className="expln">
            <p>
              이 기회에 고마웠던 사람들에게 편지를 쓰려고 마음 먹은 개발자
              /이름props 은/는
            </p>
            <p>편지를 쓰기 시작하는데...</p>
          </div>
          <div className="expln">
            <p>제한 사항</p>
            <ul>
              <StyleList>
                주어진 텍스트의 글자 수는 총 500자 수 (공백 포함)
              </StyleList>
              <StyleList>
                주어진 텍스트의 수를 넘어가면 편지를 보낼 수 없다.
              </StyleList>
              <StyleList>다른 사람이 쓴 편지는 볼 수 없다.</StyleList>
              <StyleList>전송한 편지는 수정 및 삭제가 불가능 하다.</StyleList>
            </ul>
          </div>
          <div className="expln">
            <p>입출력 예</p>
            <p>
              1. 우리 GoodFe Ddoboja 팀은 여러분들의 참여에 감사를 표하며, 수료
              후 뒤풀이에서 볼 수 있기를 희망합니다.
            </p>
            <p>
              2. 우리 GoodFe Ddoboja 팀은 이렇게 여러분들에게 프로젝트를 선보일
              수 있어서 정말 영광이며, (...) 그동안 고마
            </p>
            <p className="marginP">
              웠던 인연들에게 편지를 쓰러 들어와 주신 여러분들의 따듯한 마음에
              감동을 받았습니다. 총 6개월이라는 짧고
            </p>
            <p className="marginP">
              도 긴 기간 동안 즐겁게 지내주신 FE 여러분들 진심으로 존경합니다.
            </p>
          </div>
          <div className="expln">
            <p>입출력 예설명</p>
            <p>1. 공백 포함 총 67자 이기에 정상적인 전송이 이루어집니다.</p>
            <p>
              2. 공백 포함 총 515자 이기 때문에 정상적인 전송이 이루어지지
              않습니다. 글자 수를 줄여주세요
            </p>
          </div>
          <div className="expln">
            <p>힌트</p>
            <p>
              편지에 담긴 마음이 중요하기에 아무리 짧은 편지여도 당신의 진심이
              담긴 편지라면 편지를 받은 동기에게 큰 감동을 선사할 수 있으리라
              믿습니다.
            </p>
          </div>
        </Problem_info>
        <Right_Side>
          <Input_Wrap>
            <FileName> 편지.js </FileName>
            <Input_Body>
              <span className="yellow"> const FE40Letter( ) &#123; </span>
              <p className="oneTab">
                <span className="purple"> const </span>
                <span className="yellow"> reciever </span> = [
                <Input
                  width={'200px'}
                  placeholder="'받을 사람의 이름을 적어주세요'"
                />
                ]
              </p>
              <p className="oneTab">
                <span className="purple"> const </span>
                <span className="yellow"> title </span> = [
                <Input width={'130px'} placeholder="'제목을 적어주세요'" /> ]
              </p>
              <Content className="oneTab">
                <span className="purple"> const </span>
                <span className="yellow"> contents </span> =
                <textarea
                  placeholder="'내용을 적어주세요'"
                  value={inputValue.content}
                  onChange={(e) => onValue(e)}
                  name="content"
                />
              </Content>
              <p className="oneTab">
                <span className="purple"> const </span>
                <span className="yellow"> writer </span> = [
                <Input width={'80px'} placeholder="'본인 이름'" /> ]
              </p>
              <p className="oneTab">
                <span className="purple"> const </span>
                <span className="yellow"> date </span> = <span> new </span>
                <span className="green"> Date();</span>
              </p>
              <p className="yellow"> &#125; </p>
              <p className="oneTab">
                <span className="purple"> return </span>
                <span className="green"> FE40Letter(); </span>
              </p>
            </Input_Body>
          </Input_Wrap>
          <Result>
            <span> 실행 결과가 여기에 표시됩니다. </span>
          </Result>
        </Right_Side>
      </Middle_Content>
    </Content_Container>
  );
};
const Content_Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  min-height: 600px;
`;
const Top_Content = styled.div`
  display: flex;
  width: 100vw;
  height: 55px;
  background: rgb(30, 42, 54);
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid rgb(23, 29, 41);
  padding: 0px 20px 0px 20px;
`;
const Title = styled.span`
  font-size: 15px;
  color: white;
`;
const Select = styled.select`
  background: rgb(53, 68, 86);
  border-style: none;
  border-radius: 3px;
  color: white;
  height: 25px;
  width: 90px;
  text-align: center;
`;
const Middle_Content = styled.div`
  display: flex;
  height: 100%;
`;
const Input_Wrap = styled.div`
  width: 100%;
  height: 70vh;
`;
const Problem_info = styled.div`
  padding: 20px;
  border-right: 2px solid rgb(23, 29, 41);
  width: 40%;
  color: white;
  line-height: 150%;
  overflow: scroll;
  & .marginP {
    margin-left: 15px;
  }
  & .expln {
    margin: 10px 10px 10px 3px;
  }
`;
const Result = styled.div`
  padding: 20px;
  border-top: 2px solid rgb(23, 29, 41);
  color: gray;
`;

const Right_Side = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
`;

const Input_Body = styled.div`
  padding: 20px;

  .purple {
    color: rgb(179, 120, 221);
  }

  .yellow {
    color: rgb(229, 207, 47);
  }

  .green {
    color: rgb(55, 135, 61);
  }

  .oneTab {
    margin-left: 20px;
  }
`;

const FileName = styled.div`
  display: flex;
  color: white;
  align-items: center;
  width: 100%;
  height: 55px;
  padding-left: 20px;
  font-weight: bold;
  border-bottom: 2px solid rgb(23, 29, 41);
`;

const StyleList = styled.li`
  list-style: inside;
`;

const Input = styled.input`
  padding: 0px 10px;
  border-style: none;
  width: ${({ width }) => width || '150px'};
  height: ${({ height }) => height || '25px'};
  background: rgb(30, 42, 54);

  ::placeholder {
    color: rgb(229, 207, 47);
    text-align: center;
  }
`;

const Content = styled.p`
  display: flex;
  align-items: start;

  > span {
    margin-right: 4px;
  }
  > textarea {
    padding: 0px 10px 10px 10px;
    border-style: none;
    background: rgb(17, 21, 25);
    width: 600px;
    height: 300px;
    border-radius: 10px;
    ::placeholder {
      color: rgb(229, 207, 47);
    }
  }
`;
const ExplnImg = styled(Image)`
  :hover {
    animation: ease-in reverse;
  }
`;
export default Progamers_Main;

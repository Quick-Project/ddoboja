import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { letterData } from '../states';
import { useSetRecoilState } from 'recoil';
import { useRecoilValue } from 'recoil';
import { currentUser } from '../states';
import useGetname from './hook/useGetname';

const SearchBox = styled.div`
  flex: 1;
  display: flex;
  padding: 5px 8px 0 14px;
`;

const GlassContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 12px 5px 0px;
`;

const SearchBoxContainer = styled.div`
  display: flex;
  height: 44px;
  background: #fff;
  border: 1px solid #dfe1e5;
  border-bottom: ${({ hasText }) => {
    if (hasText) {
      return 'none';
    }
    return '1px solid #dfe1e5';
  }};
  box-shadow: ${({ hasText }) => {
    if (hasText) {
      return '0px 3px 10px -1px rgb(32 33 36 / 30%)';
    }
    return 'none';
  }};
  border-radius: ${({ hasText }) => {
    if (hasText) {
      return '24px 24px 0px 0px';
    }
    return '24px 24px 24px 24px';
  }};
  margin: 0 auto;
  width: 561px;
  max-width: 584px;
  &:hover {
    box-shadow: ${({ hasText }) => {
      if (hasText) {
        return '0px 3px 10px -1px rgb(32 33 36 / 30%)';
      }
      return '0 0 10px 1px rgb(32 33 36 / 20%)';
    }};
  }
`;

const SearchInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 403px;
  height: 34px;
  margin: 0;
  padding: 0;
  outline: none;
  border: none;

  > input {
    flex: 1 0 0;
    background-color: white;
    border: none;
    margin: 0;
    padding: 0;
    outline: none;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.87);
  }
`;

const SearchResult = styled.ul`
  z-index: 2;
  position: absolute;
  display: block;
  align-items: center;
  justify-content: left;
  background: #fff;
  border: 1px solid #dfe1e5;
  border-top: ${({ hasText }) => {
    if (hasText) {
      return 'none';
    }
    return '1px solid #dfe1e5';
  }};
  box-shadow: none;
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  margin: 0 auto;
  width: 561px;
  max-width: 584px;
  box-shadow: 0px 3px 10px -1px rgb(32 33 36 / 30%);
  padding: 0px 0px 20px 0px;
  color: black;

  :before {
    content: '';
    display: block;
    margin: 0 auto;
    width: 95%;
    border-top: 1px solid #dfe1e5;
  }

  > li {
    display: flex;
    align-items: center;
    justify-content: left;
    padding: 0 1rem;
    height: 33px;

    font-size: 16px;
    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }
  }
`;

const Search = () => {
  const [hasText, setHasText] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [userResult, setUserResult] = useState([]);
  const setLetter = useSetRecoilState(letterData);
  const currentName = useGetname();

  useEffect(() => {
    if (inputValue === '') {
      setHasText(false);
    }
  }, [inputValue]);

  const handleInputChange = async (e) => {
    setInputValue(e.target.value);
    setHasText(true);
    let { data } = await axios.get('api/feuser/get');
    data = data.map((value) => value.name);
    setUserResult(data.filter((value) => value.includes(e.target.value)));
  };

  const nameClick = (clickedOption) => {
    setInputValue(clickedOption);
    callLetterData();
    setUserResult([clickedOption]);
  };

  const router = useRouter();

  const nameCheck = (searchName) => {
    if (searchName === currentName) {
      return true;
    } else {
      return false;
    }
  };

  const searchFunc = async (e) => {
    if (e.key === 'Enter') {
      const checkName = nameCheck(inputValue);
      if (checkName) {
        await callLetterData();
      } else {
        alert('편지 내용은 본인 이름만 검색 가능합니다.');
        setInputValue('');
        return;
      }
    }
  };

  const callLetterData = async (e) => {
    try {
      const data = await axios.get(`api/letter/${inputValue}`);
      setLetter(data.data);
      router.push('/resultpage');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <SearchBoxContainer hasText={hasText}>
        <SearchBox>
          <GlassContainer>
            <svg
              width="20"
              height="20"
              focusable="false"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -2 24 24"
              fill="gray"
            >
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
            </svg>
          </GlassContainer>
          <SearchInput hasText={hasText}>
            <input
              placeholder="이름 검색"
              onChange={handleInputChange}
              value={inputValue}
              onKeyDown={(e) => searchFunc(e)}
            ></input>
          </SearchInput>
        </SearchBox>
      </SearchBoxContainer>
      {hasText ? (
        <SearchResult
          userResult={userResult}
          nameClick={nameClick}
          hasText={hasText}
        >
          {' '}
          {userResult.map((el, idx) => (
            <li role="presentation" key={idx} onClick={() => nameClick(el)}>
              <GlassContainer>
                <svg
                  width="20"
                  height="20"
                  focusable="false"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -3 24 24"
                  fill="gray"
                >
                  <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                </svg>
              </GlassContainer>
              {el}
            </li>
          ))}
        </SearchResult>
      ) : null}
    </div>
  );
};

export default Search;

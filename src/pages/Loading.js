import React, { useState, useEffect } from "react";
import styled from "styled-components";
import StyledBtn from "../components/StyledBtn";
import { HashLoader } from "react-spinners";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

const S = {
  Container: styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    background-color: black;
    flex-direction: column;
    align-items: center;
  `,
  Wrapper: styled.div`
    display: flex;
    height: 100vh;
    width: 80%;
    //간단 모바일웹
    @media all and (max-width: 767px) {
      width: 100%;
    }
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: black;
  `,
  Contents: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 80vh;
    width: 100%;
  `,
  Title: styled.div`
    width: 100%;
    padding-inline: 10%;
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    color: white;
    margin-top: 2rem;
    margin-bottom: 5rem;
  `,
};

const Loading = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");
  const handleClickButton = () => {
    navigate({
      pathname: "/result",
      search: `?${createSearchParams({
        type: type,
      })}`,
    });
  };
  const [Loading, isLoading] = useState(true);

  useEffect(() => {
    let timer = setTimeout(() => {
      isLoading(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <S.Container>
      <S.Wrapper>
        <S.Contents>
          {Loading ? (
            <>
              <S.Title>당신에게 맞는 노트북을 찾고 있습니다.</S.Title>
              <HashLoader color="white" />
            </>
          ) : (
            <>
              <S.Title>당신에게 맞는 노트북을 찾았습니다.</S.Title>
              <StyledBtn onclick={handleClickButton} msg={"결과보기"} />
            </>
          )}
        </S.Contents>
      </S.Wrapper>
    </S.Container>
  );
};

export default Loading;

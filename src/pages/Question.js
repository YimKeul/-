import React, { useState } from "react";
import styled from "styled-components";
// import { Slide, Fade } from "react-awesome-reveal";
import { ProgressBar, Button } from "react-bootstrap";
import { QuestionData } from "../assets/data/questiondata";
import { createSearchParams, useNavigate } from "react-router-dom";

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
    width: 45%;
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

const Question = () => {
  const [questionNo, setQuestionNo] = useState(0);
  const navigate = useNavigate();

  const [totalScore, setTotalScore] = useState([
    { id: "MA", score: 0 },
    { id: "GD", score: 0 },
    { id: "IH", score: 0 },
    { id: "CS", score: 0 },
  ]);

  const handleClickAnswer = (add, type) => {
    const newScore = totalScore.map((s) =>
      s.id === type ? { id: s.id, score: s.score + add } : s
    );
    setTotalScore(newScore);
    if (QuestionData.length !== questionNo + 1) {
      setQuestionNo(questionNo + 1);
    } else {
      const type = newScore.reduce(
        (acc, curr) =>
          acc +
          (curr.score >= 0 ? curr.id.substring(0, 1) : curr.id.substring(1, 2)),
        ""
      );
      navigate({
        pathname: "/loading",
        search: `?${createSearchParams({
          type: type,
        })}`,
      });
    }
  };

  return (
    <S.Container>
      {/* <Fade direction="up" duration={1000} style={{ background: "blue" }}> */}
      <S.Wrapper>
        <ProgressBar
          now={(questionNo / QuestionData.length) * 100}
          style={{
            width: "80%",
            marginTop: 20,
          }}
        />
        <S.Contents>
          <S.Title>{QuestionData[questionNo].title}</S.Title>
          <ButtonGroup>
            <Button
              variant="primary"
              onClick={() =>
                handleClickAnswer(1, QuestionData[questionNo].type)
              }
              style={{
                width: "40%",
                minHeight: "200px",
                fontSize: "15pt",
                fontWeight: 700,
              }}
            >
              {QuestionData[questionNo].answera}
            </Button>
            <Button
              variant="primary"
              onClick={() =>
                handleClickAnswer(-1, QuestionData[questionNo].type)
              }
              style={{
                width: "40%",
                marginLeft: "20px",
                minHeight: "200px",
                fontSize: "15pt",
                fontWeight: 700,
              }}
            >
              {QuestionData[questionNo].answerb}
            </Button>
          </ButtonGroup>
        </S.Contents>
      </S.Wrapper>
      {/* </Fade> */}
    </S.Container>
  );
};

export default Question;

const ButtonGroup = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

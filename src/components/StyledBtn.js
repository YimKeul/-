import React from "react";
import styled from "styled-components";

const S = {
  Wrapper: styled.div`
    width: 220px;
    background: ${(props) => props.backgrond || "#3d79f2"};
    font-size: 25pt;
    font-weight: 700;
    color: white;
    text-align: center;
    padding: 3px;
    border-radius: 15px;
    cursor: pointer;
    /* box-shadow: 0pt 3pt 1pt #dedede; */
  `,
};

function StyledBtn({ msg, onclick, backgrond }) {
  return (
    <S.Wrapper onClick={onclick} backgrond={backgrond}>
      {msg}
    </S.Wrapper>
  );
}

export default StyledBtn;

import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
const { Kakao } = window;

const CustomBtnStyle = {
  width: 220,
  fontSize: "25px",
  color: "white",
  fontWeight: 700,
  marginBlock: 10,
};

const KakaoShareButton = ({ data }) => {
  const url = "https://whataboutthis.netlify.app/";
  const resultUrl = window.location.href;

  useEffect(() => {
    Kakao.init("a35958150ee7261fc42d480a03af3461");
  }, []);

  const shareKakao = () => {
    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "💻 노트북 추천 결과",
        description: `당신에게 ${data.name}을(를) 추천합니다.`,
        imageUrl: url + data.image,
        link: {
          mobileWebUrl: resultUrl,
          webUrl: resultUrl,
        },
      },
      buttons: [
        {
          title: "나도 테스트하러가기",
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
      ],
    });
  };

  return (
    <Button onClick={shareKakao} variant="warning" style={CustomBtnStyle}>
      카카오톡 공유하기
    </Button>
  );
};

export default KakaoShareButton;

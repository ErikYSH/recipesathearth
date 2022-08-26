import React from "react";
import styled from "styled-components";

export function DetailRecipe() {
  return (
    <ComponentRoot>
      <Element1>
        <WhiteFlexColumn>
          <HBOLD>
            HOMEMADE
          </HBOLD>
          <Element2>
            <HREGULAR>POP TART</HREGULAR>
            <Black src={`https://file.rendit.io/n/Xeo4Rm1XBC4pegOUrCV1.png`} />
          </Element2>
        </WhiteFlexColumn>
        <WhiteFlexRow>
          <Arrowdown
            src={`https://file.rendit.io/n/r2vMkXJ12e085YmJ3OdS.svg`}
          />
        </WhiteFlexRow>
        <WhiteRectangle />

        <Paragraph>
          total prep time: 45 Minutes
          <br />
          total bake time: 30 Minutes
          <br />
          servings: 9
        </Paragraph>
        <Text1>ADD TO FAVORITES</Text1>
        <Text2>BREAKFAST</Text2>
        <Image1 src={`https://file.rendit.io/n/8kaaD9xSHtNSnQxwWoR7.svg`} />
        <ScreenShotAt
          src={`https://file.rendit.io/n/960wUvSlcSCCT95jSoAt.png`}
        />
      </Element1>
      <Line1 src={`https://file.rendit.io/n/RM1yK8AVFLfNAaGlLx0K.svg`} />
    </ComponentRoot>
  );
}
const Line2 = styled.img`
  width: 159px;
  height: 0.5px;
  position: absolute;
  left: 548px;
  top: ${(props) => props.top};
`;
const ComponentRoot = styled.div`
  width: 1414px;
  height: 480px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 47px;
  align-items: center;
`;
const Element1 = styled.div`
  height: 395px;
  position: relative;
  min-width: 1414px;
`;
const WhiteFlexColumn = styled.div`
//   border-color: #e4e0d8;
//   border-style: solid;
  height: 91px;
  background-color: #ffffff;
  display: flex;
  position: absolute;
  top: 6px;
  left: 703px;
  flex-direction: column;
  justify-content: flex-start;
  gap: 11px;
  align-items: center;
  padding: 0px 26px 0px 3px;
  border-width: 1px;
`;
const HBOLD = styled.div`
  width: 251px;
  height: 25px;
  font-size: 40px;
  font-family: Inter;
  white-space: pre-wrap;
`;
const Element2 = styled.div`
  height: 39px;
  position: relative;
  min-width: 251px;
`;
const HREGULAR = styled.div`
  width: 209.68px;
  height: 31.98px;
  font-size: 40px;
  font-family: Inter;
  position: absolute;
`;
const Black = styled.img`
  width: 1px;
  height: 29px;
  mix-blend-mode: multiply;
  position: absolute;
  top: 10px;
  left: 201px;
`;
const WhiteFlexRow = styled.div`
//   border-color: #e4e0d8;
//   border-style: solid;
  width: 174px;
  background-color: #ffffff;
  display: flex;
  position: absolute;
  top: 136px;
  left: 705px;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 10px 11px 5px 11px;
  border-width: 1px;
`;
const Arrowdown = styled.img`
  width: 16px;
  height: 16px;
`;
const WhiteRectangle = styled.div`
//   border-color: #e4e0d8;
//   border-style: solid;
  width: 216px;
  height: 60px;
  background-color: #ffffff;
  position: absolute;
  top: 173px;
  left: 705px;
  border-width: 1px;
`;
const Line = styled.img`
  width: 1414px;
  height: 1px;
  position: absolute;
  top: -38px;
`;
const Paragraph = styled.div`
  width: 243px;
  height: 58px;
  font-size: 16px;
  font-family: Inter;
  color: #1e1e1e;
  position: absolute;
  top: 175px;
  left: 707px;
`;
const Text1 = styled.div`
  width: 195px;
  height: 25px;
  font-size: 16px;
  font-family: Inter;
  color: #1e1e1e;
  position: absolute;
  top: 308px;
  left: 722px;
`;
const Text2 = styled.div`
  width: 180px;
  height: 24px;
  font-size: 28px;
  font-family: Inter;
  font-weight: 700;
  color: #1e1e1e;
  position: absolute;
  top: 136px;
  left: 707px;
`;
const Bookmark = styled.img`
  width: 21.15px;
  height: 21.15px;
  position: absolute;
  top: 279.6px;
  left: 1279.85px;
`;
const Image1 = styled.img`
  width: 12px;
  height: 16px;
  position: absolute;
  top: 308px;
  left: 707px;
`;
const ScreenShotAt = styled.img`
  width: 583px;
  height: 395px;
  position: absolute;
`;
const Line1 = styled.img`
  width: 1414px;
  height: 1px;
`;

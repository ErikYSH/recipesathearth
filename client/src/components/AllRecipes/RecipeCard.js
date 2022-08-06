import React from 'react'
import{useState} from 'react'
import styled from 'styled-components'

export default function RecipeCard() {

  //useState, useEffect
  const [frame, useFrame]=useState([])


  return (
    <>
    <FrameRoot>
      <FlexRow>
        <Element1>
          <CARDBACKGROUND>
            <CARD>
              <RECIPEIMAGE
                src={`https://file.rendit.io/n/L00ga2Zg07eSC1LJeKjb.png`}
              />
              <RECIPECATEGORY>
                <Text1>BREAKFAST</Text1>
              </RECIPECATEGORY>
              <RECIPETITLE>
                <FlexColumn>
                  <HREGULAR> HOMEMADE POP TART</HREGULAR>
                </FlexColumn>
              </RECIPETITLE>
            </CARD>
          </CARDBACKGROUND>
        </Element1>
        <Element1>
          <CARDBACKGROUND>
            <CARD>
              <RECIPEIMAGE
                src={`https://file.rendit.io/n/L00ga2Zg07eSC1LJeKjb.png`}
              />
              <RECIPECATEGORY>
                <Text1>BREAKFAST</Text1>
              </RECIPECATEGORY>
              <RECIPETITLE>
                <FlexColumn>
                  <HREGULAR> HOMEMADE POP TART</HREGULAR>
                </FlexColumn>
              </RECIPETITLE>
            </CARD>
          </CARDBACKGROUND>
        </Element1>

        <Element1>
          <CARDBACKGROUND>
            <CARD>
              <RECIPEIMAGE
                src={`https://file.rendit.io/n/L00ga2Zg07eSC1LJeKjb.png`}
              />
              <RECIPECATEGORY>
                <Text1>BREAKFAST</Text1>
              </RECIPECATEGORY>
              <RECIPETITLE>
                <FlexColumn>
                  <HREGULAR> HOMEMADE POP TART</HREGULAR>
                </FlexColumn>
              </RECIPETITLE>
            </CARD>
          </CARDBACKGROUND>
        </Element1>
        <Element1>
          <CARDBACKGROUND>
            <CARD>
              <RECIPEIMAGE
                src={`https://file.rendit.io/n/L00ga2Zg07eSC1LJeKjb.png`}
              />
              <RECIPECATEGORY>
                <Text1>BREAKFAST</Text1>
              </RECIPECATEGORY>
              <RECIPETITLE>
                <FlexColumn>
                  <HREGULAR> HOMEMADE POP TART</HREGULAR>
                </FlexColumn>
              </RECIPETITLE>
            </CARD>
          </CARDBACKGROUND>
        </Element1>
      </FlexRow>
    </FrameRoot>
    </>
  )
}
const FrameRoot = styled.div`
display:grid;
grid-template-columns:repeat(3, 1fr);
grid-gap: 10px
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-top:1%;
  margin-buttom: 1%
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 3%;

`;
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: flex-start;
  align-items: flex-start;
`;
const Element1 = styled.div`
  width: 350px;
  height: 400.88px;
  position: relative;
`;
const CARDBACKGROUND = styled.div`

  height: 400.88px;
  background-image: url("https://file.rendit.io/n/fEhPKlageUe8wrKk2R3u.svg");
  background-size: cover;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0px 11.24px 0px 0px;

`;
const CARD = styled.div`
  height: 390.02px;
  background-image: url("https://file.rendit.io/n/SbOty8tx8RL80lVEDw2a.svg");
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 4.98px 8.9px 4.98px 9.25px;

`;
const RECIPEIMAGE = styled.img`
  width: 249.84px;
  height: 169.2px;
  margin: 0px 4.31px 22.58px 5px;
`;
const RECIPECATEGORY = styled.div`
  width: 92.89px;
  height: 22.51px;
  align-self: flex-start;
  position: relative;
  margin: 0px 0px 3.82px 1.26px;
`;
const Text1 = styled.div`
  width: 92.4px;
  height: 22.51px;
  font-size: 12px;
  font-family: Inter;
  color: #1e1e1e;
  position: absolute;
  left: 0.49px;
`;
const Line = styled.img`
  width: 10.51px;
  height: 0.5px;
  position: absolute;
  top: 18.11px;
  left: -10.51px;
`;
const RECIPETITLE = styled.div`
  width: 259.44px;
  height: 84.6px;
  align-self: center;
  position: relative;
  margin: 0px 0px 5.07px 0px;
`;
const FlexColumn = styled.div`
  border-color: #000000;
  border-style: solid;
  height: 64px;
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 9.55px 43.7px 9.55px 4.21px;
  border-width: 0.75px;
`;
const HREGULAR = styled.div`
  justify-content: start; 
  width: 209.68px;
  height: 31.98px;
  font-size: 14px;
//make it responcive 
  font-family: Inter;
`;
const HBOLD = styled.div`
  width: 254.69px;
  height: 31.98px;
  font-size: 24px;
  font-family: Inter;
  position: absolute;
  top: 10.67px;
  left: 4.75px;
  white-space: pre-wrap;
`;


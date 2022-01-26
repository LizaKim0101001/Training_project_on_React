import styled from "styled-components";
import {Section, Li, Ul} from '/src/styled'

export const StyledSection = styled(Section)`
  flex-direction: column;
  align-items: center;
`;


export const StyledUl = styled(Ul)`
 list-style: none;
  margin: 0;
  padding: 0;
  margin-top: 44px;
  margin-bottom: 64px;
  margin-left: -20px;
  font-size: 0;
  line-height: 0;
  text-align: center;
`;

export const StyledLi = styled(Li)`
  display: inline-block;
  margin-left: 20px;
  margin-top: 20px;
  font-size: 18px;
  line-height: 27px;
  vertical-align: top;
  text-align: left;
  overflow: hidden;
  `


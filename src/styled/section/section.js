import styled from "styled-components";

const Section = styled.section`
  position: relative;
  display: flex;
  padding-left: ${(props) => props.theme.pagePadding};
  padding-right: ${(props) => props.theme.pagePadding};
  padding-top: 100px;
  padding-bottom: 100px;
  box-sizing: border-box;
`;

export default Section;

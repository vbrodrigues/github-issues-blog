import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme["base-post"]};
  height: 18.5rem;
  margin: 0 auto;
  width: 100%;
`;

export const HeaderContent = styled.div`
  img {
    margin-bottom: 4.375rem;
  }
`;

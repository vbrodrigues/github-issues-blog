import styled from "styled-components";

export const PostContainer = styled.div`
  width: 71.25rem;
  display: flex;
  flex-direction: column;
  margin-top: -5.5rem;
`;

export const PostInfo = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;

  background: ${(props) => props.theme["base-profile"]};
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  img {
    height: 9.25rem;
    border-radius: 8px;
  }
`;

export const PostInfoHeader = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    display: flex;
    gap: 0.5rem;
    color: ${(props) => props.theme["blue-500"]};
  }

  a {
    text-decoration: none;
  }

  button {
    background: 0;
    border: 0;
    color: ${(props) => props.theme["blue-500"]};
    display: flex;
    gap: 0.5rem;
    align-items: center;
    cursor: pointer;
    font-size: 0.75rem;
    font-weight: bold;
  }
`;

export const PostTitle = styled.div``;

export const PostInfoFooter = styled.div`
  display: flex;
  gap: 1.5rem;

  span {
    display: flex;
    gap: 0.5rem;
    align-items: center;

    color: ${(props) => props.theme["base-subtitle"]};

    svg {
      color: ${(props) => props.theme["base-span"]};
    }
  }
`;

export const PostContent = styled.div`
  padding: 2.5rem;
  color: ${(props) => props.theme["base-text"]};
  line-height: 160%;
  font-size: 1rem;
`;

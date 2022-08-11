import styled from "styled-components";

export const PostCardContainer = styled.div`
  border: 2px solid ${(props) => props.theme["base-post"]};
  background: ${(props) => props.theme["base-post"]};
  color: ${(props) => props.theme["base-title"]};
  border-radius: 10px;
  max-height: 16.25rem;

  div {
    margin: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    overflow: hidden;
    max-height: 12.5rem;

    p {
      color: ${(props) => props.theme["base-text"]};
    }

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;

      span {
        font-size: 0.875rem;
        color: ${(props) => props.theme["base-span"]};
      }
    }
  }

  &:hover {
    cursor: pointer;
    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
    border: 2px solid ${(props) => props.theme["base-border"]};
    transition: box-shadow 0.2s;
  }
`;

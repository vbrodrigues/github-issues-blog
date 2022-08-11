import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -5.5rem;
  max-width: 71.25rem;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 4.5rem;
  gap: 0.75rem;
`;

export const SearchHeader = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    color: ${(props) => props.theme["base-span"]};
    font-size: 0.875rem;
  }
`;

export const SearchForm = styled.form`
  input {
    width: 100%;
    padding: 0.75rem 1rem;
    height: 3.125rem;

    background: ${(props) => props.theme["base-input"]};
    border: 1px solid ${(props) => props.theme["base-border"]};
    border-radius: 6px;

    color: ${(props) => props.theme["base-text"]};

    &::placeholder {
      color: ${(props) => props.theme["base-label"]};
    }

    &:focus {
      border: 1px solid ${(props) => props.theme["blue-500"]};
    }
  }
`;

export const Feed = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 3rem;
`;

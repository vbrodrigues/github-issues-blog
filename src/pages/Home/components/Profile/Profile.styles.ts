import styled from "styled-components";

export const ProfileContainer = styled.div`
  padding: 2rem;
  display: flex;
  gap: 2rem;
  max-height: 13.25rem;
  width: 100%;

  background: ${(props) => props.theme["base-profile"]};
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  img {
    height: 9.25rem;
    border-radius: 8px;
  }
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const ProfileHeader = styled.div`
  display: flex;
  justify-content: space-between;

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

export const ProfileContent = styled.div`
  margin-top: 0.5rem;
  color: ${(props) => props.theme["base-text"]};
  font-size: 1rem;
`;

export const ProfileFooter = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
  justify-self: flex-end;

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

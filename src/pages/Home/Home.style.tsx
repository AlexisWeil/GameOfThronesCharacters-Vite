import styled from 'styled-components';

export const HomeWrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > p {
    font-size: 1.2em;
  }

  & > a {
    margin-top: 3em;
  }
`;

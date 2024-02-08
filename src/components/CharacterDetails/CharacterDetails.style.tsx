import styled from 'styled-components';
import { Avatar } from '../Avatar/Avatar.tsx';

export const CharacterDetailsWrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > h1 {
    margin: 0.5em 0;
  }

  & > ${Avatar} {
    margin-bottom: 2em;
  }
`;

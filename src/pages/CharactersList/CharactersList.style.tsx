import styled from 'styled-components';
import { Avatar } from '../../components/Avatar/Avatar.tsx';

export const List = styled.ul`
  list-style-type: none;
`;

export const CharacterListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 1em;
  cursor: pointer;

  & > ${Avatar} {
    margin-right: 2vw;
  }

  & > b {
    margin-left: 2vw;
  }
`;

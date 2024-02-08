import styled from 'styled-components';
import { colors } from '../../globals/colors.ts';

export const CharacterDetailsPageWrapper = styled.article`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > a {
    margin-top: 3em;
  }
`;

export const NoCharacter = styled.div`
  font-size: 2em;
  color: ${colors.red};
`;

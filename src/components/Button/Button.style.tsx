import styled from 'styled-components';
import { colors } from '../../globals/colors.ts';

export const ButtonWrapper = styled.button`
  height: 3em;
  font-family: 'Nunito', sans-serif;
  font-size: 1em;
  color: white;
  background-color: ${colors.red};
  border-radius: 3em;
  border: none;
  outline: none;
  padding: 0 2em;
  box-sizing: border-box;
  align-self: center;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${colors.darkRed};
  }
`;

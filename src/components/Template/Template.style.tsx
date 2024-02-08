import styled from 'styled-components';
import { colors } from '../../globals/colors.ts';

export const TemplateWrapper = styled.div`
  min-height: 100vh;
  color: ${colors.light};
  background-color: ${colors.dark};
  display: flex;
  flex-direction: column;
`;

export const Content = styled.article`
  width: 100%;
  max-width: 1000px;
  padding: 0 1em;
  margin: 0 auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Footer = styled.footer`
  text-align: center;
  font-size: 0.8em;
  padding: 1em;
`;

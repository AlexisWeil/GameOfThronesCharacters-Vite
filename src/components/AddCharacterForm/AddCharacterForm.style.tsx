import styled from 'styled-components';

export const AddCharacterFormWrapper = styled.article`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin: 1em auto;

  & > button {
    margin-top: 1em;
  }
`;

export const FormLine = styled.div`
  margin-bottom: 0.5em;
  display: flex;
  align-items: center;

  & > span {
    flex: 1;
  }

  & > input {
    width: 50%;
    max-width: 300px;
    height: 2.4em;
    line-height: 1.6em;
    font-family: 'Nunito', sans-serif;
    border: none;
    border-radius: 2em;
    box-sizing: border-box;
    padding: 0.2em 1em;
    outline: none;
  }
`;

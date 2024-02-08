import styled from 'styled-components';

export const AvatarWrapper = styled.img<{ size: 'SMALL' | 'BIG' }>`
  width: ${(props) => (props.size === 'SMALL' ? '10vw' : '20vw')};
  height: ${(props) => (props.size === 'SMALL' ? '10vw' : '20vw')};
  border-radius: ${(props) => (props.size === 'SMALL' ? '10vw' : '20vw')};
  object-fit: cover;
`;

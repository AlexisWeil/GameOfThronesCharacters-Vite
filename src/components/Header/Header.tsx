import { HeaderWrapper } from './Header.style.tsx';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <HeaderWrapper>
      <Link to="/">Home</Link>
    </HeaderWrapper>
  );
};

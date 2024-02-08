import { Link } from 'react-router-dom';
import { Title } from '../../components/Title/Title.tsx';
import { HomeWrapper } from './Home.style.tsx';

export const Home = () => {
  return (
    <HomeWrapper>
      <Title>Game of Thrones Characters</Title>

      <p>List of all Game of Thrones characters</p>

      <Link to="/characters">Go to list</Link>
    </HomeWrapper>
  );
};

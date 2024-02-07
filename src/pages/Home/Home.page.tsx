import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <>
      <h1>Game of Thrones Characters</h1>

      <p>List of all Game of Thrones characters</p>

      <Link to="/characters">Go to list</Link>
    </>
  );
};

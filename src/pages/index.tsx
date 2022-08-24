import { NextPage } from 'next';
import PageHead from '../containers/PageHead';
import Navbar from '../containers/Navbar/Navbar';
import Login from 'src/pages/login';

const Home: NextPage = () => (
  <>
    <PageHead />
    <Navbar />
    <Login />
  </>
);

export default Home;

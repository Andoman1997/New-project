import { NextPage } from 'next';
import PageHead from '../containers/PageHead';
import Navbar from '../containers/Navbar/Navbar';

const Home: NextPage = () => (
  <>
    <PageHead />
    <Navbar />
  </>
);

export default Home;

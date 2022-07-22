import { NextPage } from 'next';
import PageHead from '../containers/PageHead';
import Header from '../containers/Navbar';

const Home: NextPage = () => (
  <>
    <PageHead />
    <Header />
  </>
);

export default Home;

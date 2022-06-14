import type { NextPage } from 'next'
import PageHead from "../src/components/PageHead";
import Header from "../src/components/containers/Header/Header";

const Home: NextPage = () => {
  return (
    <>
        <PageHead/>
        <Header/>
    </>
  )
}

export default Home

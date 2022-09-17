import React from 'react'
import {Header, HouseList, Filter} from '../components';
const Home = () => {
  return <main className='min-h-[1000px]'>
    <Header />
    <Filter />
    <HouseList />
  </main>
}

export default Home
import React from 'react'
import Main from './main';
import Navbar from './navbar';
import Form from './form';


const Home2 = () => {
  return (
    <div className='h-screen flex justify-between items-center  bg-[#ffe4c4]'>
      <div className='w-[5%]' >
        <Navbar />
      </div>
      <div className='w-[75%]' >
        <Main />
      </div>
      <div className='w-[20%]' >
        <Form />
      </div>
      </div>
  )
}

export default Home2;
import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import CardList from '../../components/CardList/CardList'
import Footer from '../../components/Footer/Footer'

interface Props  {}

const HomePage = (props: Props) => {
  return (
        <>
        
            <div className='col mt-5'>
            <CardList />
            </div>
        
        </>


  

  )
}

export default HomePage
import React, { useEffect } from 'react'
import './LeftStart.scss'
import { useDispatch } from 'react-redux'
import { Hamburger, Header, Footer, Center } from './leftComponent'
import changePage from '../redux/actions/PageAction'
import { ChangePageAction } from '../../interface/Interface'

const LeftStart: React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(changePage('home') as ChangePageAction)
  }, [dispatch])
  return (
    <div className="container">
      <div className="left">
        <Hamburger />
        <div className="leftContainer">
          <Header />
          <Center />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default LeftStart

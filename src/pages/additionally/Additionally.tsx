import React from 'react'
import './Additionally.scss'
import { useSelector } from 'react-redux'
import { Hamburger, Header } from 'components/leftWrapper/leftComponent'
import BreadCramb from 'components/maps/breadCramb/BreadCramb'
import Order from '../../components/maps/order/Order'
import { selectActiveCar } from '../../components/cars/selectors'
import { AdditionallyMain } from '../../components/additionallyPath/index'

const Additionally: React.FC = () => {
  const activeCar = useSelector(selectActiveCar)
  const currentPages = 'additionally'
  return (
    <div className="additionallyContainer">
      <div className="additionallyWrapper">
        <div className="setHeader">
          <Header />
        </div>
        <BreadCramb />
        <div className="wrapperCenterAdditionally">
          <div className="settingCenterAdditionally">
            <AdditionallyMain />
          </div>
          <Order activeCar={activeCar} currentPages={currentPages} />
        </div>
      </div>
      <div className="hmContainerAdditionally">
        <Hamburger currentPages={currentPages} />
      </div>
    </div>
  )
}

export default Additionally

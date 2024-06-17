/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectActiveCar } from '../../cars/selectors'
import { selectLocation, selectRentalDate } from '../order/selectorsOrder'
import {
  selectActivePointColor,
  selectActivePointRate,
} from '../../additionallyPath/selectors'

const useBreadcrumbHelpers = (breadMap: any) => {
  const { city, point } = useSelector(selectLocation)
  const activeCar = useSelector(selectActiveCar)
  const { any, red, blue } = useSelector(selectActivePointColor)
  const { everyMinute, forADay } = useSelector(selectActivePointRate)
  const { start, end } = useSelector(selectRentalDate)
  const location = useLocation()

  const cityAndPoint = city.length > 0 && point.length > 0
  const color = any || red || blue
  const rate = everyMinute || forADay
  const startEnd = start.length > 0 && end.length > 0

  const getLinkTo = (crumb: { to: string }) => {
    if (crumb.to === '/ModelCar' && !cityAndPoint) {
      return '/LocationPage'
    }

    if (crumb.to === '/Additionally' && activeCar.name.length === 0) {
      return '/ModelCar'
    }
    if (crumb.to === '/Total' && !color && !rate && !startEnd) {
      return '/Additionally'
    }

    return crumb.to
  }

  const passedFlags = breadMap.map(
    (crumb: { to: string }, index: number) =>
      index <
      breadMap.findIndex((c: { to: string }) => c.to === location.pathname),
  )

  const colorClass = (index: number) => {
    let breadCrumbClass = 'breadIcon'
    if (location.pathname === breadMap[index].to) {
      breadCrumbClass += ' active'
    } else if (passedFlags[index]) {
      breadCrumbClass += ' passed'
    } else {
      breadCrumbClass += ' next'
    }
    return breadCrumbClass
  }

  return { getLinkTo, colorClass }
}

export default useBreadcrumbHelpers

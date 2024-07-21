/* eslint-disable @typescript-eslint/no-explicit-any */
import { EPath, RouteData } from 'interface/Interface'

export const calculater = (
  startDatePrice: Date,
  endDatePrice: Date,
  activeOptions: any,
  activePointRate: any,
) => {
  const timeDifferenceMs = endDatePrice.getTime() - startDatePrice.getTime()
  let totalPrice = 0

  if (activePointRate.forADay) {
    const hours = timeDifferenceMs / (1000 * 60 * 60)
    const days = hours < 12 ? 1 : Math.ceil(hours / 24)
    totalPrice += days * 1999
  }
  if (activePointRate.everyMinute) {
    const minutes = Math.ceil(timeDifferenceMs / (1000 * 60))
    totalPrice += minutes * 7
  }
  if (activeOptions.tank) {
    totalPrice += 500
  }
  if (activeOptions.seat) {
    totalPrice += 200
  }
  if (activeOptions.wheel) {
    totalPrice += 1600
  }

  return totalPrice
}

export const calculaterDay = (
  startDate: Date,
  endDate: Date,
): { differenceInDays: number; differenceInHours: number } => {
  if (!startDate?.getTime() || !endDate?.getTime()) {
    return { differenceInDays: 0, differenceInHours: 0 }
  }
  const differenceInTime = endDate.getTime() - startDate.getTime()
  const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24))
  const remainingMilliseconds = differenceInTime % (1000 * 3600 * 24)
  const differenceInHours = Math.floor(remainingMilliseconds / (1000 * 3600))

  return { differenceInDays, differenceInHours }
}

export const nextPathLoc = (
  data: RouteData,
): { nextPath: string; isActive: boolean } => {
  const { pathname, cityAndPoint, activeCarConst, startEnd, color, rate } = data

  let nextPath = EPath['/']
  let isActive = false
  if (pathname === '/LocationPage' && cityAndPoint) {
    isActive = true
    nextPath = EPath['/LocationPage']
  }
  if (pathname === '/ModelCar' && cityAndPoint && activeCarConst) {
    isActive = true
    nextPath = EPath['/ModelCar']
  }
  if (
    pathname === '/Additionally' &&
    cityAndPoint &&
    activeCarConst &&
    startEnd &&
    color &&
    rate
  ) {
    isActive = true
    nextPath = EPath['/Additionally']
  }
  if (pathname === '/Total') {
    nextPath = EPath['/Additionally']
    isActive = true
  }

  return { nextPath, isActive }
}

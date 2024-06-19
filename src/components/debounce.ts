/* eslint-disable @typescript-eslint/no-explicit-any */
const debounce = <T extends (...args: any[]) => any>(
  func: T,
  delay: number,
): T => {
  let timer: NodeJS.Timeout | null = null
  return (...args: any[]): any => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func(...args)
    }, delay)
  }
}

export default debounce

export const useCalculate = () => {
    const add = (a: number, b: number) => {
      return a + b
    }
  
    const subtract = (a: number, b: number) => {
      return a - b
    }
  
    return {
      add,
      subtract
    }
  }
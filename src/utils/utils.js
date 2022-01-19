// import { clear, time } from 'console'
import { useEffect, useState } from 'react'

// export const isFalsy = (value) => value === 0 ? true : !!value
// eslint-disable-next-line no-undef
export const isFalsy = (value) => value === 0 ? false : !value
// unknown 类似any， 但是比any更严格
// isFalsy(1)
// isFalsy({})
// isFalsy([])
export const cleanObject = (object) => {
  // 在函数里，改变传入的对象本身是不好的 object.name = 123
  const result = { ...object }
  Object.keys(result).forEach(key => {
    const value = result[key]
    if (isFalsy(value)) {
      delete result[key]
    }
  })
  return result
}

let debounce = function( fn , delay ){
  let timeout;
  
  return (...params)=>{
    if(timeout){
      clearTimeout(timeout)
    }
    timeout = setTimeout(() => {
      timeout = null
      fn(...params)
    }, 1000);
  }
}

export const useDebounce = (value,delay)=>{
  const [debounceValue,setDebounceValue] = useState(value);
  useEffect( () => {
    const timeout = setTimeout(() => {
      setDebounceValue(value)
    }, delay);
    return ()=>{clearTimeout(timeout)}
  }, [ value , delay ] )

  return debounceValue
}


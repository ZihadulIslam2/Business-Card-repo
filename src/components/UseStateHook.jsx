import { useState } from 'react'
const UseStateHook = () => {
  //   let name = 'Tusher'
  const [name, setname] = useState('Tusher')

  const [age, setage] = useState('')

  const handleClickAge = () => {
    setage(21)
  }
  const handleClick = () => {
    // name = 'Zihadul Islam Tuher'
    // console.log(name)
    setname('Zihadul Islam Tushre.')
  }
  return (
    <>
      <h1 className="text-9xl">{name}</h1>
      <h1 className="text-9xl">My age is {age}</h1>
      <button type="button" onClick={handleClick}>
        Click me
      </button>
      <button type="button" onClick={handleClickAge}>
        Age button
      </button>
    </>
  )
}

export default UseStateHook

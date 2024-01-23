import React, {useState} from 'react'
import "../App.css"

export default function UseContext() {
    const [like, setLike] = useState(0)

  return (
    <>
    <div>{like}</div>
    <button onClick={() => setLike(like => like + 1)}>Like</button>
    </>
  )
}

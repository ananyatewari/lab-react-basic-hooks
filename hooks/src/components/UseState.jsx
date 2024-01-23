import React, { useContext, useEffect, useState } from 'react'
import {Data} from "../App"
import "../App.css"

export default function UseState() {

    const content = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero doloremque numquam quae, atque nihil rem. Consectetur a fugit blanditiis, ex minus qui distinctio suscipit perspiciatis esse? Excepturi, vel. Quibusdam suscipit ipsam, quaerat sunt est omnis amet reiciendis consequatur cumque, officiis illo magnam, soluta enim aliquam totam perferendis vel. Perferendis, odio."

    const bg = useContext(Data)
    const bgstyling = {
        backgroundColor: bg ? "black" : "gray",
        color : bg ? "white" : "black",
        margin : "auto",
        padding : "3rem",
        textAlign : "center"
    }

    const [state, setContent] = useState("")

    useEffect (() => {
        alert("Content button clicked")
    }, [state])

  return (
    <>
    <div style={bgstyling}>
        <button onClick={() => setContent(state == "" ? content : "")}>Content</button>
        <p>{state == "" ? "Click the button to show content" : content}</p>
    </div>
    </>
  )
}

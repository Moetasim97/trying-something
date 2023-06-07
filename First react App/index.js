import React from "react"
import {createRoot} from "react-dom/client"
import App from "./src/App.js"
import "./src/style.css"

var element=document.getElementById("root")
var root=createRoot(element)

root.render(<App/>)
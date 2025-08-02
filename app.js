
import React from "react";
import ReactDOM from 'react-dom/client';



const parent=React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},
[React.createElement("h1",{id:"head"},"heading from child"),React.createElement("h2",{id:"head2"}," I am  h4 tag")]));
const heading=React.createElement("h1",{id:"heading"},"Hello World from react My first react program");
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
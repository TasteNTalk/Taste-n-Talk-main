import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // App returns <RouterProvider />
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
// import App from "./App";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );


// // // ✅ FIXED main.jsx
// // import { StrictMode } from 'react'
// // import React from 'react'
// // import { createRoot } from 'react-dom/client'
// // import './app.css'
// // import './index.css'
// // import App from './App.jsx'

// // createRoot(document.getElementById('root')).render(
// //   <StrictMode>
// //     <App />
// //   </StrictMode>
// // )

// // // import React from "react";
// // // import ReactDOM from "react-dom/client";
// // // import { RouterProvider } from "react-router-dom";
// // // import router from "./router";
// // // import "./index.css"; // Global styles

// // // ReactDOM.createRoot(document.getElementById("root")).render(
// // //   <React.StrictMode>
// // //     <RouterProvider router={router} />
// // //   </React.StrictMode>
// // // );


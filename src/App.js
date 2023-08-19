
import './App.css';
import Layout from "./components/UI/Layout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import {BrowserRouter, Routes, Route }from "react-router-dom"




export default function App(){
  return (
        <BrowserRouter>

            <Layout>
                <Routes>
                    <Route element={<Home/>} path="/" />
                    <Route element={<Shop/>} path="/Shop" />
                </Routes>
            </Layout>

        </BrowserRouter>

      );
}

/*
     <Layout>
        <Home/>
         <Shop/>
     </Layout>

 */

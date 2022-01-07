import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import { Mainpage } from './pages/Mainpage';
import { Profile } from './components/Profile';
import { Mycourse } from './components/Mycourse';
import ViewportProvider from "./viewport/Viewportprovider";
import NavbarAppBar from "./components/navbar";

function App() {

  return (
    <>
    <ViewportProvider>
      <NavbarAppBar/>
      <Mainpage/>
    </ViewportProvider>
    </>
  );

}

export default App;

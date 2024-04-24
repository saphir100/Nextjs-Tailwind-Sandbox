"use client";
import {createContext,useState} from 'react';


export const MenuContext=createContext();

const MenuContextProvider = ({children}) => {
  const [Open,setOpen]=useState(false);
  const toggle=()=>{
    console.log({Open});
    setOpen((prev)=>!prev);
  }
  return <MenuContext.Provider value={{Open,toggle}}>
    {children}
  </MenuContext.Provider>
}

export default MenuContextProvider

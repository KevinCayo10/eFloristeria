"use client";

import { createContext, useContext, useState } from "react";

// Define the SidebarContext
const SidebarContext = createContext({
  collapsed: false,
  setCollapsed: () => {},
});

// Custom hook to use the SidebarContext
export const useSidebarContext = () => {
  return useContext(SidebarContext);
};

// SidebarProvider component to provide the context to its children
export const SidebarProvider = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <SidebarContext.Provider value={{ collapsed, setCollapsed }}>
      {children}
    </SidebarContext.Provider>
  );
};

export { SidebarContext };

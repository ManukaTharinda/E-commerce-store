"use client";
import React from "react";
import { Provider } from 'react-redux';
import store from "@/store/store";

interface Props {
  children: React.ReactNode;
}

const storeProvider = ({ children }: {children:React.ReactNode}) => {
    return (
        <Provider store={store}>{children}</Provider>
       
    );
};

export default storeProvider;

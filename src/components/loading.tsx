"use client";
import { createContext, useContext, useState } from "react";

const LoadingContext = createContext({
    isLoading: false,
    setLoading: (loading: boolean) => { },
});
// FIXME: 加载有问题
export const LoadingProvider = ({ children }) => {
    const [isLoading, setLoading] = useState(false);
    return (
        <LoadingContext.Provider value={{ isLoading, setLoading }}>
            {/* <div>12312312313</div> */}
            {children}
        </LoadingContext.Provider>
    );
};

export const useLoading = () => useContext(LoadingContext);
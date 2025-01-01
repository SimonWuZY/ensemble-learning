"use client";
import { createContext, useContext, useState } from "react";

const LoadingContext = createContext({
    isLoading: false,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setLoading: (loading: boolean) => { },
});
// FIXME: 加载有问题
import { ReactNode } from "react";

export const LoadingProvider = ({ children }: { children: ReactNode }) => {
    const [isLoading, setLoading] = useState(false);
    return (
        <LoadingContext.Provider value={{ isLoading, setLoading }}>
            {/* <div>12312312313</div> */}
            {children}
        </LoadingContext.Provider>
    );
};

export const useLoading = () => useContext(LoadingContext);
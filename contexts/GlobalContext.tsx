import { router } from "expo-router";
import React, { createContext, useContext } from "react";


interface GlobalProps {
    toSignup: VoidFunction;
    toLogin: VoidFunction;
    toHome: VoidFunction;

}


const GlobalContext = createContext<any>(null)


export const useGlobal = (): GlobalProps => {
    const context = useContext(GlobalContext)
    if(!context){
        throw new Error('Global context error....')
    }

    return context

}
export const GlobalProvider = ({children}: {children: React.ReactNode}) => {
    
    const toSignup = () => {
        router.push('/sign-up')
    }

    const toLogin = () => {
        router.push('/login')
    }

    const toHome = () => {
        router.push('/(tabs)')
    }
    
    return(
        <GlobalContext.Provider value={{toSignup, toLogin, toHome}}>
            {children}
        </GlobalContext.Provider>
    )
}
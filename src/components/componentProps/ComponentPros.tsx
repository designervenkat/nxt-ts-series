import React from "react";
import Login from "./Login";
import { NameProps } from "../../types";



type Props = {
    isLoggedIn: boolean
    component: React.ComponentType<NameProps>
}


export default function ComponentPros({
    isLoggedIn,
    component: Component
}: Props) {
   if(isLoggedIn){
            return <Component name="TypeScript"/>
        } else {
            return <Login/>
        }
}

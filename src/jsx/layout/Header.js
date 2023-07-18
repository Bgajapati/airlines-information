import '../../scss/layout/styles.scss'
import React from "react";

// Components
import {Logo} from "../components/logo";

export const Header = () => {
    return (
        <header className="airlines-information__header">
            <Logo/>
        </header>
    )
}
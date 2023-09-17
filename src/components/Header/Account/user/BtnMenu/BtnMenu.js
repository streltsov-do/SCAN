import React, { useState } from "react";

import IconMenu from "./IconMenu.svg";
import ExitMenu from "./Exit.svg";

import { Btn } from "./styled";

const BtnMenu = (props) => {
    const { openMenu, isMenuOpened } = props;

    const [showDrop, setShowDrop] = useState(false);

    const handleDrop = (e) => {
        e.preventDefault();
        setShowDrop(!showDrop);
        openMenu(!isMenuOpened);
    };

    return (
        <Btn onClick={handleDrop}>
            <img src={isMenuOpened ? ExitMenu : IconMenu} alt="Меню" />
        </Btn>
    );
};

export default BtnMenu;

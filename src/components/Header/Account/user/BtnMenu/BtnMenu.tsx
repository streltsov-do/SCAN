import React, { useState } from "react";

import { Btn } from "./styled";

import IconMenu from "./IconMenu.svg";
import ExitMenu from "./Exit.svg";

const BtnMenu = (props: {
    openMenu: (bool: boolean) => void;
    isMenuOpened: boolean;
}) => {
    const { openMenu, isMenuOpened } = props;

    const [showDrop, setShowDrop] = useState(false);

    const handleDrop = (e: React.MouseEvent<HTMLButtonElement>) => {
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

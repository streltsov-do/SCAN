import React from "react";
import DivFlex from "../DivFlex/DivFlex";

export default function NotFound() {
    return(
        <DivFlex
            height="200"
            justify="center"
            align="center"
            color="red"
            render={
                <h1>
                    Страница не найдена!
                </h1>
            }
        />
    )
}


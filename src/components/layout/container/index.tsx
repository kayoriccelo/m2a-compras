import React from "react"

import { SContainer } from "./_styled"
import { IContainer } from "./_interface"


export default function Container({ children }: IContainer) {
    return (
        <SContainer>
            {children}
        </SContainer>
    )
}

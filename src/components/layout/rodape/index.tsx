import React from "react"

import { SRodape } from "./_styled"
import { IRodape } from "./_interface"


export default function Rodape({ children }: IRodape) {
    return (
        <SRodape>
            {children}
        </SRodape>
    )
}

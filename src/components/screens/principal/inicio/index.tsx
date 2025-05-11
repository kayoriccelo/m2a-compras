import React from 'react';

import { IInicio } from "./_interface"
import { SInicio } from "./_styled"


export default function Inicio({ children }: IInicio) {
    return (
        <SInicio>
            {children}
        </SInicio>
    )
}

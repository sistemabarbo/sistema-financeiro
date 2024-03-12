import React from 'react';

import { Itens } from './style';

function ResumoItens({valor, titulo, color, borderColor}) {
    return (
  <Itens color={color} borderColor={borderColor}>
    <h2>{titulo}</h2>
    <span>R$ {valor}</span>
  </Itens>
    );
}

export default ResumoItens;
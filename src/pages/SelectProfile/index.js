import React from 'react';
import { MdAddCircleOutline } from 'react-icons/md';
import { Container } from './styles';

import lojista from '~/assets/lojista.svg'
import fornecedor from '~/assets/fornecedor.svg'
import history from '~/services/history';

export default function SelectProfile() {

  return (
    <Container>
      <img src={lojista} alt="Sou Lojista" style={{ justifySelf: "right"}} />
        <button onClick={() => history.push(`/create/shop`)}>
          <MdAddCircleOutline /> Sou Lojista
        </button>
      <br />
      <br />
      <br />
      <hr />
      <br />
      <button onClick={() => history.push(`/create/provider`)}>
          <MdAddCircleOutline /> Sou Fornecedor
        </button>
      <img src={fornecedor} alt="Sou Fornecedor" />
    </Container>
  );
}

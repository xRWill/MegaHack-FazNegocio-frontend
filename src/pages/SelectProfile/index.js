import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

// import AvatarInput from './AvatarInput';
import { MdAddCircleOutline } from 'react-icons/md';
import { Container } from './styles';

import { updateProfileRequest } from '~/store/modules/user/actions';

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

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input,  } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signUpRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.png';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório.'),
  email: Yup.string()
    .email('Insira um e-email válido.')
    .required('O e-mail é obrigatório.'),
  password: Yup.string()
    .min(6, 'No mínimo 6 dígitos.')
    .required('A senha é obrigatória.'),
    cellphone: Yup.string()
      .min(13, 'No mínimo 13 dígitos.')
      // .matches(val => console.log(val), 'Celular deve ser no formato E164')
      .required('O Celular é obrigatório.'),
});

export default function SignUp() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ name, email, password, cellphone }) {
    dispatch(signUpRequest(name, email, password, cellphone));
  }
  return (
    <>
      <Form schema={schema} onSubmit={handleSubmit}>
        <img className="imgLogo" src={logo} alt="Faz Negócio" />

        <Input name="name" placeholder="Seu nome completo" />
        <Input name="cellphone" type="tel" autocomplete="tel" placeholder="+55 48 9 9876 5432" />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Sua senha" />

        <button type="submit">
          {loading ? 'Cadastrando...' : 'Cadastrar'}
        </button>

        <Link to="/">Já tenho conta</Link>
      </Form>
    </>
  );
}

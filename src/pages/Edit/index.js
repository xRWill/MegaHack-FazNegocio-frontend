import React from 'react';
import lojista from '~/assets/lojista.svg';
import fornecedor from '~/assets/fornecedor.svg';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';


import { Form, Input, Choice, Check, Scope } from '@rocketseat/unform';
import 'react-datepicker/dist/react-datepicker.css';
import { ptBR } from 'date-fns/locale';
import { MdEdit } from 'react-icons/md';
import { Container } from './styles';

// import {
//   companyUpdateRequest,
//   companyCreateRequest,
// } from '~/store/modules/company/actions';
// import BannerInput from './BannerInput';
import DatePicker from './DatePicker';

export default function Edit({ match }) {
  const companyType = match.params.profile;
  const dispatch = useDispatch();

  // const company = useSelector(state =>
  //   state.company.organizing.filter(m => m.id === companyId)
  // )[0];

  // function handleSubmit(data) {
  //   if (companyId) dispatch(companyUpdateRequest(company.id, data));
  //   else dispatch(companyCreateRequest(data));
  // }

  return (
    <Container>
      <Form>
        {companyType !== 'provider' ? (
          <img
            src={lojista}
            alt="Sou Lojista"
            style={{ justifySelf: 'right' }}
          />
        ) : (
          <img
            src={fornecedor}
            alt="Sou Fornecedor"
            style={{ justifySelf: 'right' }}
          />
        )}
        <br />
        <Input name="cnpj" placeholder="CNPJ" />
        <Input name="razao_social" placeholder="Razão Social" />

        <DatePicker
          name="date"
          minDate={new Date()}
          locale={ptBR}
          showTimeSelect
          timeFormat="p"
          timeIntervals={60}
          dateFormat="d 'de' MMMM 'de' yyyy 'às' HH:mm"
          placeholderText="Data de nascimento"
        />

        <Input name="nome_representante" placeholder="Nome Representante" />
        <Input name="cnae_principal" placeholder="CNAE Principal" />
        <hr />
        <h2>Expectativas:</h2>

        <div className="options">
        <div><Check name="conectar_a_fornecedores" label="Conectar a Fornecedores" /></div>
        <div><Check name="solucoes_inovadoras" label="Soluções inovadoras" /></div>
        <div><Check
          name="diversificar_catalogo"
          label="Diversificação de Catálogo"
        /></div>
        </div>
        <button type="submit">
          <MdEdit /> Salvar Empresa
        </button>
      </Form>
    </Container>
  );
}

Edit.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      profile: PropTypes.node,
    }).isRequired,
  }).isRequired,
};

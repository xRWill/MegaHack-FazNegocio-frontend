import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

// import Dashboard from '~/pages/Dashboard';
// import Detail from '~/pages/Detail';
import Profile from '~/pages/Profile';
import SelectProfile from '~/pages/SelectProfile';
import Edit from '~/pages/Edit';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />
      {/* <Route path="/dashboard" component={Dashboard} isPrivate /> */}
      <Route path="/profile" component={Profile} isPrivate />{' '}
      {/* Conta usuario */}
      <Route path="/select-profile" component={SelectProfile} isPrivate />{' '}
      {/* Perfil lojista-fornecedor */}
      {/* <Route path="/detail/:profile" component={Detail} isPrivate /> */}
      {/* <Route path="/edit/:profile" component={Edit} isPrivate /> */}
      <Route path="/create/:profile" component={Edit} isPrivate />{' '}
      {/* Criar empresa tipo/perfil lojista ou fornecedor */}
    </Switch>
  );
}

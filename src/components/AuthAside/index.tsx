import React, { FormEvent, ChangeEvent, useState, useContext } from 'react';

import { MdArrowForward } from 'react-icons/md';

import { Container, Header, Main, UserInfo } from './styles';
import api from '../../services/api';
import { AppContext } from '../../provider/AppProvider';
import { getUser, signOut } from '../../provider/actions';


interface IAuthAside {
  open: boolean;
  onClose: () => void
}

interface IGitRequest {
  name: string;
  avatar_url: string;
}

const AuthAside = ({ open, onClose }: IAuthAside) => {

  const { dispatch, state } = useContext(AppContext);

  const { signed, user } = state;

  const [input, setInput] = useState('');

  const onChangeInput = async (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInput(value);
  }

  const onSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getData(input);
  }

  const getData = async (user: string) => {
    const response = await api.get<IGitRequest>(`users/${user}`);

    const { name, avatar_url: avatarUrl } = response.data;

    dispatch(getUser({ name, avatarUrl }));
  }

  return (
    <Container open={open}>
      <Header>
        <button onClick={onClose} data-cy="close-auth-aside-btn">
          <MdArrowForward size={20} />
        </button>
      </Header>
      <Main>
        {!signed && (
          <form onSubmit={onSubmitForm} data-cy="sign-in-form">
            <input
              placeholder="Type your github user"
              name="githubUser"
              onChange={onChangeInput}
              value={input}
            />
            <button data-cy="submit-sign-in">Entrar</button>
          </form>
        )}

        {signed && (
          <UserInfo>
            <img src={user.avatarUrl} alt="user avatar" />
            <strong>{user.name}</strong>
            <button 
              onClick={() => dispatch(signOut())}
              data-cy="sign-out-btn"
            >
              Sair
            </button>
          </UserInfo>
        )}

      </Main>
    </Container>
  )
}

export default AuthAside;
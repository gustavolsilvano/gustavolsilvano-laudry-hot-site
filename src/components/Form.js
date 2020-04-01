import React, { useState } from 'react';
import styled from 'styled-components';
import server from '../api/server';

// Styles

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 40vh;
`;

const Title = styled.h1`
  display: flex;
  flex: 1;
  font-size: 20px;
  margin: 20px;
`;

const InputContainer = styled.form`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

export default ({ setIsLoading }) => {
  // State
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  // Function
  const handleSubmit = async event => {
    event.preventDefault();
    try {
      setIsLoading(true);
      await server.post('/cupom', { email: email.split(' ')[0], name });
      setIsLoading(false);
      alert(
        'Cadastro realizado com sucesso! Um email foi enviado para você. Nos vemos denovo no lançamento do APP!'
      );
    } catch (err) {
      console.log('Error pre-cadastro', err);
      setIsLoading(false);
      if (err && err.response && err.response.data)
        return alert(err.response.data.message);
    }
  };

  return (
    <Container>
      <Title>
        Faça um pre-cadastro de sua conta para receber em seu email um cupom com
        20% de desconto na sua primeira solicitação!
      </Title>
      <InputContainer onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={evt => setEmail(evt.target.value)}
          />
        </label>
        <label style={{ marginTop: '10px' }}>
          Nome:
          <input
            type="text"
            value={name}
            onChange={evt => setName(evt.target.value)}
          />
        </label>
        <input
          type="submit"
          onClick={handleSubmit}
          style={{ marginTop: '10px' }}
        />
      </InputContainer>
    </Container>
  );
};

import React, { useState, useEffect, FormEvent } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import logoImg from '../../assets/logoImg.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  // CODE

  return (
    <>
      <img src={logoImg} alt="GitHub Explorer 2" />
      <Title>Explore repositórios no GitHub</Title>

      <Form action="">
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/42852997?s=460&u=80a399122290571393cce240b45a9c53035750f3&v=4"
            alt="Eduardo Ribeiro"
          />
          <div>
            <strong>dufellipeR/github_explorer2</strong>
            <p>Lorem ipsum dolor firelight bluetooth</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/42852997?s=460&u=80a399122290571393cce240b45a9c53035750f3&v=4"
            alt="Eduardo Ribeiro"
          />
          <div>
            <strong>dufellipeR/github_explorer2</strong>
            <p>Lorem ipsum dolor firelight bluetooth</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;

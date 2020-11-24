import React, { useState, useEffect, FormEvent } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { Link, useRouteMatch } from 'react-router-dom';
import api from '../../services/api';
import logoImg from '../../assets/logoImg.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

interface Repository {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface Issue {
  title: string;
  id: number;
  user: {
    login: string;
  };
  html_url: string;
}

const Repository: React.FC = () => {
  const [repository, setRepository] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);

  const { params } = useRouteMatch<RepositoryParams>();

  useEffect(() => {
    // api.get(`repos/${params.repository}`).then((res) => {
    //   console.log(res.data);
    // });

    // api.get(`repos/${params.repository}/issues`).then((res) => {
    //   console.log(res.data);
    // });

    async function loadData(): Promise<void> {
      const [repository, issues] = await Promise.all([
        api.get(`repos/${params.repository}`),
        api.get(`repos/${params.repository}/issues`),
      ]);

      setRepository(repository.data);
      setIssues(issues.data);
    }

    loadData();
  }, [params.repository]);

  return (
    <>
      <Header>
        <img src={logoImg} alt="GitHubExplorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      {repository && (
        <RepositoryInfo>
          <header>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <span>Star</span>
            </li>
            <li>
              <strong>{repository.forks_count}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{repository.open_issues_count}</strong>
              <span>Issues Abertas</span>
            </li>
          </ul>
        </RepositoryInfo>
      )}

      <Issues>
        {issues.map((issue) => (
          <a key={issue.id} target="blank" href={issue.html_url}>
            <div>
              <strong>{issue.title}</strong>
              <p> {issue.user.login}</p>
            </div>
            <FiChevronRight size={20} />
          </a>
        ))}
      </Issues>
    </>
  );
};

export default Repository;

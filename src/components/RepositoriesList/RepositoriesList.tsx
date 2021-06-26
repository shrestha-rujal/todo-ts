import React from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const RepositoriesList: React.FC<any> = () => {
  const { data, error, isLoading } = useTypedSelector((state) => state.repositories);

  return (
    <>
      {isLoading && <div>
        <h2>Searching for packages</h2>
      </div>}

      { error && <div>
        <h3>Error fetching packages!</h3>
        <p>{error}</p>
      </div>}

      {!!data.length && <div>
        <h1>Repo list</h1>
        <ul>
          { data.map((repository: string) => (<li>{repository}</li>))}
        </ul>
      </div>}
    </>
  );
};

export default RepositoriesList;
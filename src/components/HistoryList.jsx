import { useContext } from 'react';
import { NavigationHistoryContext } from './NavigationHistoryContext';

const HistoryList = () => {
  const { history } = useContext(NavigationHistoryContext);

  return (
    <div>
      <h2>Histórico de Navegação</h2>
      <ul>
        {history.map((entry, index) => (
          <li key={index}>{entry}</li>
        ))}
      </ul>
    </div>
  );
};

export default HistoryList
import { useContext, useState } from 'react';
import { NavigationHistoryContext } from './NavigationHistoryContext';
import HistoryList from './HistoryList';

const NavigationTracker = () => {
    const { addHistoryEntry } = useContext(NavigationHistoryContext);
    const [showHistory, setShowHistory] = useState(false);

    const handleNavigation = (path) => {
        addHistoryEntry(path);
    };

    const toggleHistory = () => {
        setShowHistory(prevState => !prevState);
    };

    return (
        <div id='content'>
            <div>
                <button onClick={() => handleNavigation('/home')}>Home</button>
                <button onClick={() => handleNavigation('/about')}>Sobre</button>
                <button onClick={() => handleNavigation('/contact')}>Contato</button>
                <button onClick={toggleHistory}>
                    {showHistory ? 'Esconder Histórico' : 'Mostrar Histórico'}
                </button>
                {showHistory && <HistoryList />}
                <div>
                    <img src='./img.png' width={400}></img>
                </div>
            </div>
        </div>
    );
};

export default NavigationTracker
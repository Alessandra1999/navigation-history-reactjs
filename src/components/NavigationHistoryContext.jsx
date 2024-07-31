import { createContext, useState } from "react";

export const NavigationHistoryContext = createContext();

export const NavigationHistoryProvider = (props) => {
    const [history, setHistory] = useState([]);

    const addHistoryEntry = (entry) => {
        setHistory((prevHistory) => [...prevHistory, entry]);
    };

    return (
        <NavigationHistoryContext.Provider value={{ history, addHistoryEntry }}>
            {props.children}
        </NavigationHistoryContext.Provider>
    )
}
import { Routes, Route } from 'react-router-dom';
import React, {createContext, Dispatch, useState} from 'react';
import Login from './components/Login';

export const Context = createContext<[GlobalState, Dispatch<any>]>([
    initialState,
    () => {}
]);

type GlobalState = {
    authorised: boolean
}

const App = () => {
    const [globalState, setGlobalState] = useState<GlobalState>({authorised: false});
    export const
    return (
        <UserContext.Provider value={}>
            <>
                <h1>This is Demo for 101 DIGITAL</h1>
                <Routes>
                    <Route path="/" element={<Login />} />
                </Routes>
            </>
        </UserContext.Provider>

  );
};

export default App;
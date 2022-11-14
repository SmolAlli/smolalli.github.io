import { useEffect } from 'react';
import App from './App.jsx';
import { initialise } from './Data/accounts';
import './index.css';

export default () => {
    useEffect(() => initialise(), []);
    return <App />;
};

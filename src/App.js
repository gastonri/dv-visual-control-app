import './App.scss';
import Controls from './components/controls/controls';
import Display from './components/display/display';
import React from 'react';

const App = () => {
    return (
        <div className="app">
            <Display />
            <Controls />
        </div>
    );
};

export default App;

import React, { Component } from 'react';
import Step from 'components/Step/Step';

import './App.css';


class App extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='container'>
                <div className='tab-panel'>
                    <Step />
                </div>
            </div> 
        );
    }
}
 
export default App;
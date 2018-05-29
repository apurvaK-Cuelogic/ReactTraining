import React, { Components } from 'react';
import { Link , Route } from 'react-router-dom';

import Users from './containers/Users';
import asyncComponent from './hoc/asyncComponent';

const AsyncPizza = asyncComponent(() => {
    return import('./containers/Pizza.js');
});

class App extends Components {
    render () {
        return (
            <div>
                <div>
                    <Link tp="/">Users</Link>
                    <Link tp="/pizza">Pizza</Link>
                </div>
                <div>
                    <Route path="/" exact component={Users} />
                    <Route path="/pizza" component={AsyncPizza} />
                </div>
            </div>
        );
    }
}

export default App;

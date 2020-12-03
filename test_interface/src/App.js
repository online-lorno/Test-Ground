import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from './Landing';
import About from './About';
import Navigation from './components/Navigation';


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Navigation />
                    <Switch>
                        <Route path="/" component={Landing} exact/>
                        <Route path="/about" component={About}/>
                        <Route component={Error}/>
                    </Switch>
                    {/*<Route path="/stake" component={Stake}/>}*/}
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
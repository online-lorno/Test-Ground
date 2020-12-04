import React, { Component } from 'react';
import {BrowserRouter, NavLink, Route, Switch} from 'react-router-dom';

import Landing from './Landing';
import About from './About';
import Navigation from './components/Navigation';
import Card from "react-bootstrap/Card";


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Card style={{
                        backgroundColor: '#fd00ff',
                        'flex-direction': 'row',
                        alignItems: "center",
                        display: "flex"
                    }}> {/* 'flex-direction': 'row' fixes all the problems I've been having! put this on components
                            in order to make them align horizontally before vertically. Its built into CSS and doesnt
                            even need to go as high level as react! works on most components
                             https://css-tricks.com/snippets/css/a-guide-to-flexbox/*/}
                        <Card style={{
                            backgroundColor: 'red',
                        }}>
                            <NavLink to="/">Home</NavLink>
                        </Card>
                        <Card style={{
                            backgroundColor: 'red',
                        }}>
                            <NavLink to="/about">About</NavLink>
                        </Card>
                    </Card>
                    <Switch>
                        <Route path="/" component={Landing} exact/>
                        <Route path="/about" component={About}/>
                    </Switch>
                    {/*<Route path="/stake" component={Stake}/>}*/}
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
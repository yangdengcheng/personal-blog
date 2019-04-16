import React, { Component } from 'react'
import App from '../App'
import {
    BrowserRouter,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'
import { Provider } from 'react-redux'
import { configureStore } from '../store'

import Layout from '../components/Layout'
import Dashboard from '../pages/dashboard'
import Button  from '../pages/ui/button'

const store = configureStore()

export default class IRouter extends Component{
    render() {
        return(
            <Provider store={store}>
                <BrowserRouter>
                    <App>
                        <Route exact path="/" render = {() =>
                            <Redirect to="/admin/dashboard"/>
                        }></Route>
                        <Route path="/admin" render = {() =>
                            <Layout>
                                <Switch>
                                    <Route exact path="/admin" render={() =>
                                        <Redirect to="/admin/dashboard"/>
                                    }></Route>
                                    <Route path="/admin/dashboard" component={Dashboard}/>
                                    <Route path="/admin/ui/button" component={Button}/>
                                </Switch>
                            </Layout>
                        }></Route>
                    </App>
                </BrowserRouter>
            </Provider>
        )
    }
}

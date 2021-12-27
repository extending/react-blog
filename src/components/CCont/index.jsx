import React, { lazy, Suspense } from 'react';
// import { Router, Route, Link } from 'react-router'
// import { Switch, Route } from 'react-router-dom'
import {BrowserRouter, Route, Switch} from "react-router-dom";

const Home = lazy(() => import('../../view/Home/'))
const Menu = lazy(() => import('../../view/Menu/'))
const NoMatch = lazy(() => import('../../view/NoMatch/'))

const CCont = () => {
    return (
        <div className="cont">
            <BrowserRouter>
                <Suspense fallback={''}>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/menu" exact strict component={Menu}/>
                        {/* <Route path="/" component={App}>
                            <Route path="users" component={Users}>
                                <Route path="/user/:userId" component={User}/>
                            </Route>
                        </Route> */}
                        <Route path="*" component={NoMatch}/>
                    </Switch>
                </Suspense>
            </BrowserRouter>
        </div>
    )
}

export default CCont
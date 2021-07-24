import React, { lazy, Suspense } from 'react';
// import { Router, Route, Link } from 'react-router'
// import { Switch, Route } from 'react-router-dom'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import '../../css/common.css'

// import Home from '../../view/Home/'
const Home = lazy(() => import('../../view/Home/'))
const Menu = lazy(() => import('../../view/Menu/'))

const CCont = () => {
    return (
        <div className="cont">
            <BrowserRouter>
                <Suspense fallback={''}>
                    <Switch>
                        <Route path="/home" component={Home}/>
                        <Route path="/menu" component={Menu}/>
                        {/* <Route path="/" component={App}> */}
                            {/* <Route path="users" component={Users}>
                                <Route path="/user/:userId" component={User}/>
                            </Route>
                            <Route path="*" component={NoMatch}/> */}
                        {/* </Route> */}
                    </Switch>
                </Suspense>
            </BrowserRouter>
        </div>
    )
}

export default CCont
import React from 'react';
import ContactPage from '../components/ContactPage'
import Header from '../components/Header'
import HomePage from '../components/HomePage'
import PortfolioPage from '../components/PortfolioPage'
import NotFoundPage from '../components/NotFoundPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PortfolioItem from '../components/PortfolioItemPage';


const AppRouter = () => (
    <div>
        <Router>
            <Header />
            <Switch>
                <Route exact path='/' component={HomePage}></Route>
                <Route exact path='/portfolio' component={PortfolioPage} />
                <Route path='/portfolio/:id' component={PortfolioItem} />
                <Route path='/contact' component={ContactPage}></Route>
                <Route component={NotFoundPage} />
            </Switch>
        </Router>
    </div>

)

export default AppRouter;
import React from 'react';

import { Route } from 'react-router-dom';

import MovieList from '../MovieList';

import MovieDetail from '../MovieDetail';

const Main = () => {
    return (
        <div className="main">
            <Route exact path="/" component={MovieList} />
            <Route exact path="/movies/:id" component={MovieDetail} />
        </div>
    )
}

export default Main;
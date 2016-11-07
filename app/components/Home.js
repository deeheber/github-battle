import React from 'react';
import ReactRouter, { Link } from 'react-router';
import MainContainer from './MainContainer';

var Home = React.createClass({
    render: function(){
        return (
            <MainContainer>
                <h1>GitHub Battle</h1>
                <p className='lead'>Who will be victorious?</p>
                <Link to='/playerOne'>
                    <button type='button' className='btn btn-large btn-success'>
                        Get Started
                    </button>

                </Link>
            </MainContainer>
        )
    }
});

export default Home;
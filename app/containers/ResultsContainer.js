import React from 'react';
import Results from '../components/Results';
import githubHelpers from '../utils/githubHelpers';

var ResultsContainer = React.createClass({
    getInitialState: function(){
        return {
            isLoading: true,
            scores: []
        }
    },
    componentDidMount: function(){
        githubHelpers.battle(this.props.location.state.playerInfo)
            .then(function(scores){
                this.setState({
                    scores: scores,
                    isLoading: false
                })
            }.bind(this))
    },
    render: function(){
        return (
            <Results 
                playersInfo={this.props.location.state.playerInfo}
                isLoading={this.state.isLoading} 
                scores={this.state.scores}/>
        );
    }
});

export default ResultsContainer;
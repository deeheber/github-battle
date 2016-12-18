import React, { Component } from 'react';
import Results from '../components/Results';
import githubHelpers from '../utils/githubHelpers';

class ResultsContainer extends Component{
  constructor(){
    super();
    this.state = {
      isLoading: true,
      scores: []
    }
  }
  componentDidMount(){
    githubHelpers.battle(this.props.location.state.playerInfo)
      .then(scores=>{
        this.setState({
          scores: scores,
          isLoading: false
        })
      });
  }
  render(){
    return (
      <Results 
        playersInfo={this.props.location.state.playerInfo}
        isLoading={this.state.isLoading} 
        scores={this.state.scores}/>
    );
  }
}

export default ResultsContainer;
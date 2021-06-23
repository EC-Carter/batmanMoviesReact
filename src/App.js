
import React, { Component } from 'react'
import Menu from './components/Menu'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          movieData:[]

        }
    }//eo constructor


    componentDidMount = async () => {
      let url =  `http://www.omdbapi.com/?s=batman&apikey=d772336b`;

      let results = await fetch(url);

      let data = await results.json();

      this.setState({movieData:data.Search})
      //console.log(data)


    }//eo cDM

    render() {
      
      return (
        <>
          <Menu bat={this.state.movieData}/>
        </>
      )

    }//eo render



}//eo class

export default App


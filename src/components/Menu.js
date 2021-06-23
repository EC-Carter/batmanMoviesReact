import React, { Component } from 'react'
import Details from './Details'
import '../App.css'

export class Menu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movieDetails:null
            
            
        }
    }//eo constructor
    
    displayDetails =  async (e) => {
        let url = `http://www.omdbapi.com/?i=${e.target.id}&apikey=d772336b`
        //console.log(url)
        //console.log(e.target.id)
        let details = await fetch(url)
        let detailData = await details.json()
        this.setState({movieDetails:detailData})
        //console.log(this.state.movieDetails)
        //console.log('movie changed')
    }

    render() {
        let {bat} = this.props;
        //console.log(bat)


        return (
            <>
            <div className="flexCont">
            <ul className= "flex">
            {bat.map(movie =>{ 
                return(
                    <li className="nobullets">
                        <a href="#" onClick={this.displayDetails} className="movieLinks">
                            <h5  className= "h5"id={movie.imdbID}>{movie.Title}</h5>
                            <img src={movie.Poster} alt="batman movie poster" height="150px" id={movie.imdbID}/>
                            
                        </a>
                    </li>
                )
            })}
            </ul>
             <Details detailData={this.state.movieDetails}/> 
            </div>


                
            </>
        )
    }
}

export default Menu

//http://www.omdbapi.com/?i=tt0372784&apikey=d772336b
//{this.state.movieDetails?.Title && <Details detailData={this.state.movieDetails}/>} 
//on line 51
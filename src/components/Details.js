import React, { Component } from 'react'


export class Details extends Component {

    constructor(props) {
        super(props);
        this.state = {
            details:props.detailData
        }
        //console.log("print props",props )

    }


    render() {
        //console.log("printing state",this.state.details)
        this.state.details = this.props.detailData;
        
        return (
            <>
            <div className="details">
            <h3>{this.state.details.Title == null ? '':this.state.details.Title  }</h3>
            <img src={this.state.details.Poster ? this.state.details.Poster: ''} alt="" height=""/> 
            <h5> Directed By: {this.state.details.Director ? this.state.details.Director: ""}</h5>
            <h5> Released: {this.state.details.Released ? this.state.details.Released: ""}</h5>
            <h5> Year: {this.state.details.Year ? this.state.details.Year:""}</h5>
            <p>{this.state.details.Plot ? this.state.details.Plot: ""}</p>
            </div>

            
                
            </>
        )
    }


}



export default Details

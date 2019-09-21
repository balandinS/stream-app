import React from 'react';
import GoogleAuth from './authGoogle'
import { NavLink } from 'react-router-dom'

class StreamList extends React.Component{

    render(){
        return(
            <React.Fragment>
            <div className="ui violet inverted secondary  menu">
            <NavLink className="item"  exact to="/">List</NavLink>
            <NavLink className="item"  to="/streams/delete">Delete</NavLink>
            <NavLink className="item"  to="/streams/new">Create</NavLink>
            <NavLink className="item"  to="/streams/edit">Show</NavLink>
            <NavLink className="item"  to="/streams/show">Edit</NavLink>
            <div className="right menu">
               <GoogleAuth />
            </div>
          </div>
          </React.Fragment>
        )
    }
}

export default StreamList;
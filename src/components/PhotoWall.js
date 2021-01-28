import React from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
//import {connect} from 'react-redux';

function PhotoWall(props){
       //console.log(posts)
        return(
            <div>
                <Link to="/add" className='add-icon'></Link>
                
                <div className='photo-grid'>
                {/* in the line below: onRemove is passed as a prop */}
                {props.posts.map((post, index) => <Photo key={index} post={post} onRemove={props.onRemove}/>)}
                </div> 
            </div>
            
        )
    
}

PhotoWall.propTypes = {
    posts: PropTypes.array.isRequired,
    onRemove: PropTypes.func.isRequired
}

export default PhotoWall;
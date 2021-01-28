import React from 'react';
import PropTypes from 'prop-types';
//import {connect} from 'react-redux';

function Photo(props) {
        const post = props.post
        return(
            <figure className='figure'>
                <img className='photo' alt={post.description} src={post.imageLink} />
                <figcaption><p>{post.description}</p></figcaption>
                <div className='button-container'>
                    <button className='remove-button' onClick={()=>{props.onRemove(post)}}>Remove</button>
                </div>
                
            </figure>
        )
    
}

Photo.propTypes = {
    photo: PropTypes.object.isRequired,
    onRemove: PropTypes.func.isRequired
}


export default Photo;
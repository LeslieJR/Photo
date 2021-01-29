import React, {Component} from 'react';
import Title from './Title';

class AddPhoto extends Component{
    render(){
        return(
            <div>
                <Title title={'Photogram'}/>
                <div className='form'>
                    <form>
                        <input type='text' placeholder='Link'/>
                        <input type='text' placeholder='Description'/>
                        <button>POST</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddPhoto;

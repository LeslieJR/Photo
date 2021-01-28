import React, {Component} from 'react';
import Title from './Title';
import PhotoWall from "./PhotoWall";
//import AddPhoto from './AddPhoto'; 

class Main extends Component{
    constructor(){
        super();
        this.state = {
            posts : [
                {
                id:0,
                description: "Beautiful Landscape",
                imageLink: "https://cdn.pixabay.com/photo/2016/08/09/21/54/lake-1581879_1280.jpg"
                }, 
                {
                id: "1",
                description: "Quiet Lake",            
                imageLink: "https://cdn.pixabay.com/photo/2020/03/03/20/31/boat-4899802_1280.jpg"
                }, 
                {
                id: "2",
                description: "Wonderful creature",
                imageLink: "https://cdn.pixabay.com/photo/2017/05/31/18/38/sea-2361247_1280.jpg"
                }, 
                {
                id:"3",
                description: "Chipmonk",
                imageLink:"https://cdn.pixabay.com/photo/2020/05/19/12/04/natural-5190433_1280.jpg"
                }
            ]
        }
    }

    //pass this function as a prop to the Photowall and from there to each Photo
    remove=(postRemoved)=>{
        //console.log(postRemoved.description);
        this.setState((state) => ({
            posts: state.posts.filter((post)=> post !== postRemoved)
        }))
    }

    render(){
        return(
            <div>
                <Title title={'Photogram'}/>
                {/* in the line below the function onRemove is passed as a prop */}
                <PhotoWall posts={this.state.posts} onRemove={this.remove}/>
            </div>
        )
    }
}

export default Main;
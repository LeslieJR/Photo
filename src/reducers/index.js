import { ADD_PHOTO } from "../actions/actionTypes"

const initialState = {
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

function rootReducer(state=initialState, action){
    switch (action.type) {
        case ADD_PHOTO:
          return Object.assign({}, state, {
            posts: state.posts.concat(action.payload)
          })
        default:
          return state
      }
    
}

export default rootReducer;
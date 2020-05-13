import {profileApi, usersApi} from "../api/api";

const ADD_POST = 'ADD-POST'
const UPDATE_POST = 'UPDATE-POST'
const ADD_POST1 = 'ADD-POST1'
const UPDATE_POST1 = 'UPDATE-POST1'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'


let initialState = {
    postContentData: [
        {
            id: 1,
            img: "https://justinfeed.com/img/reads-for-men-2018/how-to-make-girls-chase-you-15-secrets-to-be-mr.jpg",
            name: 'Jason Brone',
            post: "you are working for the dance and sing songs. this car is very awesome for the youngster. please\n" +
                "                    vote this car and like our post"
        },
        {
            id: 1,
            img: "https://justinfeed.com/img/reads-for-men-2018/how-to-make-girls-chase-you-15-secrets-to-be-mr.jpg",
            name: 'Jason Brone',
            post: "you are working for the dance and sing songs. this car is very awesome for the youngster. please\n" +
                "                    vote this car and like our post"
        },
        {
            id: 1,
            img: "https://justinfeed.com/img/reads-for-men-2018/how-to-make-girls-chase-you-15-secrets-to-be-mr.jpg",
            name: 'Jason Brone',
            post: "you are working for the dance and sing songs. this car is very awesome for the youngster. please\n" +
                "                    vote this car and like our post"
        },
        {
            id: 1,
            img: "https://justinfeed.com/img/reads-for-men-2018/how-to-make-girls-chase-you-15-secrets-to-be-mr.jpg",
            name: 'Jason Brone',
            post: "you are working for the dance and sing songs. this car is very awesome for the youngster. please\n" +
                "                    vote this car and like our post"
        },

    ],
    postContentData2: [
        {
            id: 1,
            img: "https://justinfeed.com/img/reads-for-men-2018/how-to-make-girls-chase-you-15-secrets-to-be-mr.jpg",
            name: 'Jason Brone',
            post: "you are working for the dance and sing songs. this car is very awesome for the youngster. please\n" +
                "                    vote this car and like our post"
        },
        {
            id: 1,
            img: "https://justinfeed.com/img/reads-for-men-2018/how-to-make-girls-chase-you-15-secrets-to-be-mr.jpg",
            name: 'Jason Brone',
            post: "you are working for the dance and sing songs. this car is very awesome for the youngster. please\n" +
                "                    vote this car and like our post"
        },


    ],
    pushPost: 'post',
    profile: null,
    status:" "

};

const postReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST: {
            let newPost = {
                id: 6,
                post: action.postPost,
                name: 'Jason Brone',
                img: "https://justinfeed.com/img/reads-for-men-2018/how-to-make-girls-chase-you-15-secrets-to-be-mr.jpg",
            }
            return {
                ...state,
                postContentData: [...state.postContentData, (newPost)],
                pushPost: " "
            }
        }

        case UPDATE_POST: {
            return {
                ...state,
                newPost1: action.postPost
            }
        }
        case ADD_POST1: {
            let newPost1 = {
                id: 6,
                post: action.postPost,
                name: 'Jaso Brone',
                img: "https://justinfeed.com/img/reads-for-men-2018/how-to-make-girls-chase-you-15-secrets-to-be-mr.jpg",
            }
            return {
                ...state,
                postContentData2: [...state.postContentData2, (newPost1)]
            }
        }

        case UPDATE_POST1: {
            return {
                ...state,
                newPost1: action.postPost
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state

    }

}

export const onPostChangeCrerator = () => ({type: 'UPDATE-POST'})
export const setUserProfile = (profile) => ({type: 'SET_USER_PROFILE', profile})
export const setStatus = (status) => ({type: 'SET_STATUS', status})

export const getUserProfile = (userId) =>(dispatch)=> {
 usersApi.getProfile(userId).then(response => {
       dispatch(setUserProfile(response.data));
    })
}
export const getStatus = (userId) =>(dispatch)=> {
 profileApi.getStatus(userId).then(response => {
       dispatch(setStatus(response.data));
    })

}
export const updateStatus = (status) =>(dispatch)=> {
 profileApi.updateStatus(status).then(response => {
     if(response.data.resaultCode === 0 ){
         dispatch(setStatus(status));
     }

    })
}
export const onPostCrerator = (post) => ({type: 'ADD-POST', postPost: post})
export const onPostChangeCrerator1 = () => ({type: 'UPDATE-POST1'})
export const onPostCrerator1 = (post) => ({type: 'ADD-POST1', postPost: post})

export default postReducer
import {usersApi} from "../Api/api";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 200,
    currentPage: 2,
    isFetching: true,
    followingInProgress: false
}


const
    userReducer = (state = initialState, action) => {
        switch (action.type) {
            case FOLLOW:
                return {
                    ...state,
                    users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return {...u, followed: true}
                        }
                        return u
                    })
                }
            case UNFOLLOW:
                return {
                    ...state,
                    users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return {...u, followed: false}
                        }
                        return u
                    })
                }
            case  SET_USERS: {
                return {...state, users: action.users}
            }
            case  SET_CURRENT_PAGE: {
                return {...state, currentPage: action.currentPage}
            }
            case  TOGGLE_IS_FETCHING: {
                return {...state, isFetching: action.isFetching}
            }
            case  TOGGLE_IS_FOLLOWING_PROGRESS: {
                return {...state, followingInProgress: action.isFetching}
            }
            default:
                return state
        }

    }



export const getUsers = (currentPage,pageSize) => {
    return (dispatch) => {
        dispatch(isFetchingAC(true))

        usersApi.getUsers(currentPage, pageSize).then(data => {
            dispatch(isFetchingAC(false))
            dispatch(setUsersAC(data.items))
        })
    }
}

export const follow = (userId) => {
    return (dispatch) => {
      dispatch(toggleFollowingProgressAC(true,userId))
        usersApi.follow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followSuccess(userId))
                }
              dispatch(toggleFollowingProgressAC(false,userId))

            })
    }
}
export const unfollow = (userId) => {
    return (dispatch) => {
      dispatch(toggleFollowingProgressAC(true))
        usersApi.unfollow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId))
                }
              dispatch(toggleFollowingProgressAC(false))

            })
    }
}
export default userReducer


export const followSuccess = (userId) => ({type: FOLLOW, userId})
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const isFetchingAC = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgressAC = (isFetching) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching})
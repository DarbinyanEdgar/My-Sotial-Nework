const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE = 'UPDATE-MESSAGE'

let initialState = {
    messagesData: [
        {id: 1, message: 'Hellow'},
        {id: 2, message: 'Hi'},
        {id: 3, message: 'How are you'},
        {id: 4, message: 'I am fine'},
        {id: 5, message: 'Thats true'},
        {id: 6, message: 'Start learn React'}
    ],
    dialogData: [
        {
            id: 1,
            name: '"Kelly Bill"',
            img: "https://justinfeed.com/img/reads-for-men-2018/how-to-make-girls-chase-you-15-secrets-to-be-mr.jpg"
        },
        {
            id: 2,
            name: 'Andy Forse',
            img: "https://justinfeed.com/img/reads-for-men-2018/how-to-make-girls-chase-you-15-secrets-to-be-mr.jpg"
        },
        {
            id: 3,
            name: 'Mark Wight',
            img: "https://justinfeed.com/img/reads-for-men-2018/how-to-make-girls-chase-you-15-secrets-to-be-mr.jpg"
        },
        {
            id: 4,
            name: 'Ben Adams',
            img: "https://justinfeed.com/img/reads-for-men-2018/how-to-make-girls-chase-you-15-secrets-to-be-mr.jpg"
        },
        {
            id: 5,
            name: 'Tomy Montana',
            img: "https://justinfeed.com/img/reads-for-men-2018/how-to-make-girls-chase-you-15-secrets-to-be-mr.jpg"
        },
        {
            id: 6,
            name: 'Magy Smith',
            img: "https://justinfeed.com/img/reads-for-men-2018/how-to-make-girls-chase-you-15-secrets-to-be-mr.jpg"
        }

    ],
    newMessageText: " "

};
const messageReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 6,
                message: state.newMessageText
            };
            return {
                ...state,
                messagesData: [...state.messagesData, (newMessage)]
            };
        case UPDATE_MESSAGE:
            return {
                ...state,
                newMessageText: action.newMessage
            }
        default:
            return state
    }


}
export const onSendMessageActionCreater = () => ({type: ADD_MESSAGE})
export const onMessageChangeActionCreater = (text) => ({
    type: UPDATE_MESSAGE, newMessage: text
})

export default messageReducer
// import messageReducer from "./messageReducer";
// import postReducer from "./postReducer";
//
// let state = {
//
//     _state: {
//         messagesPage: {
//             messagesData: [
//                 {id: 1, message: 'Hellow'},
//                 {id: 2, message: 'Hi'},
//                 {id: 3, message: 'How are you'},
//                 {id: 4, message: 'I am fine'},
//                 {id: 5, message: 'Thats true'},
//                 {id: 6, message: 'Start learn React'}
//             ],
//             dialogData: [
//                 {
//                     id: 1,
//                     name: '"Kelly Bill"',
//                     img: "https://justinfeed.com/img/reads-for-men-2018/how-to-make-girls-chase-you-15-secrets-to-be-mr.jpg"
//                 },
//                 {
//                     id: 2,
//                     name: 'Andy Forse',
//                     img: "https://justinfeed.com/img/reads-for-men-2018/how-to-make-girls-chase-you-15-secrets-to-be-mr.jpg"
//                 },
//                 {
//                     id: 3,
//                     name: 'Mark Wight',
//                     img: "https://justinfeed.com/img/reads-for-men-2018/how-to-make-girls-chase-you-15-secrets-to-be-mr.jpg"
//                 },
//                 {
//                     id: 4,
//                     name: 'Ben Adams',
//                     img: "https://justinfeed.com/img/reads-for-men-2018/how-to-make-girls-chase-you-15-secrets-to-be-mr.jpg"
//                 },
//                 {
//                     id: 5,
//                     name: 'Tomy Montana',
//                     img: "https://justinfeed.com/img/reads-for-men-2018/how-to-make-girls-chase-you-15-secrets-to-be-mr.jpg"
//                 },
//                 {
//                     id: 6,
//                     name: 'Magy Smith',
//                     img: "https://justinfeed.com/img/reads-for-men-2018/how-to-make-girls-chase-you-15-secrets-to-be-mr.jpg"
//                 }
//
//             ],
//             newMessageText: " ",
//
//         },
//         friendPage: {
//             friendData: [
//                 {
//                     id: 1,
//                     name: 'Kelly Bill',
//                     img: "https://justinfeed.com/img/reads-for-men-2018/how-to-make-girls-chase-you-15-secrets-to-be-mr.jpg"
//                 },
//                 {
//                     id: 2,
//                     name: 'Kelly Bill',
//                     img: "https://justinfeed.com/img/reads-for-men-2018/how-to-make-girls-chase-you-15-secrets-to-be-mr.jpg"
//                 },
//                 {
//                     id: 3,
//                     name: 'Kelly Bill',
//                     img: "https://justinfeed.com/img/reads-for-men-2018/how-to-make-girls-chase-you-15-secrets-to-be-mr.jpg"
//                 },
//                 {
//                     id: 4,
//                     name: 'Kelly Bill',
//                     img: "https://justinfeed.com/img/reads-for-men-2018/how-to-make-girls-chase-you-15-secrets-to-be-mr.jpg"
//                 },
//                 {
//                     id: 5,
//                     name: 'Kelly Bill',
//                     img: "https://justinfeed.com/img/reads-for-men-2018/how-to-make-girls-chase-you-15-secrets-to-be-mr.jpg"
//                 },
//                 {
//                     id: 6,
//                     name: 'Kelly Bill',
//                     img: "https://justinfeed.com/img/reads-for-men-2018/how-to-make-girls-chase-you-15-secrets-to-be-mr.jpg"
//                 },
//                 {
//                     id: 7,
//                     name: 'Kelly Bill',
//                     img: "https://justinfeed.com/img/reads-for-men-2018/how-to-make-girls-chase-you-15-secrets-to-be-mr.jpg"
//                 }
//
//
//             ]
//         },
//         avatarPage: {
//             avatarPic: [
//                 {img: "https://justinfeed.com/img/reads-for-men-2018/how-to-make-girls-chase-you-15-secrets-to-be-mr.jpg"},
//                 {img: "https://justinfeed.com/img/reads-for-men-2018/how-to-make-girls-chase-you-15-secrets-to-be-mr.jpg"},
//                 {img: "https://www.best4geeks.com/wp-content/uploads/2018/05/face-hiding-profile-pic-for-girl.jpg"},
//                 {img: "https://1.bp.blogspot.com/-BZRzKVontUw/XXklaMcmjJI/AAAAAAAADEE/TDpGPuFdWAoWrxZ89A0EresFpH--ZeqTwCEwYBhgL/s400/Screenshot_20190911-150004_Multi%2BParallel.jpg"},
//                 {img: "https://wallpapercave.com/wp/wp4221380.jpg"},
//                 {img: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Alberto_conversi_profile_pic.jpg"},
//                 {img: "https://i.dmarge.com/2017/04/fringe-part-hair.jpg"},
//                 {img: "https://data.whicdn.com/images/302058504/original.jpg?t=1511579073"},
//                 {img: "https://lh3.googleusercontent.com/proxy/AnaXcMUV8ruKnBQvWILgTIjoBO-7Q0HEvnAZl_3zv11t0pmjyzcwBWI4P-LUicCJ15lf2gD_UNGIkDHUmYvD9TFiX_SdXq-hYrJW4CrBUpGdGFhM-Kzr_x6H9hyuivZilrMOXaHdK2A"},
//                 {img: "https://www.goodmorningimageslover.com/wp-content/uploads/2019/12/awesome-profile-pic-for-girl.jpg"},
//                 {img: "https://www.goodmorningimageslover.com/wp-content/uploads/2019/12/awesome-profile-pic-for-girl.jpg"},
//
//
//             ]
//         },
//         postPage: {
//             postContentData: [
//                 {
//                     id: 1,
//                     img: "https://justinfeed.com/img/reads-for-men-2018/how-to-make-girls-chase-you-15-secrets-to-be-mr.jpg",
//                     name: 'Jason Brone',
//                     post: "you are working for the dance and sing songs. this car is very awesome for the youngster. please\n" +
//                         "                    vote this car and like our post"
//                 },
//                 {
//                     id: 1,
//                     img: "https://justinfeed.com/img/reads-for-men-2018/how-to-make-girls-chase-you-15-secrets-to-be-mr.jpg",
//                     name: 'Jason Brone',
//                     post: "you are working for the dance and sing songs. this car is very awesome for the youngster. please\n" +
//                         "                    vote this car and like our post"
//                 },
//                 {
//                     id: 1,
//                     img: "https://justinfeed.com/img/reads-for-men-2018/how-to-make-girls-chase-you-15-secrets-to-be-mr.jpg",
//                     name: 'Jason Brone',
//                     post: "you are working for the dance and sing songs. this car is very awesome for the youngster. please\n" +
//                         "                    vote this car and like our post"
//                 },
//                 {
//                     id: 1,
//                     img: "https://justinfeed.com/img/reads-for-men-2018/how-to-make-girls-chase-you-15-secrets-to-be-mr.jpg",
//                     name: 'Jason Brone',
//                     post: "you are working for the dance and sing songs. this car is very awesome for the youngster. please\n" +
//                         "                    vote this car and like our post"
//                 },
//
//             ],
//             postContentData2: [
//                 {
//                     id: 1,
//                     img: "https://justinfeed.com/img/reads-for-men-2018/how-to-make-girls-chase-you-15-secrets-to-be-mr.jpg",
//                     name: 'Jason Brone',
//                     post: "you are working for the dance and sing songs. this car is very awesome for the youngster. please\n" +
//                         "                    vote this car and like our post"
//                 },
//                 {
//                     id: 1,
//                     img: "https://justinfeed.com/img/reads-for-men-2018/how-to-make-girls-chase-you-15-secrets-to-be-mr.jpg",
//                     name: 'Jason Brone',
//                     post: "you are working for the dance and sing songs. this car is very awesome for the youngster. please\n" +
//                         "                    vote this car and like our post"
//                 },
//
//
//             ],
//             newPost: 'post'
//         }
//     },
//
//     _callSubscriber() {
//         console.log("state")
//     },
//
//     getState() {
//         return this._state
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer
//     },
//
//
//     dispatch(action) {
//
//         this._state.messagesPage = messageReducer(this._state.messagesPage, action)
//         this._state.postPage = postReducer(this._state.postPage, action)
//
//         this._callSubscriber(this._state)
//
//     },
//
// };
//
//
// export default state

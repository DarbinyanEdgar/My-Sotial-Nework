import React from "react";
import Avatar from 'react-avatar'



const Avatars = (props) => {
    return (

        <div>
            <Avatar size="35" round="50px"
                    src={props.img}/>
        </div>

    )

}
export default Avatars
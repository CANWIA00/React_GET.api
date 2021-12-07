import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const TextInfo = (props)=>{
    const{id} = useParams(); // Bu state ile {id}`ye ulastik
    const[textInfo,setTextInfo] = useState([]);

    useEffect(()=>{
        axios
        .get(`https://react-yazi-yorum.herokuapp.com/posts/${id}`)
        .then((response) =>{
            setTextInfo(response.data);
        })
        .catch((error)=>{
            console.log(error);
        });
    },[]);

    return (
        <React.Fragment>
            <h2 class="ui header">{textInfo.title}</h2>
            <p>{textInfo.created_at}</p>
            <p>{textInfo.content}</p>
        </React.Fragment>
    );
}
export default TextInfo;
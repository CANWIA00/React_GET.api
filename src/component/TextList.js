import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";


const TextList = (props) =>{
    const[textList,setTextList] = useState([]);

  useEffect(()=>{
    axios
    .get('https://react-yazi-yorum.herokuapp.com/posts')
    .then((response) => {
      setTextList(response.data)
    });
  },[]);


    return (
        <div class="ui relaxed divided list">{textList.map(text =>{
            return (
            <div className="item" key={text.id}>
            <i className="large github middle aligned icon"></i>
            <div className="content">
            <Link to={`/posts/${text.id}`} className="header">{text.title}</Link>
            <div className="description">{text.created_at}</div>
            </div>
            </div>
            );
        })}
        </div>
    );
};

export default TextList;
import React from "react";

function Article(props){
    const {title,date="January 1, 1970",preview} = props
    console.log(date)
    return(
        <article key={title}>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
        </article>
    )
}

export default Article;
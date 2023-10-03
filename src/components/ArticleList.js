import React, { Component } from 'react'
import Article from './Article'



function ArticleList({posts}){
    const newList = posts.map((e,idx) =>{
        return(
            <Article key={idx} title={e.title} date={e.date} preview={e.preview}/>
        )
    })
    return (
        <main>
            {newList}
        </main>
    )
}

export default ArticleList;
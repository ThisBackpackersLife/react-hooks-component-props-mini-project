import React from "react";
import Article from "./Article"; 

function ArticleList({blogData}) {
    const posts = blogData.posts

    const renderArticleItems = posts.map(post => <main><Article key={post.id} title={post.title} date={post.date} preview={post.preview} /></main>)

    // console.log(blogData.posts[1].id)
    return (
        <div> {renderArticleItems} </div>
    )
}

export default ArticleList;
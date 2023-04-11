import React from "react";

function Article({blogData}) {
    const posts = blogData.posts

    const articleItems = posts.map(post => {
        return (
        <article>
            <h3> {post.title} </h3>
            <small> {post.date} </small>
            <p> {post.preview} </p>
        </article>

        )
    })
    return (
        <div> {articleItems} </div>
    )
}


export default Article;
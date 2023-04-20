import { render } from "@testing-library/react";
import React from "react";

function Article(props) {
    const title = props.title
    const date = props.date
    const preview = props.preview

    return (
        <div>
            <article>
                <h3> {title} </h3>
                <small> {date} </small>
                <p> {preview} </p>
            </article> 
        </div>
    )
}


export default Article;
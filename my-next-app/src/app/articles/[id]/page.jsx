import React from 'react'
import { articles } from "../data/data"
import "../articles.css"
const page = async (props) => {
    const { id } = await props.params
    const onePost = articles.find((elem) => {
        return elem.id === +id
    })
    return (
        <div className="articles-wrapper">
            <h2 className="articles-title">Article</h2>
            <div className="articles-list">
                <div key={onePost.id} className="article-card">
                    <div className="article-id">#{onePost.id}</div>
                    <div className="article-content">
                        <h3 className="article-heading">{onePost.title}</h3>
                        <p className="article-body">{onePost.body}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
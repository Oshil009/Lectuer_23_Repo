"use client"
import React from 'react'
import "./articles.css"
import Link from 'next/link'
import {articles} from './data/data'
const page = () => {
    return (
        <div className="articles-wrapper">
            <h2 className="articles-title">All Articles</h2>
            <div className="articles-list">
                {articles.map((article) => (
                    <Link href={`/articles/${article.id}`} key={article.id} className="article-card">
                        <div className="article-id">#{article.id}</div>
                        <div className="article-content">
                            <h3 className="article-heading">{article.title}</h3>
                            <p className="article-body">{article.body}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default page
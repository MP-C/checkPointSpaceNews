import React from 'react';
import { Link } from 'react-router-dom';

export default function Article({ id, title, imageUrl, newsSite, publishedAt }) {

    return (
        <div>
            <div classeName="article_only" class="w-15">
                <h2> {title} </h2>
                <p> Source: {newsSite} - Date: {publishedAt} </p>
                <img class="w-32 mx-auto" src={imageUrl} alt="" />
                <h6>{id} </h6>
                <ul>
                    <li>
                        <Link to="/articledetail/:id"> News in Details</Link>
                    </li>
                </ul>
                <hr></hr>
            </div>
        </div >
    )
};
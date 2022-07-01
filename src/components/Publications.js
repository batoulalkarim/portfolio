import React, { useEffect, useState } from 'react';
import PostsCard from './PostsCard';

function Publications(){
    const [posts, setPosts] = useState([]);

    useEffect(() => {
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@batoulalkarim1')
    .then(resp => resp.json())
    .then(posts => setPosts(posts))
    }, [])

    function showCards(){
        if(posts.items){
            return posts.items.map(post => {
                return <PostsCard post={post} />
            })
        }
    }


    return(
        <div id="publications" className="bg">
            <h1 className="title_center">PUBLICATIONS</h1>
            <span className="publications">
            {showCards()}
            </span>
        </div>
    )
}

export default Publications
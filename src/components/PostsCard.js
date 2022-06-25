import React from 'react';

function PostsCard({post}){
    return(
            <div className="column">
                 <img src = {post.thumbnail} className="postimg" />
                     <div className="card">
                         <h1 className="cardHeader">{post.title}</h1>
                         <p className="cardtext">Posted on: {post.pubDate}</p>
                         <a href={post.link} className="link">Read the Full Blog Here!</a>
                     </div>
               </div>
        
    )
}

export default PostsCard;
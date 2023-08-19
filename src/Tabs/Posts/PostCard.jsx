import React from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import "./PostCard.css"
const PostCard = ({ id, creator, creatorProfile, createdAt, likes, comments, media }) =>
{
    return (
        <div className='postcard'>
            <div className='creator-info'>
                <div className='creator-profile'>
                    <div className='profile-pic'><img src={creatorProfile} alt='creator' /></div>
                    <div className='creator-name'><h4>{creator}</h4></div>
                    <div className='created-at'><p>&nbsp;- 2h</p></div>
                </div>
                <div><MoreHorizIcon /></div>
            </div>

            <div className='post-media'>
                <img src={media} alt={creator} />
            </div>
            <div className='post-actions'></div>
            <div className='post-info'></div>
            <div className='post-comments'></div>
        </div>
    )
}

export default PostCard
import React from 'react'
import PostCard from './PostCard'
import profilepic from '../../Assets/profile.jpg'
const posts = [{ id: 1, creator: "Creator", creatorProfile: profilepic, createdAt: '2h', likes: 23, comments: 4, media: profilepic },
    { id: 2, creator: "Creator", creatorProfile: profilepic, createdAt: '2h', likes: 23, comments: 4, media: profilepic },
    { id: 3, creator: "Creator", creatorProfile: profilepic, createdAt: '2h', likes: 23, comments: 4, media: profilepic },
    { id: 4, creator: "Creator", creatorProfile: profilepic, createdAt: '2h', likes: 23, comments: 4, media: profilepic },
    { id: 5, creator: "Creator", creatorProfile: profilepic, createdAt: '2h', likes: 23, comments: 4, media: profilepic },
]

const Posts = () => {
  return (
      <div>
          {posts.map((post) => (
              <PostCard id={post.id} creator={post.creator} creatorProfile={post.creatorProfile} createdAt={post.createdAt} likes={post.likes} comments={post.comments} media={profilepic}  />
          ))
          }
    </div>
  )
}

export default Posts
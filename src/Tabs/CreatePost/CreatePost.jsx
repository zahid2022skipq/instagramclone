import React from 'react'

import './createPost.css'

import photos_and_videos from '../../Assets/photosandvideos.png'

const CreatePost = ({ setShowCreate }) =>
{
    
    const close = () =>
    {
        setShowCreate(false)
    }
    return (
      <div className='backdrop'>
            <div className='x-button'><button onClick={close}>X</button></div>
      <div className='create-post'>
          <div className='create-post-heading'>
              <h4>Create a post</h4>
        </div>
                <div className='create-post-info'>
                    <div className='create-post-img'><img src={photos_and_videos} alt='photos and videos' /></div>
                    <div className='create-post-info-text'>
                        <h4>Upload your photos and videos</h4>
                    </div>
        </div>
                <div className='create-post-action'>
                    <button>Upload from computer</button>
        </div>
    </div>
      </div>
  )
}

export default CreatePost
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPost } from '../redux/actions/PostAction';

const Post = () => {
  const dispatch = useDispatch()
  const {loading, posts, error} = useSelector((state)=> state.posts);
  
  useEffect(()=>{
    dispatch(fetchPost())
  },[dispatch])

  if(loading) return <p>Loading...</p>

  if(error) return <p>Error: {error}</p>

  return (
    <div>
        <h2>Posts</h2>
        <ul>
            {
                posts.map((post)=>(
                    <li key={post.id}>
                        {post?.title}
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Post
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Blog.css'

const Blog = () => {
    const blogs  = useLoaderData();
    console.log(blogs)
    return (
        <div className='container blog-container'>
            {
                blogs.map((blog,index) => <div className='blog' key={blog.id}>
                    <h2>{index + 1 } . {blog.title}</h2>
                    <p>{blog.body}</p>
                </div>)
            }
        </div>
    );
};

export default Blog;
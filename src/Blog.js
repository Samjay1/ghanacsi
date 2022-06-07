
const Blog = ({blogs,title, deletor}) => {

    return ( 
        <div className="blog-list">
            <h1>{title}</h1>
            {
                blogs.map((blog)=>{
                    return <div className="blog-preview" key={blog.id}>
                                <h2>{blog.title}</h2>
                                <p>Written by {blog.author}</p>
                                <button onClick={()=>{deletor(blog.id)}}>Delete</button>
                            </div>
                })
            }
        </div>
     );
}
 
export default Blog;
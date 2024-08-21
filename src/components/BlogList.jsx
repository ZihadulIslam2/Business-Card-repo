const BlogList = ({blogs,title, handleDelete })=> {
/*     const blogs = prope.blogs;
    const title = prope.title;
    const handleDelete = prope.handleDelete */
    return (
        <div className="flex flex-col text-center p-3">
        <h2 className="text-5xl text-white">{title}</h2>
        {blogs.map ( (blog)=>( //this is prope
            <div className="blog-preveiw border p-4 m-3 bg-slate-400 flex flex-col" key={blog.id}>
                <h2 className="text-2xl text-red-500 ">{blog.title}</h2>
                <p>{blog.skillevel}</p>
                <p>{blog.about}</p>
                <button onClick={() => handleDelete(blog.id)} className="p-3 bg-red-400 m-4">delete blog</button>
            </div>
        ))}
    </div>    
    )
}
export default BlogList;
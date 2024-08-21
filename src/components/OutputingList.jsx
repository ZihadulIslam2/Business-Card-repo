import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const OutputingList = () => {
    const [blogs, SetBlogs] = useState([
        {title: 'HTML', skillevel: 'High', about: 'I have learn html. And practice html many time.', code:'all', id: 1 },
        {title: 'CSS', skillevel: 'Madium', about: 'I have learn CSS. And practice Css many time.',code:'webDev', id: 2 },
        {title: 'JAVASCRIPT', skillevel: 'High', about: 'I have learn Javascript. And practice javascript many time.',code:'webDev', id: 3 }
    ]);

    const [name, SetName ]= useState ('zihadul');

    const handleDelete = (id) => {
        const NewBlogs = blogs.filter (blog => blog.id !== id);
        SetBlogs (NewBlogs);
    }
    useEffect ( () => {
        console.log("useEffect hook is working!");
        console.log(name);
    }, [name]);


    return (
        <div className="home">
            <BlogList blogs={blogs} title= "All Bloges!" handleDelete={handleDelete} />
            {/* <BlogList blogs={blogs.filter ( (blog) => blog.code === 'webDev')} title= "Web Developers!" /> */}
            
            <button onClick={ ()=> SetName('Zihadul Islam Tusher') } className="bg-red-300 p-3 m-4">Full Name</button>
            <p className="text-center text-4xl"> {name} </p>

        </div>
    );
}
export default OutputingList;
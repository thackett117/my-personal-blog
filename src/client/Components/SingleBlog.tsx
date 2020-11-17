import React from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import { blog } from '../types';



const SingleBlog: React.FC<ISingleBlogProps> = (props: ISingleBlogProps) => {
    const [blog, setBlog] = React.useState<blog>({
        id: "",
        name: "",
        content: "",
        title: ""
    });

    React.useEffect(() => {
        (async () => {
            try {
                let res = await fetch(`/api/blogs/${props.match.params.id}`)
                let blog = await res.json();
                setBlog(blog);
            } catch (err) {
                console.log(err)
            }
        })();
    }, [])




    return(
        <div className="container">
        <div className="card shadow-lg m-2">
            <div className="card-body">
                <div className="row">
                    <h5 className="card-title">{blog.title}</h5>
                </div>
                <div className="row">
                    <h6 className="card-subtitle mb-2 text-muted">@{blog.name}</h6>
                </div>
                <div className="row">
                    <p className="card-text">{blog.content}</p>
                </div>
                <div className="row justify-content-between">
                    <Link to="/">
                        <button className="btn btn-sm btn-outline-dark float-right mx-1">Go Back</button>
                    </Link>
                    <Link to={`/blogs/${blog.id}/admin`}>
                        <button className="btn btn-sm btn-outline-dark float-right mx-1">Edit</button>
                    </Link>
                </div>
               
            </div>
        </div>
    </div>
    ) 
}

interface ISingleBlogProps extends RouteComponentProps<{ id: string }> { }

export default SingleBlog;


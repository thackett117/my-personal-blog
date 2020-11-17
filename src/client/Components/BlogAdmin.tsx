import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { blog } from '../types';

const BlogAdmin: React.FC<IBlogAdminProps> = (props: IBlogAdminProps) => {
    const [blog, setBlog] = React.useState<blog>({
        id: "",
        name: "",
        content: ""
    });

    React.useEffect(() => {

    }, [])




    return (
        <h1>Hi</h1>
    )
};


interface IBlogAdminProps extends RouteComponentProps { } ;

export default BlogAdmin;
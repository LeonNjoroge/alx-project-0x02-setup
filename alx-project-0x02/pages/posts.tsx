// import React, {useEffect, useState} from "react";
// import Header from "@/components/layout/Header";
// import { type PostProps } from "@/interfaces";
// import PostCard from "@/components/common/PostCard";
//
// const Posts: React.FC <PostProps> = ({title,}) =>{
//
//
//     const [posts, setPosts] = useState([]);
//
//     useEffect(()=>{
//         fetch("https://my-json-server.typicode.com/typicode/demo/posts")
//             .then(res => res.json())
//             .then((data) => {
//                 const formatted = data.map((post: any) => ({
//                     title: post.title,
//                     content: post.body,
//                     userId: `User-${post.id}`,
//                 }));
//                 setPosts(formatted);
//             });
//         }
//         , []);
//
//     return (
//         <div className="p-10">
//             < Header />
//             <h1>Posts</h1>
//             <div className="flex gap-5">
//                 {posts.map((post: PostProps, idx)=>(
//                     <PostCard key={idx} title={post.title} content={post.content} userId={post.userId} />
//                 ))}
//             </div>
//         </div>
//     );
// };
//
// export default Posts;

// pages/posts.tsx
import React from "react";
import Header from "@/components/layout/Header";
import { type PostProps } from "@/interfaces";
import PostCard from "@/components/common/PostCard";

const Posts: React.FC<{ posts: PostProps[] }> = ({ posts }) => {
    return (
        <div className="p-10">
            <Header />
            <h1>Posts</h1>
            <div className="flex flex-wrap gap-5">
                {posts.map((post, idx) => (
                    <PostCard
                        key={idx}
                        title={post.title}
                        content={post.content}
                        userId={post.userId}
                    />
                ))}
            </div>
        </div>
    );
};

export async function getStaticProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();

    const posts = data.map((post: any) => ({
        title: post.title,
        content: post.body ?? "No content",
        userId: `User-${post.userId}`,
    }));

    return {
        props: {
            posts,
        },
    };
}

export default Posts;

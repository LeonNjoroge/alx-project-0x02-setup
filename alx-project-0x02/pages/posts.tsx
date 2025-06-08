import React from "react";
import Header from "@/components/layout/Header";
import { type PostProps } from "@/interfaces";
import PostCard from "@/components/common/PostCard";

const Posts: React.FC <PostProps> = ({title,}) =>{

    const sitePosts: PostProps[] = [
        {
            title: "First Post",
            content: "This is the content of the first post.",
            userId: 1,
        },
        {
            title: "React Tips",
            content: "Use hooks wisely and split your components properly.",
            userId: 2,
        },
        {
            title: "Weekly Update",
            content: "Finished refactoring the codebase and improved performance.",
            userId: 3,
        },
        {
            title: "UI Overhaul",
            content: "Redesigned the dashboard with Tailwind CSS.",
            userId: 4,
        },
    ];

    return (
        <div className="p-10">
            < Header />
            <h1>Posts</h1>
            <div className="flex gap-5">
                {sitePosts.map((post, idx)=>(
                    <PostCard title={post.title} content={post.content} userId={post.userId} />
                ))}
            </div>
        </div>
    );
};

export default Posts;
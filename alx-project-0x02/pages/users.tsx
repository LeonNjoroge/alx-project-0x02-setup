import React from "react";
import Header from "@/components/layout/Header";
import type {PostProps, UserProps} from "@/interfaces";
import UserCard from "@/components/common/UserCard";

const Users: React.FC <{users: UserProps[]}> = ({users}) => {
    return (
    <div className="p-10">
        <Header />
        <h1>Posts</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {users.map((user: UserProps, idx) => (
                <UserCard key={idx} name={user.name} email={user.email} website={user.website}/>
            ))}
        </div>
    </div>
    );
}

export async function getStaticProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    const users = data.map((user: any) => ({
        name: user.name,
        email: user.email ?? "No content",
        website: user.website,
    }));

    return {
        props: {
            users,
        },
    };
}

export default Users;
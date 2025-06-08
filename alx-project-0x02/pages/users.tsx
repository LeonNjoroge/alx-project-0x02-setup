import React from "react";
import Header from "@/components/layout/Header";
import { type UserProps } from "@/interfaces";
import UserCard from "@/components/common/UserCard";

const Users: React.FC <{users: UserProps[]}> = ({users}) => {
    return (
    <div className="p-10">
        <Header />
        <h1>Users</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {users.map((user: UserProps, idx) => (
                <UserCard key={idx} {...user}/>
            ))}
        </div>
    </div>
    );
}

export async function getStaticProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    const users = data.map((user: any): UserProps => ({
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email ?? "No email",
        address: {
            street: user.address.street,
            suite: user.address.suite,
            city: user.address.city,
            zipcode: user.address.zipcode,
            geo: {
                lat: user.address.geo.lat,
                lng: user.address.geo.lng,
            },
        },
        phone: user.phone,
        website: user.website,
    }));

    return {
        props: {
            users,
        },
    };
}

export default Users;
import React from "react";
import {UserProps} from "@/interfaces";

const UserCard: React.FC <UserProps> =({name, email, website}) => {
    return (
        <div className="flex flex-col gap-3 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md hover:cursor-pointer w-full max-w-sm">
            <h1 className="text-xl font-bold text-gray-800">{name}</h1>
            <h2 className="text-sm text-gray-500">{email}</h2>
            <p className="text-sm text-gray-600">
                <span className="font-medium text-gray-700">Website:</span> {website}
            </p>
        </div>
    );
}
export default UserCard;
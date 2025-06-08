import React from "react";
import {UserProps} from "@/interfaces";

const UserCard: React.FC <UserProps> =({name, username, email, address, phone, website}) => {
    return (
        <div className="flex flex-col gap-3 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md hover:cursor-pointer w-full max-w-sm">
            <h1 className="text-xl font-bold text-gray-800">{name}</h1>
            <h2 className="text-sm text-gray-500">@{username}</h2>
            <p className="text-sm text-gray-600">
                <span className="font-medium text-gray-700">Email:</span> {email}
            </p>
            <p className="text-sm text-gray-600">
                <span className="font-medium text-gray-700">Phone:</span> {phone}
            </p>
            <p className="text-sm text-gray-600">
                <span className="font-medium text-gray-700">Website:</span> {website}
            </p>
            <div className="text-sm text-gray-600">
                <span className="font-medium text-gray-700">Address:</span>{" "}
                {address.street}, {address.suite}, {address.city}, {address.zipcode}
                <br />
                <span className="font-medium text-gray-700">Geo:</span> Lat: {address.geo.lat}, Lng: {address.geo.lng}
            </div>
        </div>
    );
}
export default UserCard;
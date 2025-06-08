// interface page
import React from "react";

export interface CardProps {
        title: string;
        content: string;
}



export interface PostModalProps {
        isOpen: boolean;
        onClose: () => void;
        onSubmit: (data: CardProps) => void;
}

export interface ButtonProps {
        size: Size;
        shape: Shape;
        children: React.ReactNode;
        onClick?: () => void;
}

export interface  PostProps {
        title: string;
        content: string;
        userId: number;
}

export type Size = "small" | "medium" | "large";
export type Shape = "rounded-sm" | "rounded-md" | "rounded-full";




export interface UserProps {
        id:       number;
        name:     string;
        username: string;
        email:    string;
        address:  Address;
        phone:    string;
        website:  string;
}

export interface Address {
        street:  string;
        suite:   string;
        city:    string;
        zipcode: string;
        geo:     Geo;
}

export interface Geo {
        lat: string;
        lng: string;
}
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

export type Size = "small" | "medium" | "large";
export type Shape = "rounded-sm" | "rounded-md" | "rounded-full";
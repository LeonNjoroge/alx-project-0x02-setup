import React from "react";
import {CardProps} from "@/interfaces";

const Card: React.FC <CardProps> = ({title, content} : CardProps) =>{
    return(
        <div className="flex flex-col gap-2 rounded-2xl border border-gray-300 bg-white p-5 shadow-md transition hover:shadow-lg hover:cursor-pointer">
            <h1 className="text-lg font-semibold text-gray-800">{title}</h1>
            <h2 className="text-sm text-gray-600">{content}</h2>
        </div>
    )
}

export default Card;
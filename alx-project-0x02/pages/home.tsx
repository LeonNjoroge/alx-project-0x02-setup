import React from "react";
import {CardProps} from "@/interfaces";
import Card from "@/components/Card";

const Home: React.FC = () =>{

    const CardVals: CardProps[] = [
        {title: "Card 1" , content: "Save the fish" },
        {title: "Card 2" , content: "Save the cats" },
        {title: "Card 3" , content: "Save the dogs" },
        {title: "Card 4" , content: "Save the lions" },
    ]


    return (
        <div className="p-10">
            <h1>Home</h1>
            <div className="flex gap-2 pt-5 justify-between">
                {CardVals.map((value, idx) => (
                    <Card title={value.title} content={value.content} />
                ))}
            </div>

        </div>
    );
}

export default Home;
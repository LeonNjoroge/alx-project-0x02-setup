import React from "react";
import Button from "@/components/common/Button";

const About: React.FC = () =>{

    return (
        <div className="p-10">
            <h1>About</h1>
            <h2>Buttons</h2>
            <div className="flex gap-7">
                <Button size={"small"} shape={"rounded-sm"} >Rounded sm</Button>
                <Button size={"medium"} shape={"rounded-md"} >Rounded md</Button>
                <Button size={"large"} shape={"rounded-full"} >Rounded full</Button>
            </div>

        </div>
    );
}

export default About;
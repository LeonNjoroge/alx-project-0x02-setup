import React, {useState} from "react";
import {CardProps} from "@/interfaces";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import Header from "@/components/layout/Header";

const Home: React.FC = () =>{

    const CardVals: CardProps[] = [
        {title: "Card 1" , content: "Save the fish" },
        {title: "Card 2" , content: "Save the cats" },
        {title: "Card 3" , content: "Save the dogs" },
        {title: "Card 4" , content: "Save the lions" },
    ];

    const [posts, setPosts] = useState<CardProps[]>(CardVals);
    const [isModalOpen, setIsModalOpen] = useState(false);


    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    const handleAddPost = (newPost: CardProps) => {
        setPosts((prev) => [...prev, newPost]);
    };


    return (
        <div className="p-10">
            <Header />

            <h1>Home</h1>
            <div>
                <button
                    onClick={handleOpenModal}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Create Post
                </button>
            </div>
            <div className="flex gap-2 pt-5 justify-between">
                {posts.map((value, idx) => (
                    <Card key={idx} title={value.title} content={value.content} />
                ))}
            </div>

            <PostModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onSubmit={handleAddPost}
            />

        </div>
    );
}

export default Home;
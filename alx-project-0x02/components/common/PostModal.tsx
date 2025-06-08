import React, {useState} from "react";
import { type PostModalProps } from "@/interfaces";

const PostModal: React.FC<PostModalProps> = ({ isOpen, onClose, onSubmit }) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({ title, content });
        setTitle("");
        setContent("");
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-gray-200 bg-opacity-30 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-xl shadow-xl w-[90%] max-w-md">
                <h2 className="text-xl font-bold mb-4">Create Post</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="border rounded p-2"
                        required
                    />
                    <textarea
                        placeholder="Content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="border rounded p-2"
                        required
                    />
                    <div className="flex justify-between mt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                        >
                            Post
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PostModal;
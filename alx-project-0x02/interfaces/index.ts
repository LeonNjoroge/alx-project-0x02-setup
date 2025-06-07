// interface page
export interface CardProps {
        title: string;
        content: string;
}

export interface PostModalProps {
        isOpen: boolean;
        onClose: () => void;
        onSubmit: (data: CardProps) => void;
}
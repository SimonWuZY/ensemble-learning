import { Navbar } from "../documentPage/navbar";

interface ArticleIntroProps {
    author: string;
    data: string;
    label: string;
}

interface ArticleProps {
    id: string;
    title: string;
    introduction: ArticleIntroProps;
    cover?: string
    content: string;
}

const HomePage = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <div className="fixed top-0 left-0 right-0 z-10 h-16 bg-white p-4">
                <Navbar />
            </div>
        </div>
    );
}

export default HomePage;
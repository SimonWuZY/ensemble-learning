"use client"
import { NavigationMenuTool } from "@/components/navigation-tool";
import { HomeNavBar } from "./home-nav-bar";
import BottomNavBar from "../../components/bottom-narbar";
import { HomeLabels } from "./home-labels";

interface ArticleIntroProps {
    author: string;
    data: string;
    label: string;
}

interface ArticleProps {
    id: string;
    title: string;
    introduction: ArticleIntroProps;
    cover?: string;
    content: string;
}

const HomePage = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <div className="fixed top-0 left-0 right-0 z-10 h-16 bg-white p-4">
                <HomeNavBar />
                <HomeLabels />

            </div>
            {/* 文章 */}
            {/* 悬浮框 */}
            <NavigationMenuTool />
            {/* 底部导航栏 */}
            <BottomNavBar />
        </div>
    );
};

export default HomePage;
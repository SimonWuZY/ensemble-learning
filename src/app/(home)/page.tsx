import React from 'react';
import HomeNavBar from './home-navbar';
import BottomNavBar from '@/components/bottom-narbar';
import ArticlesOverview from './articles';

const exampleArticles = [
    {
        id: 'jh773dqs84hhj8e13xc68zqv2d77b2v9',
        title: 'First Article',
        introduction: {
            author: 'Author One',
            data: '2023-10-01',
            label: 'Introduction to First Article',
            likeNumber: 10,
            commentNumber: 5,
        },
        cover: 'https://via.placeholder.com/150',
        content: 'This is the content of the first article.',
    },
    {
        id: '2',
        title: 'Second Article',
        introduction: {
            author: 'Author Two',
            data: '2023-10-02',
            label: 'Introduction to Second Article',
            likeNumber: 20,
            commentNumber: 10,
        },
        cover: 'https://via.placeholder.com/150',
        content: 'This is the content of the second article.',
    },
    {
        id: '3',
        title: 'Third Article',
        introduction: {
            author: 'Author Three',
            data: '2023-10-03',
            label: 'Introduction to Third Article',
            likeNumber: 30,
            commentNumber: 15,
        },
        cover: 'https://via.placeholder.com/150',
        content: 'This is the content of the third article.',
    },
    {
        id: '4',
        title: 'Second Article',
        introduction: {
            author: 'Author Two',
            data: '2023-10-02',
            label: 'Introduction to Second Article',
            likeNumber: 20,
            commentNumber: 10,
        },
        cover: 'https://via.placeholder.com/150',
        content: 'This is the content of the second article.',
    },
];

const HomePage = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <div className="fixed top-0 left-0 right-0 z-10 h-16 bg-white p-4">
                <HomeNavBar />
            </div>
            <div className="mt-16 p-4">
                <ArticlesOverview articles={exampleArticles} />
            </div>
            <div className="fixed bottom-0 left-0 right-0 z-10 h-16 bg-white p-4">
                <BottomNavBar />
            </div>
        </div>
    );
};

export default HomePage;
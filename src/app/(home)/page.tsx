import React from 'react';
import HomeNavBar from './home-navbar';
import BottomNavBar from '@/components/bottom-narbar';
import ArticlesOverview from './articles';

const exampleArticles = [
    {
        id: 'jh773dqs84hhj8e13xc68zqv2d77b2v9',
        title: '高等数学一笔记',
        introduction: {
            author: '小明同学',
            data: '2024-10-01',
            label: '高等笔记，包括一些基本定理',
            likeNumber: 10,
            commentNumber: 5,
        },
        cover: 'cover1.jpg',
        content: 'This is the content of the first article.',
    },
    {
        id: 'jh7ey6e13170pp98ptz3ajff0177gh13',
        title: 'Dart开发简介',
        introduction: {
            author: '智合校园开发团队',
            data: '2024-12-31',
            label: '为初学者提供的 Dart 语言开发简介',
            likeNumber: 20,
            commentNumber: 10,
        },
        cover: '/cover2.png',
        content: 'This is the content of the second article.',
    },
    {
        id: 'jh7ey6e13170pp98ptz3ajff0177gh14',
        title: '机器学习入门',
        introduction: {
            author: '小李同学',
            data: '2024-05-20',
            label: '机器学习入门教程',
            likeNumber: 30,
            commentNumber: 15,
        },
        cover: 'cover3.png',
        content: 'This is the content of the third article.',
    },
    {
        id: 'jh7ey6e13170pp98ptz3ajff0177gh15',
        title: 'Web开发基础',
        introduction: {
            author: '小王同学',
            data: '2023-11-15',
            label: '介绍HTML、CSS和JavaScript',
            likeNumber: 25,
            commentNumber: 12,
        },
        cover: 'cover4.jpg',
        content: 'This is the content of the fourth article.',
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
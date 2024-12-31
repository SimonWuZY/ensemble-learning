export interface ArticleIntroProps {
    author: string;
    data: string;
    label: string;
    likeNumber: number;
    commentNumber: number;
}

export interface ArticleProps {
    id: string;
    title: string;
    introduction: ArticleIntroProps;
    cover?: string;
    content: string;
}
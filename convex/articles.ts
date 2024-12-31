import { ConvexError, v } from "convex/values";
import { query } from "./_generated/server";

export const getAllArticles = query({
    handler: async (ctx) => {
        const articles = await ctx.db.query('articles').collect();
        return articles.map(article => ({
            id: article._id,
            title: article.title,
            introduction: article.introduction,
            cover: article.cover,
            content: article.content,
        }));
    }
});

export const getArticleById = query({
    args: { id: v.id("articles") },
    handler: async (ctx, { id }) => {
        const article = await ctx.db.get(id);
        console.log('1231231321');
        if (!article) {
            throw new ConvexError('Article not found');
        }
        return article;
    }
});
import { ConvexError, v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const createDocument = mutation({
    args: { title: v.optional(v.string()), initialContent: v.optional(v.string()) },
    handler: async (ctx, args) => {
        const user = await ctx.auth.getUserIdentity();

        if (!user) {
            throw new ConvexError("Unathorized");
        }

        return await ctx.db.insert("documents", {
            title: args.title ?? "未命名的文档",
            ownerId: user.subject,
            initialContent: args.initialContent,
        });
    },
})

export const getDocuments = query({
    handler: async (ctx) => {
        return await ctx.db.query("documents").collect();

    },
});
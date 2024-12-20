import { ConvexError, v } from "convex/values";
import { paginationOptsValidator } from "convex/server"
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
    args: { paginationOpts: paginationOptsValidator, },
    handler: async (ctx, args) => {
        return await ctx.db.query("documents").paginate(args.paginationOpts);
    },
});

export const removeDocumentById = mutation({
    args: { id: v.id("documents") },
    handler: async (ctx, args) => {
        const user = await ctx.auth.getUserIdentity();

        if (!user) {
            throw new ConvexError("Unauthorized");
        }

        const document = await ctx.db.get(args.id);

        if (!document) {
            throw new ConvexError("Document not found");
        }

        const isOwner = document.ownerId === user.subject;

        if (!isOwner) {
            throw new ConvexError("Unauthorized");
        }

        return await ctx.db.delete(args.id);
    }
})

export const updateDocumentById = mutation({
    args: { id: v.id("documents"), title: v.string() },
    handler: async (ctx, args) => {
        const user = await ctx.auth.getUserIdentity();

        if (!user) {
            throw new ConvexError("Unauthorized");
        }

        const document = await ctx.db.get(args.id);

        if (!document) {
            throw new ConvexError("Document not found");
        }

        const isOwner = document.ownerId === user.subject;

        if (!isOwner) {
            throw new ConvexError("Unauthorized");
        }

        return await ctx.db.patch(args.id, { title: args.title });
    }
})
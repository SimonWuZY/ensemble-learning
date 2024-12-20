"use server"

import { auth, clerkClient } from "@clerk/nextjs/server";

export async function getUsers() {
    const { sessionClaims } = await auth();
    const clerk = await clerkClient();

    const response = await clerk.users.getUserList({
        organizationId: [sessionClaims?.org_id as string],

    });

    const users = response.data.map((user) => ({
        id: user.id,
        name: user.username ?? user.primaryEmailAddress?.emailAddress ?? "匿名用户",
        avatar: user.imageUrl,
    }))

    return users;
}
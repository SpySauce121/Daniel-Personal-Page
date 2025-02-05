"use server";

import { prisma } from "@/app/api/auth/[...nextauth]/prisma";

// Function to retrieve all posts, sorted by creation date with user data included
export const getAllPosts = async () => {
  try {
    return await prisma.post.findMany({
      orderBy: { createdAt: "desc" },
      include: { user: true },
    });
  } catch (error) {
    console.error("Failed to load all posts:", error);
    throw error;
  }
};

// Function to retrieve posts by specific user ID, sorted by creation date
export const getPostsByUser = async (userId: string) => {
  try {
    return await prisma.post.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
    });
  } catch (error) {
    console.error("Failed to load posts by user:", error);
    throw error;
  }
};

// Function to create a new post with optional description
export const addNewPost = async (userId: string, image: string, description?: string) => {
  try {
    const post = await prisma.post.create({
      data: {
        userId,
        image,
        description,
      },
    });
    return post;
  } catch (error) {
    console.error("Failed to add new post:", error);
    throw error;
  }
};


import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../libs/api";

export interface Post {
  id: string;
  title: string;
  createdAt: Date;
  content: string;
  issueNumber: number;
}

interface PostsContextType {
  posts: Post[];
  selectedPost?: Post | null;
  selectPost: (post: Post) => void;
}

export const PostsContext = createContext({} as PostsContextType);

interface PostsProviderProps {
  children: ReactNode;
}

export function PostsProvider({ children }: PostsProviderProps) {
  const [posts, setPosts] = useState<Post[]>([]);

  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  async function fetchPosts() {
    const response = await api.get("/search/issues", {
      params: {
        q: "repo:rocketseat-education/reactjs-github-blog-challenge",
      },
    });

    setPosts(
      response.data.items.map((issue) => {
        return {
          id: issue.id,
          title: issue.title,
          createdAt: new Date(issue.created_at),
          content: issue.body,
          issueNumber: issue.number,
        };
      })
    );
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  function selectPost(post: Post): void {
    setSelectedPost(post);
  }

  return (
    <PostsContext.Provider
      value={{
        posts,
        selectedPost,
        selectPost,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
}

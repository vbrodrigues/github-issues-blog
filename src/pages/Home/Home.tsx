import { useContext } from "react";
import { PostsContext } from "../../contexts/PostsContext";
import { PostCard } from "./components/PostCard/PostCard";
import { Profile } from "./components/Profile/Profile";
import {
  Feed,
  HomeContainer,
  SearchContainer,
  SearchForm,
  SearchHeader,
} from "./Home.styles";

export function Home() {
  const { posts } = useContext(PostsContext);

  return (
    <HomeContainer>
      <Profile />

      <SearchContainer>
        <SearchHeader>
          <h3>Publicações</h3>
          <span>
            {posts.length} {posts.length === 1 ? "publicação" : "publicações"}
          </span>
        </SearchHeader>

        <SearchForm>
          <input type="text" placeholder="Buscar conteúdo" />
        </SearchForm>
      </SearchContainer>

      <Feed>
        {posts.map((post) => {
          return (
            <PostCard
              key={post.id}
              content={post.content}
              title={post.title}
              createdAt={post.createdAt}
              issueNumber={post.issueNumber}
            />
          );
        })}
      </Feed>
    </HomeContainer>
  );
}

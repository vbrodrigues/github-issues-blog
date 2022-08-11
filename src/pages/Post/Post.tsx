import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faCalendar,
  faChevronLeft,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { NavLink, useParams } from "react-router-dom";
import { api } from "../../libs/api";
import { dateFormatter } from "../../utils/formatters";
import {
  PostContainer,
  PostContent,
  PostInfo,
  PostTitle,
  PostInfoFooter,
  PostInfoHeader,
} from "./Post.styles";

interface Issue {
  id: number;
  author: string;
  comments: number;
  content: string;
  createdAt: Date;
  issueNumber: number;
  githubUrl: string;
  title: string;
}

export function Post() {
  const { issueNumber } = useParams();

  const [post, setPost] = useState<Issue>({} as Issue);

  async function fetchIssue() {
    const response = await api.get(
      `/repos/rocketseat-education/reactjs-github-blog-challenge/issues/${issueNumber}`
    );

    console.log(response.data);

    setPost({
      id: response.data.id,
      author: response.data.user.login,
      comments: response.data.comments,
      content: response.data.body,
      createdAt: new Date(response.data.created_at),
      issueNumber: response.data.number,
      title: response.data.title,
      githubUrl: response.data.html_url,
    });
  }

  useEffect(() => {
    fetchIssue();
  }, []);

  console.log(post);

  let formattedCreatedAt = "";
  if (post.createdAt) {
    formattedCreatedAt = dateFormatter(post.createdAt);
    formattedCreatedAt =
      formattedCreatedAt.charAt(0).toUpperCase() + formattedCreatedAt.slice(1);
  }

  return (
    <PostContainer>
      <PostInfo>
        <PostInfoHeader>
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <span>
              <FontAwesomeIcon
                icon={faChevronLeft}
                size="lg"
                style={{ color: "#3294F8" }}
              />
              <span>VOLTAR</span>
            </span>
          </NavLink>

          <a href={post.githubUrl} target="_blank" rel="noreferrer">
            <button>
              <span>GITHUB</span>
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                size="lg"
                style={{ color: "#3294F8" }}
              />
            </button>
          </a>
        </PostInfoHeader>

        <PostTitle>
          <h2>{post.title}</h2>
        </PostTitle>

        <PostInfoFooter>
          <span>
            <FontAwesomeIcon
              icon={faGithub}
              size="lg"
              style={{ color: "#3A536B" }}
            />
            {post.author}
          </span>

          <span>
            <FontAwesomeIcon
              icon={faCalendar}
              size="lg"
              style={{ color: "#3A536B" }}
            />
            {formattedCreatedAt}
          </span>

          <span>
            <FontAwesomeIcon icon={faComment} style={{ color: "#3A536B" }} />
            {post.comments} comentários
          </span>
        </PostInfoFooter>
      </PostInfo>

      <PostContent>
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </PostContent>
    </PostContainer>
  );
}

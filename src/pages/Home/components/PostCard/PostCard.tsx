import { NavLink } from "react-router-dom";
import { dateFormatter } from "../../../../utils/formatters";
import { PostCardContainer } from "./PostCard.styles";

interface PostCardProps {
  title: string;
  createdAt: Date;
  content: string;
  issueNumber: number;
}

export function PostCard({
  title,
  createdAt,
  content,
  issueNumber,
}: PostCardProps) {
  let formattedCreatedAt = dateFormatter(createdAt);
  formattedCreatedAt =
    formattedCreatedAt.charAt(0).toUpperCase() + formattedCreatedAt.slice(1);

  return (
    <NavLink to={`/posts/${issueNumber}`} style={{ textDecoration: "none" }}>
      <PostCardContainer>
        <div>
          <header>
            <h3>{title}</h3>
            <span>{formattedCreatedAt}</span>
          </header>

          <p>{content}</p>
        </div>
      </PostCardContainer>
    </NavLink>
  );
}

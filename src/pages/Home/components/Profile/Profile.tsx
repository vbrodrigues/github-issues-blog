import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import {
  ProfileContainer,
  ProfileContent,
  ProfileFooter,
  ProfileHeader,
  ProfileInfo,
} from "./Profile.styles";
import { useEffect, useState } from "react";
import { api } from "../../../../libs/api";

interface User {
  id: number;
  name: string;
  avatarUrl: string;
  githubUrl: string;
  username: string;
  bio: string;
  company?: string;
  followers: number;
}

export function Profile() {
  const [user, setUser] = useState<User>({} as User);

  async function fetchUser() {
    const response = await api.get("/users/vbrodrigues", {
      headers: {
        Authorization: `Bearer `,
        "Content-Type": "application/json",
      },
    });

    setUser({
      id: response.data.id,
      name: response.data.name,
      avatarUrl: response.data.avatar_url,
      githubUrl: response.data.html_url,
      username: response.data.login,
      company: response.data.company,
      bio: response.data.bio,
      followers: response.data.followers,
    });
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <ProfileContainer>
      <img src={user.avatarUrl} alt="" />
      <ProfileInfo>
        <ProfileHeader>
          <h2>{user.name}</h2>
          <a href={user.githubUrl} target="_blank" rel="noreferrer">
            <button>
              <span>GITHUB</span>
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                size="lg"
                style={{ color: "#3294F8" }}
              />
            </button>
          </a>
        </ProfileHeader>

        <ProfileContent>
          {user.bio ? (
            <p>{user.bio}</p>
          ) : (
            <p>Este usuário não possui uma descrição.</p>
          )}
        </ProfileContent>

        <ProfileFooter>
          <span>
            <FontAwesomeIcon
              icon={faGithub}
              size="lg"
              style={{ color: "#3A536B" }}
            />
            {user.username}
          </span>

          {user.company && (
            <span>
              <FontAwesomeIcon
                icon={faBuilding}
                size="lg"
                style={{ color: "#3A536B" }}
              />
              {user.company}
            </span>
          )}

          <span>
            <FontAwesomeIcon icon={faUserGroup} style={{ color: "#3A536B" }} />
            {user.followers} seguidores
          </span>
        </ProfileFooter>
      </ProfileInfo>
    </ProfileContainer>
  );
}

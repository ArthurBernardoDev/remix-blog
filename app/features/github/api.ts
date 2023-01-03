import invariant from "tiny-invariant";

export const getGithubUser = async (username?: string) => {
  invariant(username, "please provide an username as a string");

  const res = await fetch(`https://api.github.com/users/${username}`);

  const { login, avatar_url, html_url, bio } = await res.json();
  return {
    login,
    avatar_url,
    html_url,
    bio,
  };
};

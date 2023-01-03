import { LoaderFunction, useLoaderData } from "remix";
import { Api, LoaderData, GithubContainer } from "~/features/github";

export const loader: LoaderFunction = async ({ params }) => {
  return {
    user: await Api.getGithubUser(params.username),
  };
};

export function ErrorBoundary() {
  return <h3>Whoops! </h3>;
}

export default function () {
  const { user } = useLoaderData<LoaderData>();

  return <GithubContainer user={user} />;
}

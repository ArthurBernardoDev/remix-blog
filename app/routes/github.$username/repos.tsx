import { LoaderFunction } from "remix";
import { Api } from "~/features/github";

export const loader: LoaderFunction = async ({ params }) => {
  return {
    user: await Api.getGithubUser(params.username),
  };
};
export function ErrorBoundary() {
  return <h3>Whoops! </h3>;
}

export default function () {
  return <h3>repos</h3>;
}

import { useRouteError, isRouteErrorResponse } from "react-router-dom";

const RootErrorPage = () => {
  const error = useRouteError();

  if (!isRouteErrorResponse(error))
    throw new Error("An unexpected error occurred");
  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.data}</i>
      </p>
    </div>
  );
};

export default RootErrorPage;

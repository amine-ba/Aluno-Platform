import React from "react";
import { useSession } from "next-auth/client";
import { Container, Header, Main, Footer, Cards } from "@components";

const Protected: React.FC = () => {
  const [session, loading] = useSession();
  if (loading) return null;
  if (!loading && !session) return <p>Access Denied</p>;

  return (
    <>
      <h1>Protected Page</h1>
      <p>You can view this page because you are signed in.</p>
    </>
  );
};

export default Protected;

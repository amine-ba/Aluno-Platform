import React from "react";
import { useSession, getSession } from "next-auth/client";

import { Container, Header, Main, Footer, Cards } from "@components";

const Server: React.FC = () => {
  const [session, loading] = useSession();

  if (typeof window !== "undefined" && loading) return null;

  if (session) {
    return (
      <>
        <h1>Protected Page</h1>
        <p>You can view this page because you are signed in.</p>
      </>
    );
  }
  return <p>Access Denied</p>;
};

export default Server;
export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: { session },
  };
}

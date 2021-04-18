import React from "react";

import { Container, Header, Main, Footer, Cards } from "@components";
import { useSession } from "next-auth/client";

const Client: React.FC = () => {
  return (
    <Container>
      <Header />
      <Main />
      <Cards />
      <Footer />
    </Container>
  );
};

export default Client;

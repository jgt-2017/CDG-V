import React from "react";
import { Container } from "reactstrap";

export default function SingleLayout(props) {
  const { children } = props;

  return (
    <Container fluid className="page-single bg-gradient-primary">
      {children}
    </Container>
  );
}

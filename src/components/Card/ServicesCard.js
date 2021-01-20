import React from "react";
import { Card } from "react-bootstrap";
import empty from "../../images/empty.svg";

export default function ServicesCard({ content, viewMoreLink }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card style={{ width: "22rem" }}>
      <Card.Body>
        <Card.Title>
          <img src={empty} alt="empty" />
        </Card.Title>
        <Card.Text>{content}</Card.Text>
        <Card.Link href={viewMoreLink}>View More</Card.Link>
      </Card.Body>
    </Card>
  );
}

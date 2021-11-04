import React from "react";
import { Card } from "react-bootstrap";
import "./servicescard.scss";
export default function ServicesCard({caption, content, viewMoreLink,viewMoreLabel }) {
 
  

  return (
    <Card className="servicescard">
      <Card.Body>
        <h4 className="text-inner">{caption}</h4>
        <Card.Text>{content}</Card.Text>
        <Card.Link href={viewMoreLink}>{viewMoreLabel}</Card.Link>
      </Card.Body>
    </Card>
  );
}

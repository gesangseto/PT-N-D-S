/* This example requires Tailwind CSS v2.0+ */
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function LinkButton(props) {
  let navigate = useNavigate();
  const { textColor, title } = props;

  return (
    <>
      <Button size="sm" {...props}>
        {title ?? "No Title"}
      </Button>
    </>
  );
}

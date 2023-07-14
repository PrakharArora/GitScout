import React from "react";
import { Button } from "@material-tailwind/react";

function utilities({head}) {
  return (
      <Button variant="text" className=" gap-2 top-40 right-20 ">
        {head}
      </Button>
  );
}

export default utilities;

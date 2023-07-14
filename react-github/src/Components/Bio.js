import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
  import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
  import { Avatar } from "@material-tailwind/react";
  import classes from "../Components/module.style.css";
import { Children } from "react";

  function Bio({title , Children}){
      
    return(
        <>
         <Typography variant="h4" className="ml-6 bg-[#ffffff]" color="blue-gray ">
              {title}
            </Typography>
            <Typography  className="font-normal mb-8 ml-6 bg-[#ffffff]">
              {Children}
            </Typography>
        </>
    )
  }
  export default Bio;
  
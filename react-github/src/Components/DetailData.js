import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
const DetailData = ({ email, location, id, gist, type, nodeid , SiteAdmin , LatUpdated ,  Company}) => {
  return (
    <>
      <div className="flex justify-between bg-[#ffffff] mt-4">
        <div className="bg-[#ffffff] flex">
        <Typography variant="p" className="ml-2 bg-[#ffffff]" color="blue">
        <div className="flex bg-[#ffffff]"><p style={{color: "black" }} className=" bg-[#ffffff]   "> Email: Null</p>
</div>
        </Typography>
        </div>  
        <div className="bg-[#ffffff]">
        <Typography variant="p" className=" bg-[#ffffff]" color="blue">
        <div className="flex bg-[#ffffff]"><p style={{color: "black" }} className=" bg-[#ffffff]   "> Id:</p>
 {id}</div>
        </Typography>
        </div>
        <div className="w-150 bg-[#ffffff] mr-8">
      <Typography variant="p" className=" bg-[#ffffff]" color="blue">
      <div className="flex bg-[#ffffff]"><p style={{color: "black" }} className=" bg-[#ffffff]   "> Location:</p>
 {location}</div>
      </Typography>
      </div>
     
        </div>
        <div className="flex justify-between  bg-[#ffffff]  mt-4">
        <div className="bg-[#ffffff] ">
        <Typography variant="p" className="ml-2  bg-[#ffffff]" color="blue">
        <div className="flex bg-[#ffffff]"><p style={{color: "black" }} className=" bg-[#ffffff]   ">Company:</p>
  {SiteAdmin} </div>
        </Typography>
        </div>  
        <div className=" bg-[#ffffff]">
        <Typography variant="p" className="mx-8 bg-[#ffffff]" color="blue">
        <div className="flex bg-[#ffffff]"><p style={{color: "black" }} className=" bg-[#ffffff] mx-2  ">Last Updated:</p>
 {LatUpdated}</div>
        </Typography>
        </div>
        </div>

        <div className="flex justify-between bg-[#ffffff] mt-4">
        <div className="bg-[#ffffff] flex">
        <Typography variant="p" className="ml-2 bg-[#ffffff]" color="blue">
        <div className="flex bg-[#ffffff]"><p style={{color: "black" }} className=" bg-[#ffffff]   "> Gist:</p>
{gist} </div>
        </Typography>
        </div>  
        <div className="bg-[#ffffff]">
        <Typography variant="p" className=" bg-[#ffffff]" color="blue">
        <div className="flex bg-[#ffffff]"><p style={{color: "black" }} className=" bg-[#ffffff]   "> Type:</p>
 {type} </div>
        </Typography>
        </div>
        <div className="w-150 bg-[#ffffff] mr-8">
      <Typography variant="p" className=" bg-[#ffffff]" color="blue">
      <div className="flex bg-[#ffffff]"><p style={{color: "black" }} className=" bg-[#ffffff]  mx-2 "> Node Id:</p>
{nodeid}</div>
      </Typography>
      </div>
     
        </div>
      
    </>
  );
};
export default DetailData;

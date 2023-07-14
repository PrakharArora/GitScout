import React from "react";
import { Card, Typography } from "@material-tailwind/react";

const Manages = ({ Followers, Following, Repos }) => {
  return (
    <>
      <div className="justify-around mx-4 bg-[#ffffff] mt-6">
        <div className="flex mx-4 bg-[#ffffff]">
          <Typography
            variant="h6"
            color="blue"
            value="UserName"
            className="mx-2 bg-[#ffffff]"
          >
            Followers
          </Typography>
          <Typography
            variant="h6"
            color="blue"
            value="UserName"
            className="mx-2 bg-[#ffffff]"
          >
            Following
          </Typography>
          <Typography
            variant="h6"
            color="blue"
            value="UserName"
            className="mx-2 bg-[#ffffff]"
          >
            Repositories
          </Typography>
        </div>
        <div className="flex justify-around bg-[#ffffff]">
          <div className="h-full">
            <Typography
              variant="h4"
              color="blue"
              value="UserName"
              className="bg-[#ffffff]"
            >
              {Followers}
            </Typography>
          </div>
          <div>
            <Typography
              variant="h4"
              color="blue"
              value="UserName"
              className="bg-[#ffffff]"
            >
              {Following}
            </Typography>
          </div>
          <div>
            <Typography
              variant="h4"
              color="blue"
              value="UserName"
              className="flex items-center bg-[#ffffff]"
            >
              {Repos}
            </Typography>
            </div>
          </div>
        </div>
    </>
  );
};

export default Manages;

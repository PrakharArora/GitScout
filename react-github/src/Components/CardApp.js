import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { ColorRing } from "react-loader-spinner";
import { Avatar } from "@material-tailwind/react";
import Bio from "../Components/Bio";
import Manages from "../Components/Manages";
import { useEffect, useState } from "react";
import DetailData from "./DetailData";
function CardApp() {
  const [users, setUsers] = useState("");
  const [inputText, setInputText] = useState("");
  const [error, setError] = useState("");
  const [bio, setBio] = useState(null);
  const [userName, setUserName] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const [createdDate, setCreatedDate] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${users}`)
      .then((result) => {
        if (result.status === 404) {
          throw new Error("User Not Found");
        }
        setAvatar(true);
        setBio(true);
        setUserName(true);
        setCreatedDate(true);
        return result.json();
      })
      .then((value) => {
        setUsers(value);
        console.log(value);
      })
      .catch((error) => {
        setError(error.message);
        console.log(error);
      });
  }, [users]);

  function callUsers(event) {
    setInputText(event.target.value);
  }

  function onSubmit() {
    setUsers(inputText);
  }

  return (
    <>
      <div className="bg-[#e3f2fd]">
        <div className="searchBar">
          <div className="flex space-x-4" id="box">
            <input
              type="text"
              className="block px-4 py-2 text-purple-700 bg-white border rounded-full focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Search..."
              id="Search"
              value={inputText}
              onChange={callUsers}
            />
            <button
              className="px-4  bg-purple-600 rounded-full"
              onClick={onSubmit}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 bg-transparent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
        
        <div class="flex justify-center h-screen  ">
          
          <Card className="w-[48rem] h-[12rem] bg-[#ffffff]">

            {avatar ? (
              <Avatar
                src={users.avatar_url}
                alt="avatar"
                size="xxl"
                className="ml-8 mt-16"
              />
            ) : (
              <>
                {" "}
                <Avatar
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1760&amp;q=80"
                  alt="avatar"
                  size="xxl"
                  className="ml-8 mt-6"
                />
              </>
            )}
            

           
            <CardBody className="bg-[#ffffff]">
            <div className="grid place-items-end bg-[#ffffff] absolute right-0 top-0 px-16 mt-12 px-4">
              <Manages Followers={users.followers} Following={users.following} Repos= {users. public_repos} />
            </div>
            <Typography
                  variant="h6"
                  color="blue"
                  value="UserName"
                  className="bg-[#ffffff]"
                />                             
                
               
              {userName ? (
                <Typography
                  variant="h6"
                  color="blue"
                  value="UserName"
                  className="  ml-6 mt-4 mx-2   bg-[#ffffff]"
                >                             
               
           <div className="w-0 flex "><p style={{color: "black" }} className=" bg-[#ffffff] mx-2  ">UserName:</p>
           {users.login}
             </div> 
                  
                </Typography>
              
              ) : (
                <>
                  <Typography
                    variant="h6"
                    color="blue"
                    value="UserName"
                    className="  ml-6 mt-4   bg-[#ffffff]"
                  >
                    UserName:
                  </Typography>
                </>
              )}
              {userName ? (
                <Typography
                  variant="h6"
                  color="blue"
                  value="UserName"
                  className=" mt-4 mx-2   bg-[#ffffff]"
                >
                <div className="flex bg-[#ffffff]"><p style={{color: "black" }} className="bg-[#ffffff] mx-2 ">Name:</p>
                {users.name}
                </div>
                </Typography>
              ) : (
                <>
                  <Typography
                    variant="h6"
                    color="blue"
                    value="UserName"
                    className="  ml-6 mt-4  bg-[#ffffff] "
                  >
                    Name:
                  </Typography>
                </>
              )}
           <div className="w-100 flex justify-end bg-transparent"><p style={{color: "black" }} className=" bg-[#ffffff] text-right mx-2  ">User Created:</p>
           </div>

              {createdDate ? (
                <Typography
                  variant="h6"
                  color="blue"
                  value="UserName"
                  className="uppercase mb-1 ml-2 text-right bg-[#ffffff]"
                >
                  {users.created_at}
                </Typography>
              ) : (
                <>
                  <Typography
                    variant="h6"
                    color="blue"
                    value="UserName"
                    className="uppercase mb-1 ml-2 text-right bg-[#ffffff]"
                  >
                    Created Date
                  </Typography>
                </>
              )}

              <br />
              <Bio title="Bio" Children={users.bio} />
              <div id="card2" className="bg-[#ffffff]">
                <Card className=" w-[35rem] h-[10rem] bg-[#ffffff] ">
                  
                 <DetailData 
                  email={users.email} 
                  location={users.location}
                  id = {users.id}
                  gist={users.public_gists}
                  nodeid={users.node_id}
                  type={users.type}
                  SiteAdmin={users.company}
                  LatUpdated={users.updated_at}
                  />
                 
                 </Card>
                 
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
}
export default CardApp;

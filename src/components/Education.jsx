import { Card, CardBody, Typography, Avatar } from "@material-tailwind/react";
import { FaSchool } from "react-icons/fa6";
const Education = [
    {
        name: "High School",
        email: "Avadh International School",
        price: 2019,
       
      },

  {
    name: "Intermediate",
    email: "Avadh International School",
    price: 2021,
   
  },
  
  {
    name: "Bachelor of Technology",
    email: "University of Lucknow",
    price: 2026,
  
  },
 
];
 
export function MyEducation() {
  return (
    <Card className="w-full bg-inherit border-2 border-orange-600  lg:w-[500px] xl:w-[580px] p-3   shadow-lg hover:shadow-orange-950 hover:shadow-xl  transition-shadow duration-300 ease-in-out cursor-pointer ">
      <CardBody>
        <div className="mb-4 flex items-center justify-between ">
          
          <Typography variant="h5" color="" >
           Education
           
          </Typography>
         
          <Typography
            as="a"
            href="#"
            variant="small"
            color=""
            className="font-bold"
          >
           Completion Year 
          </Typography>
          
        </div>
        <div className="divide-y divide-blue-200">
          {Education.map(({ name, email, price}, index) => (
            <div
              key={index}
              className="flex items-center justify-between pb-3 pt-3 last:pb-0"
            >
              <div className="flex items-center gap-x-3">
        <FaSchool className="text-orange-500" />
                <div>
                  <Typography color="orange" variant="h6">
                    {name}
                  </Typography>
                  <Typography variant="small"  className="hover:text-orange-200">
                    {email}
                  </Typography>
                </div>
              </div>
              <Typography color="" variant="h6">
                {price}
              </Typography>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
}


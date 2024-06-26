import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from "./ui/card";
import { Github, Link2Icon } from "lucide-react";
import { Badge } from "./ui/badge";

const ProjectCard = ({ project }) => {

  const { category, image, name, description, link, github } = project;

  return (
    <Card className="group overflow-hidden">
      <CardHeader className="p-0 m">
        {/* Image */}
        <div className="relative w-full h-[300px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:dark:bg-work_project_bg_dark xl:bg-[110%] xl:bg-no-repeat overflow-hidden">
          <Image className="absolute bottom-0 shadow-2xl" src={image} width={247} height={250} alt="" priority />
          {/* Buttons Links*/}
          <div className="flex gap-x-4">
            <Link href={link} className="bg-[#1F2937] w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200" target="_blank">
              <Link2Icon className="text-white" />
            </Link>
            <Link href={github} className="bg-[#1F2937] w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200" target="_blank">
              <Github className="text-white" />
            </Link>
          </div>
        </div>
      </CardHeader>
      <div className="h-full px-8 py-6" >
        <Badge className="uppercase text-sm font-medium mb-2 absolute top-4 left-5">{category}</Badge>
        <h4 className="h4 mb-1">{name}</h4>
        <p className="text-muted-foreground text-lg">{description}</p>
      </div>
    </Card>
  );
};

export default ProjectCard;
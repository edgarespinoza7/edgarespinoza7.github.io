import { Blocks, LayoutDashboard, FileTerminal } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const servicesData = [
  {
    icon: <LayoutDashboard size={72} strokeWidth={0.8}/>,
    title: "Web Design",
    description: "I value simple content structure, clean design patterns, and careful interactions."
  },
  {
    icon: <FileTerminal size={72} strokeWidth={0.8}/>,
    title: "Web Development",
    description: "I love to code websites from scratch, and enjoy bringing ideas to life in the browser."
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8}/>,
    title: "App Development",
    description: "I enjoy using the latest JavaScript frameworks and libraries to create dynamic web apps."
  },
]

const Services = () => {
  return (
    <section className="mb-12 xl:mb-36 xl:mt-36">
      <div className="container mx-auto">
        <h2 className="section-title mb-20 xl:mb-24 text-center mx-auto">My Services</h2>
        {/* Grid Items */}
        <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
          {servicesData.map((item, index) => {

            const {icon, title, description} = item;

            return (
              <Card className="w-full mmax-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative" key={index}>
                <CardHeader className="text-primary absolute -top-[60px]">
                  <div className="w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center">{icon}</div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="mb-4">{title}</CardTitle>
                  <CardDescription className="text-lg">{description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services;
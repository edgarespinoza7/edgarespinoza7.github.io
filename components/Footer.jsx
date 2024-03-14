import Socials from "./Socials";

const Footer = () => {

  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto">
      <div className="flex flex-col items-center justify-between">
           {/* Socials */}
        <Socials
          containerStyles='flex gap-x-6 mx-auto xl:mx-0 mb-4'
          iconsStyles='text-foreground dark:text-white/70 hover:text-primary dark:hover:text-primary text-[24px] transition-all'
        />
        {/* Copyright */}
        <div className="text-muted-foreground">
          Copyright &copy; Edgar Espinoza - {year}. All rights reserved.
        </div>
      </div>
      </div>
    </footer>
  )
}

export default Footer;
import { MailIcon, HomeIcon, PhoneCall, MapPin, MailPlus } from "lucide-react";
// Components
import Form from "@/components/Form";


const Contact = () => {
  return (
    <section>
      <div className="container mx-auto">
        {/* Text and Illustration */}
        <div className='grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24'>
          {/* text */}
          <div className='flex flex-col justify-center'>
            <div className="flex items-center gap-x-4 text-primary text-lg mb-6">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Say Hello 👋
            </div>
            <h1 className="h1 max-w-md mb-8">Let's Work Together.</h1>
            <p className="subtitle max-w-[400px]">
            I'd love to hear what's on your mind. Get in touch and let me know how I can help you!
            </p>
          </div>
          {/* illustration */}
          <div className='hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat'></div>
        </div>
        {/* Info text & Form */}
        <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
          {/* Info Text */}
          <div className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg">
            {/* Mail */}
            <div className="flex items-center gap-x-8">
              <MailPlus size={18} className="text-primary" />
              <div>edgarespinoza7@gmail.com</div>
            </div>
            {/* Adress */}
            <div className="flex items-center gap-x-8">
              <MapPin size={18} className="text-primary" />
              <div>Valencia, Spain</div>
            </div>
            {/* Phone */}
            <div className="flex items-center gap-x-8">
              <PhoneCall size={18} className="text-primary" />
              <div>+34 613 52 3930</div>
            </div>
          </div>
          <Form>

          </Form>
        </div>
      </div>
    </section>
  )
}

export default Contact;
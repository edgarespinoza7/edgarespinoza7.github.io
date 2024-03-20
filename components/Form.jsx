'use client';

import React from 'react';

import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { User, MailIcon, ArrowRightIcon, MessagesSquare } from 'lucide-react';

const Form = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "6bbd413c-2b94-4a18-b5de-59a9a3aeedee");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Thanks for reaching out! I'll be in touch shortly 😉");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div>
      <form className='flex flex-col gap-y-4' onSubmit={onSubmit}>
        {/* Input */}
        <div className='relative flex items-center'>
          <Input type='name' id='name' placeholder='Name' name="user" required />
          <User className='absolute right-6' />
        </div>
        {/* Input */}
        <div className='relative flex items-center'>
          <Input type='email' id='email' placeholder='Email' name="email" required />
          <MailIcon className='absolute right-6' />
        </div>
        <input type="hidden" name="access_key" value="6bbd413c-2b94-4a18-b5de-59a9a3aeedee"></input>
        {/* Textarea */}
        <div className='relative flex items-center'>
          <Textarea placeholder='Type Your Message Here.' name="message" required />
          <MessagesSquare className='absolute top-4 right-6' />
        </div>
        <div className='mx-auto xl:mx-0'>
          <Button className='flex items-center max-w-[166px] gap-x-1' type="submit">
            Let's Talk
            <ArrowRightIcon size={20} className='' />
          </Button>
        </div>
      </form>
      <div className='mt-4'>{result}</div>
    </div>

  );
}

export default Form;
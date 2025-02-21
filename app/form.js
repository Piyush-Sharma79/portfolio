import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';


export default function Form(props) {
    const {darkMode} = props;
    const { setShowForm } = props;

    const form = useRef(null);

    const closeForm = () => {
      setShowForm(false);
    }

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_7h0s5ri', 'contact_form', form.current, {publicKey : 'vbeJBvqQl-pC1L-GY'})
        .then(() => {
            alert("Message sent successfully")
        }, (error) => {
            console.log(error.text);
            alert("An error occurred, Please try again")
      });
      //close the form after sending the email
      closeForm();

    }

    return (
      <div className={darkMode ? 'dark': ''}>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 pt-0 h-[600px] dark:shadow-slate-200">
          <div className=" sm:w-full sm:max-w-sm">
          <p onClick={()=> setShowForm(false)} className="flex justify-center rounded-md dark:bg-gradient-to-r from-cyan-600 to-teal-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 mt-8 bg-emerald-800"></p>
            <h2 className="mt-4 text-center text-3xl font-bold leading-9 tracking-tight dark:text-emerald-400 text-emerald-800 font-acorn">
              Send me a message
            </h2>
            <h2 className="mt-4 text-center text-lg dark:text-emerald-200 font-acorn">
            Got a question or proposal, or just want to say hello? Go ahead.
            </h2>
          </div>
          
  
          <div className="mt-10 sm:w-full sm:max-w-sm">
            <form className="space-y-6" ref={form} onSubmit={sendEmail}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium leading-6 dark:text-white text-gray-900">
                    Your name
                </label>
                <div className="mt-2">
                    <input
                        id="name"
                        name="user_name"
                        type="text"
                        autoComplete="name"
                        required
                        className="block w-full rounded-md border-0 py-1.5 px-2 dark:text-slate-100 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset text-gray-900 dark:bg-[#1c3364] sm:text-sm sm:leading-6"
                    />
                </div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 dark:text-white text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="user_email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 px-2 dark:text-slate-100 text-gray-900 shadow-sm ring-1 ring-inset dark:bg-[#1c3364] focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  />
                  <p></p>
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="message" className="block text-sm font-medium leading-6 dark:text-white text-gray-900">
                    Message
                  </label>
                  
                </div>
                <div className="mt-2">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="block w-full rounded-md border-0 py-1.5 px-2 dark:text-slate-100 text-gray-900 shadow-sm ring-1 ring-inset dark:bg-[#1c3364] focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 max-h-32"
                    defaultValue={''}
                  />
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md dark:bg-gradient-to-r from-cyan-600 to-teal-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-emerald-800"
                >
                Send message
                </button>  
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
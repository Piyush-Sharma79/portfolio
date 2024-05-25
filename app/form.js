import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';


export default function Form(props) {

    const { setShowForm } = props;

    const form = useRef(null);

    const closeForm = () => {
      setShowForm(false);
    }

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_y7etebz', 'contact_form', form.current, {publicKey : 't-WwQ3H8W3GJ3Ukp5'})
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
      <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 pt-0">
          <div className=" sm:w-full sm:max-w-sm">
          <p onClick={()=> setShowForm(false)} className="flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-20 mt-8">Close</p>
            <h2 className="mt-4 text-center text-3xl font-bold leading-9 tracking-tight text-indigo-700">
              Send me a message
            </h2>
            <h2 className="mt-4 text-center text-lg text-gray-900">
            Got a question or proposal, or just want
to say hello? Go ahead.
            </h2>
          </div>
          
  
          <div className="mt-10 sm:w-full sm:max-w-sm">
            <form className="space-y-6" ref={form} onSubmit={sendEmail}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                    Your name
                </label>
                <div className="mt-2">
                    <input
                        id="name"
                        name="user_name"
                        type="text"
                        autoComplete="name"
                        required
                        className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="user_email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">
                    Message
                  </label>
                  
                </div>
                <div className="mt-2">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={''}
                  />
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                Send message
                </button>  
              </div>
            </form>
          </div>
        </div>
      </>
    )
  }
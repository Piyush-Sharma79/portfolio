"use client";
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';
import { FaGithub } from 'react-icons/fa6';
import Image from 'next/image';
import deved from '../public/dev-ed-wave.png';
import design from '../public/design.png';
import code from '../public/code.png';
import consulting from '../public/2166823.png';
import web1 from '../public/1.png';
import web2 from '../public/222.png';
import web3 from '../public/333.png';
import web4 from '../public/44444.png';
import web5 from '../public/555.png';
import web6 from '../public/66666.png';
import { useState } from 'react';
import Form from './form'; 


  

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const [showForm, setShowForm] = useState(false);

  const closeForm = () => {
    if (showForm) {
      setShowForm(false);
    }
  }

  return (
    <div className={darkMode ? 'dark relative' : 'relative'}>
      <div className={showForm ? 'form' : ''}>
      <div className = "absolute top-24 right-8 bg-slate-300 rounded-xl z-20">
        {showForm && <Form setShowForm={setShowForm}/>}
      </div>
      <main className='dark:bg-[#111827] onClick={closeForm} form:bg-[#000000cc] bg-green-100 px-10 md:px-20 lg:px-40 '>
        <section className="min-h-screen">
          <nav className='py-10 flex justify-between'>
            <h1 className='text-xl dark:text-white font-'>Piyush</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl dark:invert' />
              </li>
              <li><button className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8">Resume</button></li>
              <li><button className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 cursor-pointer" onClick={()=> setShowForm(!showForm)}>Contact Me</button></li>
            </ul>
          </nav>
          <div className='text-center p-4 '>
            <h2 className='text-5xl py-2 text-teal-600 dark:text-teal-400 font-medium md:text-8xl'>Piyush</h2>
            <h3 className='text-3xl py-2 dark:text-white'>Full Stack Developer</h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-2xl max-w-lg mx-auto dark:text-white'>
              I code beautifully simple things, and I love what I do.
            </p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:invert'>
            <a href="https://x.com/PiyushShar70725" target="_blank"><AiFillTwitterCircle /></a>
            <a href="https://www.linkedin.com/in/piyush-sharma-394305257/" target="_blank"><AiFillLinkedin /></a>
            <a href="https://github.com/Piyush-Sharma79" target ="_blank"><FaGithub /></a>
            
            
            
          </div>
          <div className='relative mt-3 mx-auto bg-gradient-to-b from-teal-500 rounded-full w-[250px] h-[250px] overflow-hidden'>
            <Image src={deved} layout="fill" objectFit='cover' />
          </div>
        </section>

        <section>
          <div class="py-3">
            <h3 className='pt-8 py-5 ark:text-white text-center mt-2 text-4xl font-bold text-teal-600'>Things I Do</h3>
            <p className='text-md py-2 leading-8 text-gray-80 dark:text-white text-center text-xl'>
              I'm a Full Stack Developer working remotely from New Delhi, India.
            </p>
            <p className='dark:text-white text-center text-xl'>
              I have a passion for web design and love to create for web and mobile devices. I have a strong foundation in web development and design and I am always looking to learn more and improve my skills.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1 dark:bg-sky-200 bg-sky-100">
              <div className='flex justify-center'>
                <Image src={design} width={100} height={100} />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Beautiful Designs
              </h3>
              <p className="py-2">
                I create beautiful designs for websites and mobile applications that are easy to use and visually appealing using my frontend skills
              </p>
              <h4 className="py-4 text-teal-600 text-lg">Design Tools & frontend frameworks I Use</h4>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">React</p>
              <p className="text-gray-800 py-1">Tailwind CSS</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-sky-200 flex-1 bg-sky-100">
              <div className='flex justify-center'>
                <Image src={code} width={100} height={100} />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Code your dream project
              </h3>
              <p className="py-2">
                Do you have an idea for your next great website? Let's make it a
                reality.
              </p>
              <br></br>
              <br></br>
              <h4 className=" py-4 text-teal-600 text-lg">Stack I use</h4>
              <p className="text-gray-800 py-1">Mongo or Postgres as Database</p>
              <p className="text-gray-800 py-1">Express & Node</p>
              <p className="text-gray-800 py-1">Next/React </p>
              <p className="text-gray-800 py-1">Svelte & Svelte Kit</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-sky-200 flex-1 bg-sky-100">
              <div className='flex justify-center'>
                <Image src={consulting} width={100} height={100} />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2 ">Backend & Security </h3>
              <p className="py-2">
                I bulid highly scalable and secure backend for your web applications using Node, Express, and MongoDB or Postgres.

              </p>
              <h4 className="py-4 text-teal-600 text-lg">Backend </h4>
              <p className="text-gray-800 py-1">scalable</p>
              <p className="text-gray-800 py-1">Fast</p>
              <p className="text-gray-800 py-1">Secure</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className='text-4xl font-bold py-1 text-center text-teal-600'>
              Work
            </h3>
            <p className='text-md py-2 leading-8 text-gray-80 dark:text-white text-center text-xl'>
              I have worked on a variety of projects, ranging from small websites to large web applications. Here are a few of my recent projects.
              You can find their source code on my
              <a href='https://github.com/Piyush-Sharma79' className='text-teal-500'> GitHub.</a>
            </p>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='rounded-lg  bg-sky-100 basis-1/3 flex-1'><p class="py-2 text-2xl text-center text-teal-600">Polls Project - Svelte</p><Image src={web1} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' /></div>
            <div className='rounded-lg  bg-sky-100 basis-1/3 flex-1'><p class="py-2 text-2xl text-center text-teal-600">E-commerce - MERN</p><Image src={web2} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' /></div>
            <div className='rounded-lg  bg-sky-100 basis-1/3 flex-1'><p class="py-2 text-2xl text-center text-teal-600">Blogging</p><Image src={web3} className='rounded-lg object2cover' width={'100%'} height={'100%'} layout='responsive' /></div>
            <div className='rounded-lg  bg-sky-100 basis-1/3 flex-1'><p class="py-2 text-2xl text-center text-teal-600">Task App - MERN</p><Image src={web4} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' /></div>
          </div>
          <h3 className='text-4xl font-bold py-1 text-center text-teal-600'>
            In Progress
          </h3>
          <p className='text-md py-2 leading-8 text-gray-80 dark:text-white text-center mb-9 text-xl'>
            Here are a few of my recent projects that are in progress.
          </p>
          <div className='flex flex-col gap-10 lg:flex-row lg:flex-wrap py-9'>
            <div className='rounded-lg  bg-sky-100 basis-1/3 flex-1'><p class="py-2 text-2xl text-center text-teal-600">Leetcode Clone</p><Image src={web5} className='rounded-lg object2cover' width={'100%'} height={'100%'} layout='responsive' /></div>
            <div className='rounded-lg  bg-sky-100 basis-1/3 flex-1'><p class="py-2 text-2xl text-center text-teal-600">PayTm</p><Image src={web6} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' /></div>
          </div>
        </section>
      </main>
      </div>
    </div>
  );
}

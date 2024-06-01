"use client";

import Link from 'next/link';
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
  const [darkMode, setDarkMode] = useState(true);

  const [showForm, setShowForm] = useState(false);

  const closeForm = () => {
    if (showForm) {
      setShowForm(false);
    }
  }

  return (
    <div className={darkMode ? 'dark relative font-eurostile' : 'relative font-eurostile'}>
      <div className={showForm ? 'form' : ''}>
        <div className="absolute top-24 right-8 bg-gradient-to-b from-[#c4ffc0] to-slate-200 dark:bg-gradient-to-b dark:from-[#070f1e] dark:to-[#02183a] rounded-3xl z-20 border-2 border-zinc-600 ease-out duration-700 transition-opacity">
          {showForm && <Form setShowForm={setShowForm} darkMode={darkMode} />}
        </div>
        <main className='dark:bg-[#111827] form:bg-[#000000cc] bg-green-100 px-10 md:px-20 lg:px-40 ' onClick={closeForm}>
          <section className="min-h-screen">
            <nav className='py-10 flex justify-between'>
              <h1 className='text-xl dark:text-white '>Piyush</h1>
              <ul className='flex items-center'>
                <li>
                  <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl dark:invert' />
                </li>
                <li><Link className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="/Cv.pdf" target="_blank" download>Resume</Link></li>
                <li><button className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 cursor-pointer" onClick={() => setShowForm(!showForm)}>Contact Me</button></li>
              </ul>
            </nav>
            <div className='text-center p-4 '>
              <h1 className='text-9xl py-2 text-teal-600 dark:text-teal-400 font-bold md:text-9xl font-acorn'>Piyush</h1>
              <h3 className='text-3xl font-acorn py-2 text-teal-700 font-semibold dark:text-white'>Full Stack Developer</h3>
              <p className='text-xl py-5 leading-8 text-gray-800 md:text-2xl max-w-lg mx-auto dark:text-white'>
                I code beautifully simple things, and I love what I do.
              </p>
            </div>
            <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:invert'>
              <a href="https://x.com/PiyushShar70725" target="_blank"><AiFillTwitterCircle /></a>
              <a href="https://www.linkedin.com/in/piyush-sharma-394305257/" target="_blank"><AiFillLinkedin /></a>
              <a href="https://github.com/Piyush-Sharma79" target="_blank"><FaGithub /></a>



            </div>
            <div className='relative mt-3 mx-auto bg-gradient-to-b from-teal-500 rounded-full w-[250px] h-[250px] overflow-hidden'>
              <Image src={deved} layout="fill" objectFit='cover' />
            </div>
          </section>

          <section>
            <div className="py-3">
              <h3 className='pt-8 py-5 ark:text-white font-acorn text-center mt-2 text-7xl font-bold text-teal-600'>Things I Do</h3>
              <p className='text-md py-2 leading-8 text-gray-80 dark:text-white text-center text-2xl'>
                I'm a Full Stack Developer working remotely from New Delhi, India.
              </p>
              <p className='dark:text-white text-center text-2xl'>
                I have a passion for web design and love to create for web and mobile devices. I have a strong foundation in web development and design and I am always looking to learn more and improve my skills.
              </p>
            </div>
            <div className="lg:flex gap-10">
              <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1 bg-gradient-to-b from-sky-200 to-sky-50 dark:shadow-slate-300">
                <div className='flex justify-center'>
                  <Image src={design} width={100} height={100} />
                </div>
                <h3 className="text-xl font-acorn text-emerald-800 font-medium pt-8 pb-2">
                  Beautiful Designs
                </h3>
                <p className="py-2 text-lg">
                  I create beautiful designs for websites and mobile applications that are easy to use and visually appealing using my frontend skills
                </p>
                <h4 className="py-4 font-acorn text-teal-600 text-xl">Design Tools & frontend frameworks I Use</h4>
                <p className="text-gray-800 py-1 text-lg">Figma</p>
                <p className="text-gray-800 py-1 text-lg">Photoshop</p>
                <p className="text-gray-800 py-1 text-lg">React</p>
                <p className="text-gray-800 py-1 text-lg">Tailwind CSS</p>
              </div>
              <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-gradient-to-b from-sky-200 to-sky-50 flex-1 dark:shadow-slate-300 ">
                <div className='flex justify-center'>
                  <Image src={code} width={100} height={100} />
                </div>
                <h3 className="text-xl font-acorn text-emerald-800 font-medium pt-8 pb-2">
                  Code your dream project
                </h3>
                <p className="py-2 text-lg">
                  Do you have an idea for your next great website? Let's make it a
                  reality.
                </p>
                <br></br>
                <br></br>
                <h4 className=" py-4 font-acorn text-teal-600 text-xl">Stack I use</h4>
                <p className="text-gray-800 py-1 text-lg">Mongo or Postgres as Database</p>
                <p className="text-gray-800 py-1 text-lg">Express & Node</p>
                <p className="text-gray-800 py-1 text-lg">Next/React </p>
                <p className="text-gray-800 py-1 text-lg">Svelte & Svelte Kit</p>
              </div>
              <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1 bg-gradient-to-b from-sky-200 to-sky-50 dark:shadow-slate-300">
                <div className='flex justify-center'>
                  <Image src={consulting} width={100} height={100} />
                </div>
                <h3 className="text-xl font-acorn text-emerald-800 font-medium pt-8 pb-2 ">Backend & Security </h3>
                <p className="py-2 text-lg">
                  I bulid highly scalable and secure backend for your web applications using Node, Express, and MongoDB or Postgres.

                </p>
                <h4 className="py-4 font-acorn text-teal-600 text-xl">Backend </h4>
                <p className="text-gray-800 py-1 text-lg">scalable</p>
                <p className="text-gray-800 py-1 text-lg">Fast</p>
                <p className="text-gray-800 py-1 text-lg">Secure</p>
              </div>
            </div>
          </section>
          <section>
            <div>
              <h3 className='text-8xl font-bold py-1 pt-3 text-center text-teal-600 font-acorn'>
                Work
              </h3>
              <p className='text-md py-4 leading-8 text-gray-80 dark:text-white text-center text-2xl'>
                I have worked on a variety of projects, ranging from small websites to large web applications. Here are a few of my recent projects.
                You can find their source code on my
                <a href='https://github.com/Piyush-Sharma79' className='text-teal-500'> GitHub.</a>
              </p>
            </div>
            <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
              <div className='rounded-[38px] shadow-xl shadow-slate-400 bg-[#bfe1a342] dark:bg-blue-100 basis-1/3 flex-1 flex flex-col dark:shadow-slate-500 pl-11'>
                <p className="flex py-2 text-3xl text-center text-teal-800 pt-12 justify-end pr-5 font-acorn">Polls Project<span className="text-lg text-green-600 pl-3 -mb-10">Svelte</span></p>
                <Image src={web1} className='rounded-2xl object-cover flex-1' width={'100%'} height={'100%'} layout='responsive' />
              </div>
              <div className='rounded-[38px] shadow-xl shadow-slate-400 bg-[#bfe1a342] dark:bg-orange-100 basis-1/3 flex-1 flex flex-col dark:shadow-slate-500 pl-11'>
                <p className="flex py-2 text-3xl text-center text-teal-800 pt-12 justify-end pr-5 font-acorn">E Commerce <span className="text-lg text-green-600 pl-3 -mb-10">MERN</span></p>
                <Image src={web2} className='rounded-2xl object-cover flex-1' width={'100%'} height={'100%'} layout='responsive' />
              </div>
              <div className='rounded-[38px] shadow-xl shadow-slate-400 bg-[#bfe1a342] dark:bg-violet-100 basis-1/3 flex-1 flex flex-col dark:shadow-slate-500 pl-11'>
                <p className="flex py-2 text-3xl text-center text-teal-800 pt-12 justify-end pr-5 font-acorn">Blog App <span className="text-lg text-green-600 pl-3 -mb-10">MEEN</span></p>
                <Image src={web3} className='rounded-2xl object-cover flex-1' width={'100%'} height={'100%'} layout='responsive' />
              </div>
              <div className='rounded-[38px] shadow-xl shadow-slate-400 bg-[#bfe1a342] basis-1/3 flex-1 dark:bg-yellow-100 flex flex-col dark:shadow-slate-500 pl-11'>
                <p className="flex py-2 text-3xl text-center  text-teal-800 pt-12 justify-end pr-5 font-acorn">Task App <span className="text-lg text-green-600 pl-3 -mb-10">MERN</span></p>
                <Image src={web4} className='rounded-2xl object-cover flex-1' width={'100%'} height={'100%'} layout='responsive' />
              </div>
            </div>
            <h3 className='text-8xl font-bold py-1 text-center text-teal-600 font-acorn'>
              In Progress
            </h3>
            <p className='text-md py-2 leading-8 text-gray-80 dark:text-white text-center mb-9 text-2xl'>
              Here are a few of my recent projects that are in progress.
            </p>
            <div className='flex flex-col gap-10 lg:flex-row lg:flex-wrap py-9'>
              <div className='rounded-[38px] shadow-xl shadow-slate-400 bg-[#bfe1a342] dark:bg-cyan-100 basis-1/3 flex-1 flex flex-col dark:shadow-slate-500 pl-11'>
                <p className="flex py-2 text-3xl text-center text-teal-800 pt-12 justify-end pr-5 font-acorn">Leetcode Clone <span className="text-lg text-green-600 pl-3 -mb-10">MERN</span></p>
                <Image src={web5} className='rounded-2xl object-cover flex-1' width={'100%'} height={'100%'} layout='responsive' />
              </div>
              <div className='rounded-[38px] shadow-xl shadow-slate-400 bg-[#bfe1a342] dark:bg-rose-100 basis-1/3 flex-1 flex flex-col dark:shadow-slate-500 pl-11'>
                <p className="flex py-2 text-3xl text-center text-teal-800 pt-12 justify-end pr-5 font-acorn">PayTM Clone <span className="text-lg text-green-600 pl-3 -mb-10">MERN</span></p>
                <Image src={web6} className='rounded-2xl object-cover flex-1' width={'100%'} height={'100%'} layout='responsive' />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
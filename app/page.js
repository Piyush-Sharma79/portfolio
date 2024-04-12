"use client";
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillTwitterCircle, AiFillYoutube, AiFillLinkedin } from 'react-icons/ai';
import Image from 'next/image';
import deved from '../public/dev-ed-wave.png';
import design from '../public/design.png';
import code from '../public/code.png';
import consulting from '../public/consulting.png';
import web1 from '../public/web1.png';
import web2 from '../public/web2.png';
import web3 from '../public/web3.png';
import web4 from '../public/web4.png';
import web5 from '../public/web5.png';
import web6 from '../public/web6.png';
import { useState } from 'react';



export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'dark' : ''}>
      <main className='dark:bg-[#111827] bg-green-100 px-10 md:px-20 lg:px-40 '>
        <section className="min-h-screen">
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons dark:text-white'>Piyush</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl dark:invert' />
              </li>
              <li><a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="#">Resume</a></li>
            </ul>
          </nav>
          <div className='text-center p-10 '>
            <h2 className='text-5xl py-2 text-teal-600 dark:text-teal-400 font-medium md:text-6xl'>Piyush</h2>
            <h3 className='text-2xl py-2 dark:text-white'>Developer</h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-white'>
            I code beautifully simple things, and I love what I do.
            </p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:invert'>
            <a href="https://twitter.com/PiyushShar70725"><AiFillTwitterCircle /></a>
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>
          <div className='relative  mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'>
            <Image src={deved} layout="fill" objectFit='cover' />
          </div>
        </section>

        <section>
          <div>
            <h3 className='text-3xl py-1 ark:text-white dark:text-white'>Services I offer</h3>
            <p className='text-md py-2 leading-8 text-gray-80 dark:text-white'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum non tenetur <span className='text-teal-500'>molestiae</span> nesciunt ex excepturi, dolores tempora nihil sapiente cupiditate sequi sunt laboriosam recusandae accusantium ipsa hic cum itaque atque.
            </p>
            <p className='dark:text-white'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto sint quod modi eius nisi a, iste quis eos cumque error officia iure nobis harum, expedita, et accusantium sequi nulla aspernatur?
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1 bg-sky-100">
              <div className='flex justify-center'>
                <Image src={design} width={100} height={100} />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1 bg-sky-100">
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
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1 bg-sky-100">
              <div className='flex justify-center'>
                <Image src={consulting} width={100} height={100} />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
              <p className="py-2">
                Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className='text-3xl py-1 dark:text-white'>
              Portfolio
            </h3>
            <p className='text-md py-2 leading-8 text-gray-80 dark:text-white'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum non tenetur <span className='text-teal-500'>molestiae</span> nesciunt ex excepturi, dolores tempora nihil sapiente cupiditate sequi sunt laboriosam recusandae accusantium ipsa hic cum itaque atque.
            </p>
            <p className='dark:text-white'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto sint quod modi eius nisi a, iste quis eos cumque error officia iure nobis harum, expedita, et accusantium sequi nulla aspernatur?
            </p>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1'><Image src={web1} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' /></div>
            <div className='basis-1/3 flex-1'><Image src={web2} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' /></div>
            <div className='basis-1/3 flex-1'><Image src={web3} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' /></div>
            <div className='basis-1/3 flex-1'><Image src={web4} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' /></div>
            <div className='basis-1/3 flex-1'><Image src={web5} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' /></div>
            <div className='basis-1/3 flex-1'><Image src={web6} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' /></div>
          </div>
        </section>
      </main>
    </div>
  );
}

"use client"
import { Typewriter } from 'react-simple-typewriter'

export default function Intro() {
    const gradientTextStyles = {
        background: '-webkit-linear-gradient(45deg, #f06, #9f6)',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
    };


    const texts = ["Full Stack Developer", "Mobile Developer", "UI/UX Designer"];

    return <>
        <div className=" flex flex-col md:flex-row bg-black md:p-10 h-screen  ">

            {/* Developer Info */}
            <div className="mt-14  md:mt-0 md:w-3/5 text-center lg:text-left flex flex-col justify-center lg:p-8 p-6 lg:justify-normal lg:py-24 lg:text-2xl">
                <h2 className="text-lg font-semibold lg:mb-4 text-gray-200">Hi! I am </h2>
                <h1 className="text-3xl font-semibold lg:mb-4 text-white lg:text-4xl">Hasib Hoassin Abir</h1>

                <span className='gradient-text-container text-3xl py-4 px-0 w-full lg:text-4xl '>
                    <span className="text-gray-200 lg:text-xl lg:pr-3">A passionate </span><br className='inline lg:hidden' />
                    <Typewriter
                        words={texts}
                        loop={Infinity}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={2000}
                    />
                </span>
                <p className="text-white lg:text-xl">
                    As a full-stack developer, I combine creativity with code to craft engaging and functional websites. From sleek front-end designs to powerful back-end solutions, I'm dedicated to bringing your digital vision to life.

                    Let's collaborate and create something amazing together.

                </p>

                <div className="pt-8 text-white mt-2 hidden items-center  md:flex lg:flex-row">
                    My stacks: <span className=' flex flex-row items-center'>
                        <img className='rounded-full ml-6' src='./assets/stacks/mern.png' width={130} />
                        <img className='rounded-full ml-6' src='./assets/stacks/django.png' width={100} />
                        <img className='rounded-full ml-6' src='./assets/stacks/flutter.png' width={100} />
                    </span>
                </div>
            </div>


            {/* SVG Picture */}
            <div className="md:w-2/5 flex justify-center items-center px-6">
                <img src="/pc.png" alt="SVG" className="w-full max-h-full " />
            </div>


        </div>

    </>;
}

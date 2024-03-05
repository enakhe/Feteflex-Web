import { Fragment } from 'react'
import GlassInput from './GlassInput'
import AvatarStack from './AvatarStack'
import { Button } from '@material-tailwind/react'
import { motion, useScroll } from "framer-motion"

import landingImage from './../assets/landing.png'
import curve from './../assets/curve.png'
import item1 from './../assets/item1.png'
import item3 from './../assets/item3.png'
import logoMulti from '../assets/logo-multi.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
import image4 from '../assets/image4.png'
import image5 from '../assets/image5.png'
import image6 from '../assets/image6.png'
import image7 from '../assets/image7.png'

import { features } from '../app/objects'
import Footer from './Footer'
import ScrollAnimation from 'react-animate-on-scroll';

import 'animate.css';

const Body = () => {
    const { scrollYProgress } = useScroll();

    return (
        <Fragment>
            <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />

            <div className="mx-auto max-w-3xl lg:pt-10 lg:max-w-7xl">
                <div className="grid py-20 gap-5 sm:grid-cols-1 items-center p-6 lg:px-8 lg:grid-cols-2 md:grid-cols-2">
                    <div className="relative">
                        <h1 className="lg:text-3xl mt-5 text-align text-white tracking-tight text-2xl font-semibold animate-once animate-delay-300 animate__animated animate__zoomIn">
                            Your <span className='text-[#8663A6]'>market place</span> for event services
                            Discover, Book, and get Booked <br />
                            With a few clicks!</h1>
                        <img alt='curve' src={curve} className='w-48 absolute bottom-30' />
                        <p className="md:text-sm text-sm py-5 font-normal text-white animate-once animate-delay-400 animate__animated animate__zoomIn">Be the first to experience the event revolution, <br />
                            by Joining our community!</p>
                        <GlassInput />
                        <div className='lg:my-10 my-5 animate-delay-400 animate__animated animate__zoomIn'>
                            <p className='text-white text-sm mb-2'>Our Waitlist</p>
                            <AvatarStack />
                        </div>
                    </div>
                    <div className="grid lg:justify-items-end justify-items-center animate-delay-400 animate__animated animate__fadeInLeft animate__zoomIn" id='about'>
                        <img src={landingImage} className='w-96' alt="Landing Image" />
                    </div>
                </div>
            </div>
            <img src={item1} alt='Item 1' className='absolute bottom-0 w-48' />


            <Fragment>
                <div className="about">

                    <div className='mx-auto max-w-3xl lg:max-w-7xl mb-20'>
                        <div className="grid gap-5 sm:grid-cols-1 items-center p-6 lg:px-2 lg:grid-cols-3">

                            <div className='col-span-2'>
                                <ScrollAnimation duration={1} animateIn="fadeInLeft" animateOnce={true}>
                                    <h3 className='text-[#8563A6] text-3xl font-bold'>About Us</h3>
                                    <h5 className='text-[#2A2346] text-2xl my-5 font-semibold'>Transforming Africa by revolutionizing the event industry
                                        with technology and innovation</h5>
                                    <p className='text-lg leading-relaxed'>
                                        Our mission is to revolutionize the event industry by providing a unified platform that streamlines the booking process and enhances visibility for event professionals. With our user-friendly interface and advanced search options, we simplify event planning, offering real-time availability updates and secure transactions through our escrow payment system. By offering event professionals a dedicated space to market their services effectively,
                                        Join us as we redefine the way events are planned, executed, and enjoyed.
                                    </p>
                                    <Button className='my-5 capitalize font-family bg-[#2A2346]'>Join Waitlist</Button>
                                </ScrollAnimation>

                            </div>
                            <div className="grid col-span-2 lg:col-span-1 animate-fade-up animate-once animate-delay-400 lg:justify-items-center">
                                <ScrollAnimation duration={1} animateIn="fadeInRight" animateOnce={true}>
                                    <img src={logoMulti} className='w-96' alt="Landing Image" />
                                </ScrollAnimation>
                            </div>

                        </div>
                    </div>
                </div>
            </Fragment>

            <Fragment>
                <div className="features" id='features'>
                    <div className='mx-auto max-w-3xl lg:max-w-7xl mb-20 lg:mb-40' id='organizer'>
                        <div className="grid gap-5 sm:grid-cols-1 items-center p-6 lg:px-2 lg:grid-cols-2 md:grid-cols-2">
                            <ScrollAnimation duration={1} animateIn="fadeInLeft" animateOnce={true}>
                                <div className="grid animate-fade-up animate-once animate-delay-400 justify-items-center">
                                    <img src={image2} className='w-full rounded-3xl' alt="Landing Image" />
                                </div>
                            </ScrollAnimation>

                            <ScrollAnimation duration={1} animateIn="fadeInRight" animateOnce={true}>
                                <div className=''>
                                    <h3 className='text-[#8563A6] text-3xl font-bold'>Features</h3>
                                    <h5 className='text-[#2A2346] text-2xl my-5 font-semibold'>Event Planning made easy</h5>
                                    <p className='leading-relaxed text-lg'>
                                        Your ultimate solution for seamless event planning. With our innovative platform, booking event
                                        services is a breeze. From finding the perfect venue to securing talented professionals,
                                        we simplify the process, ensuring your event is a resounding success.
                                        Say goodbye to stress and hello to effortless event planning with Feteflex.
                                    </p>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </Fragment>

            <Fragment>
                <div className='mx-auto max-w-3xl lg:max-w-7xl mb-20 lg:mb-40'>
                    <div className="grid gap-5 sm:grid-cols-1 items-center p-6 lg:px-2 lg:grid-cols-2 md:grid-cols-2">
                        <ScrollAnimation duration={1} animateIn="fadeInLeft" animateOnce={true}>
                            <div className="grid animate-fade-up animate-once animate-delay-400 justify-items-center lg:order-last">
                                <img src={image3} className='w-full' alt="Landing Image" />
                            </div>
                        </ScrollAnimation>


                        <ScrollAnimation duration={1} animateIn="fadeInRight" animateOnce={true}>
                            <div className=''>
                                <ScrollAnimation duration={2000} animateIn="bounce">
                                    <p className='leading-relaxed text-lg'>
                                        We are dedicated to curating a seamless event experience that prioritizes convenience and satisfaction.
                                        Our platform boasts an array of sophisticated features designed to enhance every aspect of event management and participation.
                                        Our user-friendly interface ensures effortless booking, allowing attendees to secure their spots with just a few clicks.
                                        With instant updates, participants stay informed about event details, schedule changes, and important announcements in real-time, guaranteeing a smooth and stress-free experience.
                                    </p>
                                </ScrollAnimation>

                            </div>
                        </ScrollAnimation>

                    </div>
                </div>
            </Fragment>

            <Fragment>
                <div className='mx-auto max-w-3xl lg:max-w-7xl mb-20 lg:mb-40' id='artist'>
                    <div className="grid gap-5 sm:grid-cols-1 items-center p-6 lg:px-2 lg:grid-cols-2 md:grid-cols-2">
                        <ScrollAnimation duration={1} animateIn="fadeInLeft" animateOnce={true}>
                            <div className="grid animate-fade-up animate-once animate-delay-400 justify-items-center">
                                <img src={image4} className='w-96' alt="Landing Image" />
                            </div>
                        </ScrollAnimation>


                        <ScrollAnimation duration={1} animateIn="fadeInRight" animateOnce={true}>
                            <div className=''>
                                <h5 className='text-[#2A2346] text-2xl my-5 font-semibold'>Elevate Your Event. Make it unforgettable
                                    with Artistes like no other</h5>
                                <p className='leading-relaxed text-lg'>
                                    We are dedicated to curating a seamless event experience that prioritizes convenience and satisfaction.
                                    Our platform boasts an array of sophisticated features designed to enhance every aspect of event management and participation.

                                    Our user-friendly interface ensures effortless booking, allowing attendees to secure their spots with just a few clicks.
                                    With instant updates, participants stay informed about event details, schedule changes, and important announcements in real-time, guaranteeing a smooth and stress-free experience.
                                </p>
                            </div>
                        </ScrollAnimation>

                    </div>
                </div>
            </Fragment>

            <Fragment>
                <div className='mx-auto max-w-3xl lg:max-w-7xl mb-20 lg:mb-40' id='venue'>
                    <div className="grid gap-5 sm:grid-cols-1 items-center p-6 lg:px-2 lg:grid-cols-2 md:grid-cols-2">
                        <ScrollAnimation duration={1} animateIn="fadeInLeft" animateOnce={true}>
                            <div className="grid animate-fade-up animate-once animate-delay-400 justify-items-center lg:order-last">
                                <img src={image5} className='w-96' alt="Landing Image" />
                            </div>
                        </ScrollAnimation>

                        <ScrollAnimation duration={1} animateIn="fadeInRight" animateOnce={true}>
                            <div className=''>
                                <h5 className='text-[#2A2346 text-2xl my-5 font-semibold'>Discover and book top class venues around the
                                    globe with just a few clicks!</h5>
                                <p className='leading-relaxed text-lg'>
                                    Venue search made easy!  Find the ideal space, compare quotes, and secure
                                    your date with ease. Users can browse through a diverse range of options,
                                    check availability in real-time, and confirm bookings with confidence,
                                    minimizing the risks associated with unreliable commitments.
                                </p>
                                <Button className='my-5 capitalize font-family bg-[#2A2346]'>Join Waitlist</Button>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
                <div className='relative'>
                    <img src={item3} alt='Item 1' className='absolute bottom-20 left-0 w-24' />
                </div>
            </Fragment>

            <Fragment>
                <div className='mini-section -z-50'>
                    <div className="mx-auto max-w-3xl lg:max-w-7xl">
                        <div className="grid gap-5 sm:grid-cols-1 items-center p-6 lg:px-8 lg:grid-cols-2 md:grid-cols-2">
                            <ScrollAnimation duration={1} animateIn="fadeInLeft" animateOnce={true}>
                                <div className="lg:my-20 relative">
                                    <h1 className="lg:text-3xl mt-5 text-align text-white tracking-tight text-2xl font-semibold animate-once animate-delay-300 animate__animated animate__zoomIn">
                                        Join Our waitlist</h1>
                                    <img alt='curve' src={curve} className='w-48 absolute bottom-30' />
                                    <p className="md:text-sm text-sm py-5 font-normal text-white animate-once animate-delay-400 animate__animated animate__zoomIn">Be the first to experience the Feteflex mobile app. Skip the line
                                        and join the waitlist for early access and special perks. Your friends
                                        won&apos;t be talking about this yet. Get ahead of the curve and join the
                                        waitlist for the coolest thing coming soon.</p>
                                    <GlassInput />
                                </div>
                            </ScrollAnimation>

                            <div className="grid animate-fade-up lg:absolute lg:right-0 animate-once animate-delay-400 justify-items-end lg:justify-items-center">
                                <ScrollAnimation duration={1} animateIn="fadeInRight" animateOnce={true}>
                                    <img src={image6} className='lg:w-4/5 w-full' alt="Landing Image" />
                                </ScrollAnimation>
                            </div>

                        </div>
                        <img src={item1} alt='Item 1' className='absolute bottom-0 w-48' />
                    </div>
                </div>
            </Fragment>

            <Fragment>
                <div className='group2'>
                    <div className='mx-auto max-w-3xl lg:max-w-7xl mt-40 p-6'>
                        <h3 className='text-[#8563A6] text-3xl font-bold'>One app that gets it all done</h3>
                        <h5 className='text-[#2A2346] text-lg lg:text-2xl my-5 font-semibold'>The best and number one reliable platform for booking
                            and marketing your event services.</h5>
                        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
                            {features.map((feature) => (
                                <ScrollAnimation duration={1} animateIn="fadeInUp" animateOnce={true} key={feature.name}>
                                    <div className="feature-item position-relative animate-fade-up animate-once animate-delay-400 animate-alternate text-white overflow-hidden rounded-lg" id='feature'>
                                        <img className='img-fluid h-80 w-full object-cover' src={feature.image} alt="Ticketing" />
                                        <div className='feature-overlay'>
                                            <dt className="text-sm mt-5 font-semibold leading-7 text-white-900">
                                                <div className="absolute left-3 top-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#170C49]">
                                                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                                </div>
                                                <div className='text-center'>
                                                    {feature.name}
                                                </div>
                                            </dt>
                                            <dd className="mt-2 font-light text-center text-sm p-5 leading-7 text-dark-600">{feature.description}</dd>
                                        </div>
                                    </div>
                                </ScrollAnimation>
                            ))}
                        </dl>
                        <h3 className='text-center my-10'>Crafting Memories: One <span className='text-[#C493C1]'>Event at a</span> Time!</h3>
                    </div>
                </div>

            </Fragment>

            <Fragment>
                <div className='video mt-96 lg:mt-0' />
            </Fragment>

            <Fragment>
                <div className='group5'>
                    <div className='flex items-center justify-center my-20'>
                        <div className='max-w-2xl'>
                            <div className=" bg-[#2A2346] p-10 items-center grid lg:grid-cols-3 grid-cols-1 gap-20 lg:rounded-lg relative">

                                <div className='w-full max-w-96 col-span-2'>
                                    <ScrollAnimation duration={1} animateIn="fadeInLeft" animateOnce={true}>
                                        <h2 className='text-white text-2xl'>Your All-In-One Booking App</h2>
                                        <p className='text-sm text-white my-5'>Coming soon with awesome features that <br />
                                            will blow your mind follow us on all our social
                                            media platforms, to get the latest updates from us</p>
                                    </ScrollAnimation>
                                </div>

                                <div className='absolute bottom-0 lg:top-0 top-52 right-10'>
                                    <ScrollAnimation duration={1} animateIn="fadeInRight" animateOnce={true}>
                                        <img src={image7} className=' w-40' alt="Landing Image" />
                                    </ScrollAnimation>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>

            <Fragment>
                <Footer />
            </Fragment>

        </Fragment >
    )
}

export default Body
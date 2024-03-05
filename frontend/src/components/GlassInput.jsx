import { Button } from '@material-tailwind/react'

const GlassInput = () => {

    return (
        <div className='animate-once animate-delay-400 animate__animated animate__fadeInUp'>
            <div className="relative mt-2 rounded-md shadow-sm lg:mr-10">
                <input
                    type="text"
                    name="price"
                    id="price"
                    className="block w-full rounded-md border-0 py-3 pl-5 pr-10 placeholder:text-gray-400 text-gray-400 sm:text-sm sm:leading-6 focus:ring-0 focus:outline-none glass"
                    placeholder="Enter your email"
                />
                <div className="absolute inset-y-0 right-1 flex items-center">
                    <Button className='capitalize font-family bg-[#352866]'>Join Waitlist</Button>
                </div>
            </div>
        </div>
    )
}

export default GlassInput
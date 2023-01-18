import React from 'react';
import hero2 from "../../assets/hero2.png"

const Hero2 = () => {
    return (
        <div className='block lg:flex items-center gap-5 my-10 w-[95%] mx-auto'>
            <section className='Lg:w-[35%]'>
                <img src={hero2} className="lg:h-[32rem]" alt="" />
            </section>
            <section className='lg:w-[65%] mt-5'>
                <h2 className='text-5xl font-bold font-serif'> Digital Creator </h2>
                <p className='my-5'>On this Modern world I am trying to update myself to the update world . As a educated person my profession is connect with digital technology .</p>
                <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 my-5">
                <button className='bg-slate-50 shadow-2xl p-2 font-mono'> Web Developer </button>
                <button className='bg-slate-50 shadow-2xl p-2 font-mono'>Office Programmer</button>
                <button className='bg-slate-50 shadow-2xl p-2 font-mono'>Digital Servicer</button>
                </div>
            </section>
        </div>
    );
};

export default Hero2;
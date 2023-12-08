'use client'

import { useState } from "react"

const Pricing = () => {
    const [checked, setChecked] = useState(false)
    const [price, setPrice] = useState({
        vip: '99 Kč',
        evip: '149 Kč',
        donator: '499 Kč'
    })

    const handlePrice = () => {
        setPrice(checked ? { vip: '99 Kč', evip: '149 Kč', donator: '499 Kč' } : { vip: '4 €', evip: '6 €', donator: '20 €' });
        setChecked(!checked)
        // setChecked(false)
    }

    return <>
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Designed for business teams like yours</h2>
                    <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
                </div>
                {/* Checkbox toggle */}
                <div className="flex justify-center lg:justify-end mb-2">
                    <div className="form-control">
                        <label className="label cursor-pointer gap-4">
                            <span className="label-text">Kč</span> 
                            <input type="checkbox" className="toggle" checked={checked} onChange={ handlePrice }/>
                            <span className="label-text">Euro</span> 
                        </label>
                    </div>
                </div>
                <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                    {/* <!-- Pricing Card --> */}
                    <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-yellow-300 shadow dark:border-yellow-300 xl:p-8 dark:bg-gray-800 dark:text-white">
                        <h3 className="mb-4 text-2xl font-semibold">VIP</h3>
                        <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Best option for personal use & for your next project.</p>
                        <div className="flex justify-center items-baseline my-8">
                            <span className="mr-2 text-5xl font-extrabold">{price.vip}</span>
                            <span className="text-gray-500 dark:text-gray-400">/měsíc</span>
                        </div>
                        {/* <!-- List --> */}
                        <ul role="list" className="mb-8 space-y-4 text-left">
                            <li className="flex items-center space-x-3">
                                {/* <!-- Icon --> */}
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                <span>Individual configuration</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                {/* <!-- Icon --> */}
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                <span>No setup, or hidden fees</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                {/* <!-- Icon --> */}
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                <span>Team size: <span className="font-semibold">1 developer</span></span>
                            </li>
                            <li className="flex items-center space-x-3">
                                {/* <!-- Icon --> */}
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                <span>Premium support: <span className="font-semibold">6 months</span></span>
                            </li>
                            <li className="flex items-center space-x-3">
                                {/* <!-- Icon --> */}
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                <span>Free updates: <span className="font-semibold">6 months</span></span>
                            </li>
                        </ul>
                        <a href="#" className="text-black bg-yellow-300 hover:bg-yellow-400 focus:ring-4 focus:ring-yellow-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-yellow-900">Koupit</a>
                    </div>
                    {/* <!-- Pricing Card --> */}
                    <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-cyan-400 shadow dark:border-cyan-400 xl:p-8 dark:bg-gray-800 dark:text-white">
                        <h3 className="mb-4 text-2xl font-semibold">EVIP</h3>
                        <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Relevant for multiple users, extended & premium support.</p>
                        <div className="flex justify-center items-baseline my-8">
                            <span className="mr-2 text-5xl font-extrabold">{price.evip}</span>
                            <span className="text-gray-500 dark:text-gray-400">/měsíc</span>
                        </div>
                        {/* <!-- List --> */}
                        <ul role="list" className="mb-8 space-y-4 text-left">
                            <li className="flex items-center space-x-3">
                                {/* <!-- Icon --> */}
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                <span>Individual configuration</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                {/* <!-- Icon --> */}
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                <span>No setup, or hidden fees</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                {/* <!-- Icon --> */}
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                <span>Team size: <span className="font-semibold">10 developers</span></span>
                            </li>
                            <li className="flex items-center space-x-3">
                                {/* <!-- Icon --> */}
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                <span>Premium support: <span className="font-semibold">24 months</span></span>
                            </li>
                            <li className="flex items-center space-x-3">
                                {/* <!-- Icon --> */}
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                <span>Free updates: <span className="font-semibold">24 months</span></span>
                            </li>
                        </ul>
                        <a href="#" className="text-black bg-cyan-400 hover:bg-cyan-500 focus:ring-cyan-400 focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-black  dark:focus:ring-cyan-900">Koupit</a>
                    </div>
                    {/* <!-- Pricing Card --> */}
                    <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-purple-700 shadow dark:border-purple-700 xl:p-8 dark:bg-gray-800 dark:text-white">
                        <h3 className="mb-4 text-2xl font-semibold">Donator</h3>
                        <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Best for large scale uses and extended redistribution rights.</p>
                        <div className="flex justify-center items-baseline my-8">
                            <span className="mr-2 text-5xl font-extrabold">{price.donator}</span>
                            <span className="text-gray-500 dark:text-gray-400">/měsíc</span>
                        </div>
                        {/* <!-- List --> */}
                        <ul role="list" className="mb-8 space-y-4 text-left">
                            <li className="flex items-center space-x-3">
                                {/* <!-- Icon --> */}
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                <span>Individual configuration</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                {/* <!-- Icon --> */}
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                <span>No setup, or hidden fees</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                {/* <!-- Icon --> */}
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                <span>Team size: <span className="font-semibold">100+ developers</span></span>
                            </li>
                            <li className="flex items-center space-x-3">
                                {/* <!-- Icon --> */}
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                <span>Premium support: <span className="font-semibold">36 months</span></span>
                            </li>
                            <li className="flex items-center space-x-3">
                                {/* <!-- Icon --> */}
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                <span>Free updates: <span className="font-semibold">36 months</span></span>
                            </li>
                        </ul>
                        <a href="#" className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900">Koupit</a>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default Pricing
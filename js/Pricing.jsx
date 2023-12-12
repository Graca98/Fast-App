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
        // setChecked(false)dddddddddddd
    }

    return <>
        <section className="">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Designed for business teams like yours</h2>
                    <p className="mb-5 font-light text-gray-500 sm:text-xl">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
                </div>
                {/* Checkbox toggle */}
                <div className="flex justify-center lg:justify-end mb-2">
                    <div className="form-control">
                        <label className="label cursor-pointer gap-4">
                            <span className="label-text text-gray-700">Kč</span>
                            <input type="checkbox" className="toggle bg-white" checked={checked} onChange={handlePrice} />
                            <span className="label-text text-gray-700">Euro</span>
                        </label>
                    </div>
                </div>
                {/* <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0"> */}
                <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 lg:gap-6 lg:space-y-0 ">
                    {/* <!-- Pricing Card --> */}
                    <div className="relative flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border-2 border-yellow-300 shadow xl:p-8 lg:hover:scale-105 transition ease-in-out duration-300">
                        <h3 className="mb-4 text-2xl font-semibold">VIP</h3>
                        <p className="font-light text-gray-500 sm:text-lg">Best option for personal use & for your next project.</p>
                        <div className="flex justify-center items-baseline my-8">
                            <span className="mr-2 text-5xl font-extrabold">{price.vip}</span>
                            <span className="text-gray-500">/měsíc</span>
                        </div>
                        {/* <!-- List --> */}
                        <ul role="list" className="mb-8 space-y-4 text-left">
                            <li className="flex items-center space-x-3">
                                {/* <!-- Icon --> */}
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                <span>Individual configuration</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                {/* <!-- Icon --> */}
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                <span>No setup, or hidden fees</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                {/* <!-- Icon --> */}
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                <span>Team size: <span className="font-semibold">1 developer</span></span>
                            </li>
                            <li className="flex items-center space-x-3">
                                {/* <!-- Icon --> */}
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                <span>Premium support: <span className="font-semibold">6 months</span></span>
                            </li>
                            <li className="flex items-center space-x-3">
                                {/* <!-- Icon --> */}
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                <span>Free updates: <span className="font-semibold">6 months</span></span>
                            </li>
                        </ul>
                        <a href="#" className="text-black bg-yellow-300 hover:bg-yellow-400 focus:ring-4 focus:ring-yellow-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Koupit</a>
                    </div>
                    {/* <!-- Pricing Card Evip --> */}
                    
                    <div className="indicator w-fit relative flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border-2 lg:border-4 border-cyan-400 shadow xl:p-8 lg:scale-105 lg:hover:scale-110 transition ease-in-out duration-300">
                        <span className="indicator-item indicator-center badge bg-cyan-400 border-cyan-400 text-white font-semibold py-3 px-4">OBLÍBENÉ</span> 
                        <h3 className="mb-4 text-2xl font-semibold">EVIP</h3>
                        <p className="font-light text-gray-500 sm:text-lg">Relevant for multiple users, extended & premium support.</p>
                        <div className="flex justify-center items-baseline my-8">
                            <span className="mr-2 text-5xl font-extrabold">{price.evip}</span>
                            <span className="text-gray-500">/měsíc</span>
                        </div>
                        {/* <!-- List --> */}
                        <ul role="list" className="mb-8 space-y-4 text-left">
                            <li className="flex items-center space-x-3">
                                {/* <!-- Icon --> */}
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                <span>Individual configuration</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                {/* <!-- Icon --> */}
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                <span>No setup, or hidden fees</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                {/* <!-- Icon --> */}
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                <span>Team size: <span className="font-semibold">10 developers</span></span>
                            </li>
                            <li className="flex items-center space-x-3">
                                {/* <!-- Icon --> */}
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                <span>Premium support: <span className="font-semibold">24 months</span></span>
                            </li>
                            <li className="flex items-center space-x-3">
                                {/* <!-- Icon --> */}
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                <span>Free updates: <span className="font-semibold">24 months</span></span>
                            </li>
                            {/* Zobrazit více test */}
                            <div className="collapse bg-white">
                                <input type="checkbox" className="" /> 
                                <div className="collapse-title font-light">
                                    Zobrazit více...
                                </div>
                                <div className="collapse-content px-0"> 
                                    <ul role="list" className="mb-8 space-y-4 text-left">
                                    <li className="flex items-center space-x-3">
                                        {/* <!-- Icon --> */}
                                        <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                        <span>Individual configuration</span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        {/* <!-- Icon --> */}
                                        <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                        <span>No setup, or hidden fees</span>
                                    </li> 
                                    </ul>
                                </div>
                            </div>
                            {/* Konec testu */}
                        </ul>
                        <a href="https://tcrafteu.craftingstore.net/package/1121244" className="text-black bg-cyan-400 hover:bg-cyan-500 focus:ring-4 focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Koupit</a>
                    </div>
                    {/* <!-- Pricing Card Donator--> */}
                    <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border-2 border-purple-700 shadow xl:p-8 lg:hover:scale-105 transition ease-in-out duration-300">
                        <h3 className="mb-4 text-2xl font-semibold">Donator</h3>
                        <p className="font-light text-gray-500 sm:text-lg">Best for large scale uses and extended redistribution rights.</p>
                        <div className="flex justify-center items-baseline my-8">
                            <span className="mr-2 text-5xl font-extrabold">{price.donator}</span>
                            <span className="text-gray-500">/měsíc</span>
                        </div>
                        {/* <!-- List --> */}
                        <ul role="list" className="mb-8 space-y-4 text-left">
                            <li className="flex items-center space-x-3">
                                {/* <!-- Icon --> */}
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                <span>Individual configuration</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                {/* <!-- Icon --> */}
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                <span>No setup, or hidden fees</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                {/* <!-- Icon --> */}
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                <span>Team size: <span className="font-semibold">100+ developers</span></span>
                            </li>
                            <li className="flex items-center space-x-3">
                                {/* <!-- Icon --> */}
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                <span>Premium support: <span className="font-semibold">36 months</span></span>
                            </li>
                            <li className="flex items-center space-x-3">
                                {/* <!-- Icon --> */}
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                <span>Free updates: <span className="font-semibold">36 months</span></span>
                            </li>
                        </ul>
                        <a href="#" className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Koupit</a>
                    </div>
                </div>
            </div>
        </section>

        {/* Price Tab */}
        <section className="text-black">
            <div className="container mx-auto p-6 overflow-x-auto">
                <table className="w-full">
                    <caption className="sr-only">Pricing plan comparison</caption>
                    <thead>
                        <tr>
                            <th></th>
                            <th scope="col">
                                <h2 className="px-2 text-lg font-medium">VIP</h2>
                                <p className="mb-3">
                                    <span className="text-2xl font-bold sm:text-4xl">{price.vip}</span>
                                    <span className="font-medium dark:text-gray-400"> /m</span>
                                </p>
                            </th>
                            <th scope="col">
                                <h2 className="px-2 text-lg font-medium">EVIP</h2>
                                <p className="mb-3">
                                    <span className="text-2xl font-bold sm:text-4xl">{price.evip}</span>
                                    <span className="font-medium dark:text-gray-400"> /m</span>
                                </p>
                            </th>
                            <th scope="col">
                                <h2 className="px-2 text-lg font-medium">Donator</h2>
                                <p className="mb-3">
                                    <span className="text-2xl font-bold sm:text-4xl">{price.donator}</span>
                                    <span className="font-medium dark:text-gray-400"> /m</span>
                                </p>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="space-y-6 text-center divide-y dark:divide-gray-700">
                        <tr>
                            <th scope="row" className="text-left">
                                <h3 className="py-3">Neoznačené bankovky</h3>
                            </th>
                            <td>
                                <span className="block text-sm">$2500</span>
                            </td>
                            <td>
                                <span className="block text-sm">$5000</span>
                            </td>
                            <td>
                                <span className="block text-sm">$10000</span>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="text-left">
                                <h3 className="py-3">Principes et</h3>
                            </th>
                            <td>
                                <span className="block text-sm">0,5 GB</span>
                            </td>
                            <td>
                                <span className="block text-sm">5 GB</span>
                            </td>
                            <td>
                                <span className="block text-sm">500 GB</span>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="text-left">
                                <h3 className="py-3">Připojíš se na plný server</h3>
                            </th>
                            <td>
                                <svg className="w-5 h-5 mx-auto text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                            </td>
                            <td>
                                <svg className="w-5 h-5 mx-auto text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                            </td>
                            <td>
                                <svg className="w-5 h-5 mx-auto text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="text-left">
                                <h3 className="py-3">Veniam suscipiantur</h3>
                            </th>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Not included in Free plan" className="w-5 h-5 mx-auto dark:text-gray-600">
                                    <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                                </svg>
                            </td>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Included in Standard plan" className="w-5 h-5 mx-auto dark:text-violet-400">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                </svg>
                            </td>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Included in Premium plan" className="w-5 h-5 mx-auto dark:text-violet-400">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                </svg>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="text-left">
                                <h3 className="py-3">Ornatus tacimates</h3>
                            </th>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Not included in Free plan" className="w-5 h-5 mx-auto dark:text-gray-600">
                                    <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                                </svg>
                            </td>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Not included in Standard plan" className="w-5 h-5 mx-auto dark:text-gray-600">
                                    <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                                </svg>
                            </td>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Included in Premium plan" className="w-5 h-5 mx-auto dark:text-violet-400">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                </svg>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="text-left">
                                <h3 className="py-3">Aliquam fastidii in mei</h3>
                            </th>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Not included in Free plan" className="w-5 h-5 mx-auto dark:text-gray-600">
                                    <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                                </svg>
                            </td>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Not included in Standard plan" className="w-5 h-5 mx-auto dark:text-gray-600">
                                    <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                                </svg>
                            </td>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Included in Premium plan" className="w-5 h-5 mx-auto dark:text-violet-400">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                </svg>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </>
}

export default Pricing
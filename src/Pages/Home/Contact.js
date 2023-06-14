import React from 'react';
import { toast } from 'react-hot-toast';

const Contact = () => {
    const handleSubmit = (event)=>{
        event.preventDefault();
        toast("Thanks For Your Support")
    }
    return (
        <div class="my-3 w-1/2 mx-auto">
            <div class="py-3 lg:py-8 px-2 mx-auto max-w-screen-md">
                <h1 className='text-center text-3xl font-bold'>Contact Us</h1>
                <p class="mb-4 lg:mb-6 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
                <form onSubmit={handleSubmit} class="space-y-8">
                    <div>
                        <label for="email" class="block mb-2 text-md font-bold text-black">Your email</label>
                        <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#eff6ff] focus:border-[#60a5fa] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#3b82f6] dark:focus:border-[#3b82f6] dark:shadow-sm-light" placeholder="name@shop.com" required></input>
                    </div>
                    <div>
                        <label for="subject" class="block mb-2 text-md font-bold text-black">Subject</label>
                        <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-[#3b82f6] focus:border-[#3b82f6] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#3b82f6] dark:focus:border-[#3b82f6] dark:shadow-sm-light" placeholder="Let us know how we can help you" required></input>
                    </div>
                    <div class="sm:col-span-2">
                        <label for="message" class="block mb-2 text-md font-bold text-black">Your message</label>
                        <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-[#3b82f6] focus:border-[#3b82f6] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#2563eb] dark:focus:border-[#2563eb]" placeholder="Leave a comment..."></textarea>
                    </div>
                    <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-[#1d4ed8] sm:w-fit hover:bg-[#1e40af] focus:ring-4 focus:outline-none focus:ring-[#3b82f6] dark:bg-[#2563eb] dark:hover:bg-[#1d4ed8] dark:focus:ring-[#1e40af]">Send message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
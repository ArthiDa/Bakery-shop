import React from 'react';

const Overview = () => {
    return (
        <div className='mx-auto w-1/2 my-5 grid grid-cols-1 lg:grid-cols-3 gap-10'>
            <div className="">
                <h1 className='text-center font-extrabold text-2xl rounded-lg drop-shadow-md tracking-wider p-5 bg-slate-400 text-white'>Users: 10</h1>
            </div>
            <div>
                <h1 className='text-center font-extrabold text-2xl rounded-lg drop-shadow-md tracking-wider p-5 bg-slate-400 text-white'>Products: 10</h1>
            </div>
            <div>
                <h1 className='text-center font-extrabold text-2xl rounded-lg drop-shadow-md tracking-wider p-5 bg-slate-400 text-white'>Orders: 10</h1>
            </div>
        </div>
    );
};

export default Overview;
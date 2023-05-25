import { faCheck, faCircleInfo, faCookie, faInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Feature = () => {
    return (
        <div className='my-10 lg:w-3/5 w-full mx-auto lg:p-10 p-5 lg:rounded-lg bg-white drop-shadow-md'>
            <div className="lg:flex lg:justify-around items-center">
                <div className='flex items-center mb-3'>
                    <FontAwesomeIcon className="text-5xl mr-2" icon={faCircleInfo} />
                    <div>
                        <h1 className="font-semibold">No Added Preservatives</h1>
                        <p className="text-sm">Premium Ingredients</p>
                    </div>

                </div>
                <div className='border-2 hidden lg:flex h-[50px]'></div>
                <div className='flex items-center mb-3'>
                    <FontAwesomeIcon className="text-5xl mr-2" icon={faCookie} />
                    <div>
                        <h1 className="font-semibold">Freshly Baked</h1>
                        <p className="text-sm">Everyday</p>
                    </div>
                </div>
                <div className='border-2 hidden lg:flex h-[50px]'></div>
                <div className='flex items-center mb-3'>
                    <FontAwesomeIcon className="text-5xl mr-2" icon={faCheck} />
                    <div>
                        <h1 className="font-semibold">100% Trusted</h1>
                        <p className="text-sm">Foods</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feature;
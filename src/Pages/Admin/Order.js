import React from 'react';

const Order = ({orderDetails,email}) => {
    return (
        <div className="card bg-base-100 shadow-xl">
            <img src={orderDetails.img} alt="Foods" className="rounded-t-xl" />
            <div className="card-body items-center text-center">
                <h2 className="card-title ">Tk.{orderDetails.price}</h2>
                <p className="hover:text-blue-400 text-gray-500 text-lg font-semibold">
                    {orderDetails.name}
                </p>
                <h2 className="card-title ">{email}</h2>
            </div>
        </div>
    );
};

export default Order;
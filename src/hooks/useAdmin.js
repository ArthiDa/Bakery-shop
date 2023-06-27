import React, { useEffect, useState } from 'react';

const useAdmin = (email) => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAdminLoading, setIsAdminLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`https://bakery-shop-server.onrender.com/users/admin/${email}`)
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    setIsAdmin(data.isAdmin);
                    setIsAdminLoading(false);
                    // console.log(isAdmin);
                })
        }
    }, [email])
    return [isAdmin, isAdminLoading];
};

export default useAdmin;
"use client"
import React, { useEffect, useState } from 'react'

const LocalStoragePractice = () => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
    });

    const [output, setOutput] = useState([]);

    useEffect(() => {
        const storedData = localStorage.getItem('data');
        if (storedData) {
            setOutput(JSON.parse(storedData));
        }
    }, []);

    function handleSubmits(e) {
        e.preventDefault();
        const newData = [...output, formData];
        setOutput(newData);
        localStorage.setItem('data', JSON.stringify(newData));
        setFormData({ firstName: '', lastName: '', email: '', address: '' });
    }

    const deleteData = () => {
        localStorage.removeItem('data');
        setOutput([]);
    }

    return (
        <div className='flex justify-center items-center flex-col min-h-screen bg-white'>
            <form onSubmit={handleSubmits} className='flex flex-col gap-2 bg-gray-200 p-4 rounded-lg' >
                <input required value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} type="name" placeholder='First Name ' className='py-2 px-3 w-[400px] text-black  outline-none border border-solid border-black shadow-lg  rounded-lg' />
                <input required value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} type="name" placeholder='Last Name ' className='py-2 px-3 w-[400px] text-black  outline-none border border-solid border-black shadow-lg  rounded-lg' />
                <input required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} type="email" placeholder='Email ' className='py-2 px-3 w-[400px] text-black  outline-none border border-solid border-black shadow-lg  rounded-lg' />
                <input required value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} type="address" placeholder='Address ' className='py-2 px-3 w-[400px] text-black  outline-none border border-solid border-black shadow-lg  rounded-lg' />
                <button type='submit' className='py-2 px-3 shadow-lg rounded-lg bg-blue-600 text-white font-bold'>Submit</button>
            </form>
            <div className='mt-10 flex flex-col gap-y-5 max-w-[400px] w-full'>
                {output.map((item, index) => {
                    return (
                        <div className='relative' key={index}>
                            <table className='space-2 border border-solid rounded-xl max-w-[400px] w-full border-black flex p-5'>
                                <tbody className='flex max-w-[600px] flex-col gap-y-2'>
                                    <tr className='flex w-full justify-between items-center'>
                                        <th className='w-1/4 text-black text-center'>First Name</th>
                                        <th className='w-1/4 text-black text-center'>Last Name </th>
                                        <th className='w-1/4 text-black text-center'>Email </th>
                                        <th className='w-1/4 text-black text-center'>Address </th>
                                    </tr>
                                    <tr className='flex w-full justify-between items-center max-w-300px'>
                                        <td className='w-1/4 text-black text-center'>{' '}{item.firstName}</td>
                                        <td className='w-1/4 text-black text-center'>{' '}{item.lastName}</td>
                                        <td className='w-1/4 text-black text-center'>{' '}{item.email}</td>
                                        <td className='w-1/4 text-black text-center'>{' '}{item.address}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )
                })}
                {output.length === 0 ? '' : <button onClick={deleteData} className='py-2 px-3 shadow-lg rounded-lg bg-red-600 text-white font-bold'>Delete All</button>}
            </div>
        </div>
    )
}

export default LocalStoragePractice
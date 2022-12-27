import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Signup = () => {

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const {user, signIn} = UserAuth()

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await signIn(email, password)
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className='w-full h-screen'>
                <img className='hidden sm:block absolute w-full h-full object-cover' src='https://assets.nflxext.com/ffe/siteui/vlv3/5e48e7b6-350d-48d9-96d6-de8ca173c89f/598617d3-a31c-4df8-8410-fe9dd22f0562/CA-fr-20221219-popsignuptwoweeks-perspective_alpha_website_small.jpg' alt='' />
                <div className='bg-black/60 fixed top-0 left-0 w-full h-screen z-10'></div>
                <div className='fixed w-full px-4 py-24 z-50'>
                    <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
                        <div className='max-w-[320px] mx-auto py-16'>
                            <h1 className='text-3xl font-bold'> Sign Up </h1>
                            <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                                <input onChange={(e) => setEmail(e.target.value)} className='p-3 my-2 bg-gray-500 ' type='email' placeholder='email' autoComplete='email' />
                                <input onChange={(e) => setPassword(e.target.value)} className='p-3 my-2 bg-gray-500' type='password' placeholder='password' autoComplete='password' />
                                <button className='bg-red-600 py-3 my-2 rounded cursor-pointer font-bold text-white'>Sign up</button>
                                <p className='py-4'><span className='text-gray-500'>Already subscribed to Netflix? </span><Link to='/login'>Sign In</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup
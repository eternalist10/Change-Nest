import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { logo } from '../assets';

const Signup = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" })

  const host = "http://localhost:5000"

  const onChange = (e) => {
    console.log(e.target.value);

    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${host}/api/auth/createuser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password })
    })
    const json = await response.json()
    console.log(json);
    localStorage.setItem('token', json.authtoken)
    navigate('/login', { replace: true })
  }

  return (
    <div className='flex flex-col mx-auto my-auto w-full'>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          alt="Your Company"
          src={logo}
          className="mx-auto h-10 w-auto"
        />
        <h2 className="mt-4 text-center text-2xl/9 font-bold tracking-tight text-white">
          Create your account
        </h2>
      </div>

      <div className="my-6 sm:mx-auto sm:w-full sm:max-w-sm ">
        <form className="space-y-3.5" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm/6 font-medium text-white">
              Name
            </label>
            <div className="mt-1">
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                onChange={onChange}
                value={credentials.name}
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm/6 font-medium text-white">
              Email address
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                onChange={onChange}
                value={credentials.email}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm/6 font-medium text-white">
              Password
            </label>
          </div>
          <div className="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              onChange={onChange}
              value={credentials.password}
            />
          </div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm/6 font-medium text-white">
              Confirm Password
            </label>
          </div>
          <div className="mt-0">
            <input
              id="cpassword"
              name="cpassword"
              type="password"
              required
              autoComplete="cpassword"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              onChange={onChange}
              value={credentials.cpassword}
            />
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md mt-6 bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Create account
            </button>
          </div>
        </form>

      </div>
    </div>
  )
}

export default Signup
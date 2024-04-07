import { useState } from "react"
import {Link, useNavigate} from 'react-router-dom'

function Login(){
    const [name , setName] = useState()
    const [email , setEmail] = useState()
    const [pass , setPass] = useState()
    const [conpass , setConpass] = useState()
    const history = useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(name)
        console.log(email)
        console.log(pass)
        console.log(conpass)
        if(pass === conpass){
          history('/moreinfo')
        }
        else{
          alert('Password and Confirm Password does not match')
        }
    }
    return(
        <div className="">
            <div className="w-screen text-3xl text-center font-reddit font-semibold py-4 border-y-2 border-black">teach:able</div>
            <div className="mt-2 space-y-6 px-2 pt-4">
                <div className="text-3xl text-center py-2 font-playfair">
                Get started with Teachable
                </div>
                <div className="py-2 text-center">
                    Join more than 100,000 creators who've sold over <span className="font-bold">$1 billion</span> in courses and coaching.
                </div>
            </div>
                <section>
  <div className="flex items-center justify-center px-4 sm:px-6 sm:py- lg:px-8 lg:py-24">
    <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
      <form className="" onSubmit={handleSubmit}>
        <div class="space-y-5">
          <div>
            <label for="name" className="text-base font-medium text-gray-900">
              {" "}
              Full Name{" "}
            </label>
            <div class="mt-2">
              <input
                class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <label for="email" class="text-base font-medium text-gray-900">
              {" "}
              Email address{" "}
            </label>
            <div class="mt-2">
              <input
                class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="text-base font-medium text-gray-900">
                {" "}
                Password{" "}
              </label>
            </div>
            <div class="mt-2">
              <input
                class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="password"
                placeholder="Password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="text-base font-medium text-gray-900">
                {" "}
                Confirm Password{" "}
              </label>
            </div>
            <div class="mt-2">
              <input
                class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="password"
                placeholder="Confirm Password"
                value={conpass}
                onChange={(e) => setConpass(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <div className="flex justify-center items-center">
                <input
                type="checkbox"
                className="p-4 mx-2 my-4 h-5 w-5 checked:bg-red-400"
                required
                />
                <label>I agree to the <Link className="underline">Terms of Use</Link> and <Link className="underline">Privacy Policy</Link></label>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              class="inline-flex items-center justify-center rounded-md bg-black px-4 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
            >
              Create Account{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="ml-2"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </form>
      <div className="text-center my-4">
        Already have an Account? <Link className="underline">Log in</Link>
      </div>
    </div>
  </div>
</section>

                
           
        </div>
    )
}
export default Login
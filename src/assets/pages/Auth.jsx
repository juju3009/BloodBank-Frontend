import React from 'react'

function Auth({register}) {
  return (
   

       <div className="min-h-screen flex items-center bg-white-100/90 justify-center bg-cover bg-center"style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2020/02/19/06/23/earth-4861456_1280.jpg')" }}>
      <form className="w-full max-w-md bg-white-100/90 backdrop-blur-md p-6 rounded-xl shadow-lg grid gap-4">
        
        <h2 className="text-3xl font-bold font-dancing-script text-center">
          {register ?  `Register` :`Login`}
        </h2 >

        {register && (
          <input  type="text"  placeholder="User Name" className="border p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-black-700 focus:border-black-800" />
        )}

        <input type="email" placeholder="Email" className="border p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-black-700 focus:border-black-800" />

        <input type="password" placeholder="Password" className="border p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-black-700 focus:border-black-800" />

<button className="bg-black hover:bg-gray-900 text-white py-2 rounded-md shadow-md border border-black transition">
  {register ? "Sign Up" : "Sign In"}
</button>


        {register && (
          <p className="text-center text-sm"> Already a User?{" "}<a href="/login" className="text-blue-600 hover:underline">Login</a></p>
        )}

        {!register && (
          <p className="text-center text-sm">New User?{" "}<a href="/register" className="text-blue-600 hover:underline">Register </a></p>
        )}
      </form>
    </div>
  )
}

export default Auth

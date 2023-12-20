function Navbar() {
    return (
      <div className="bg-red-400 h-20 flex content-center flex-wrap justify-between">
          <div className="flex content-center flex-wrap">
              <button className="text-white m-3 font-bold text-4xl">Kalvium</button>
              <button className="text-gray-600 mx-3 my-5 font-bold">About Us</button>
              <button className="text-gray-600 mx-3 my-5 font-bold">Contacts</button>
              <button className="text-gray-600 mx-3 my-5 font-bold">Courses</button>
          </div>
          <div className="flex content-center flex-wrap">
              <button className="m-3 text-white border-inherit border-2 px-5 py-1 rounded">Login</button>
          </div>
      </div>
    )
  }
  
  export default Navbar
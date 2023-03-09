import * as React from 'react'

function App() {
  return (
    <div className="dark:bg-black dark:text-white h-screen w-full flex items-center justify-center">
      <div className="w-96 text-center flex flex-col items-center">
        <img
          src="https://naffs.org.ng/wp-content/uploads/2021/03/naffs-logo-official.png"
          alt="NAFFS LOGO"
          className="h-40 w-40 object-contain"
        />
        <p className="text-4xl my-4 font-bold">NAFFS PROJECT</p>
        <p className="leading-7 text-gray-600 dark:text-gray-500">
        National Fellowship of Foursquare Students (NaFFS) is the national umbrella body of all the Foursquare Students Fellowships (FSF) existing in post-secondary and ...
        </p>
      </div>
    </div>
  )
}

export default App

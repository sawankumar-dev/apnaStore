import { useLocation, useOutlet } from "react-router"
import { AnimatePresence } from "framer-motion"
import React, { useState, useEffect } from "react"
import Navbar from "../../shared/ui/components/Navbar"
import PageTransition from "../../shared/ui/components/PageTransition"
import Footer from "../../shared/ui/components/Footer"

const MainLayout = () => {
  const location = useLocation()
  
  // 🔥 SOLUTION: Direct <Outlet /> use karne ke bajaye useOutlet hook ka use karein
  const outlet = useOutlet()
  const [renderedOutlet, setRenderedOutlet] = useState(outlet)

  // Jab bhi outlet badlega (yaani route badlega), hum use state mein update karenge
  useEffect(() => {
    if (outlet) {
      setRenderedOutlet(outlet)
    }
  }, [outlet])

  return (
    <div className="bg-linear-to-b from-gray-950 to-gray-900 min-h-screen text-gray-100 selection:bg-green-500/30 antialiased pb-12 pt-4 relative overflow-x-hidden">
      {/* Background glows */}
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
      <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

      <header className="sticky top-3 z-50 px-4 md:px-0 backdrop-blur-md mt-4">
        <Navbar />
      </header>

      <main className="max-w-6xl mx-auto mt-8 px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          {/* 
            🔥 key ko PageTransition par rakhein aur andar clone element 
            bana kar unique key dein taaki purana element animation ke dauran stable rahe.
          */}
          <PageTransition 
            key={location.pathname}   
            variant="slideUp"         
          >
            {renderedOutlet && React.cloneElement(renderedOutlet, { key: location.pathname })}
          </PageTransition>
        </AnimatePresence>
      </main>

      <footer className="border-t absolute bottom-0 w-full pb-5 border-slate-800 mt-5">
        <Footer/>
      </footer>
    </div>
  )
}

export default MainLayout

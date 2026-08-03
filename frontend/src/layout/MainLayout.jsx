import { Outlet } from "react-router"
import Navbar from "../components/Navbar"

const MainLayout = () => {
  return (
    // Pure page ke liye ek seamless rich dark background aur full viewport height
    <div className="bg-gradient-to-b from-gray-950 to-gray-900 min-h-screen text-gray-100 selection:bg-green-500/30 antialiased pb-12 pt-4">
        
        {/* Top Navbar Section - Jisme upar se halka gap maintain kiya hai */}
        <header className="sticky top-0 z-50 px-4 md:px-0 backdrop-blur-md bg-gray-950/40">
            <Navbar />
        </header>

        {/* Dynamic Route Pages Content Container */}
        <main className="max-w-6xl mx-auto mt-8 px-4 sm:px-6 lg:px-8">
            {/* Smooth entry animation child components ke liye */}
            <div className="animate-fade-in-up duration-300">
                <Outlet />
            </div>
        </main>
    </div>
  )
}

export default MainLayout

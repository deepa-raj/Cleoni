import Header from "../Common/Header.jsx"
import Footer from "../Common/Footer.jsx"
import { Outlet } from "react-router-dom"

const UserLayout = () =>{
    return <div>
    {/* Header */}
    <Header />
    {/* Main content */}
    <main>
        <Outlet />
    </main>
    {/* Footer */}
    <Footer />
    </div>
}
export default UserLayout
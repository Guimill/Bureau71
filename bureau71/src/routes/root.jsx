import Banner from "../components/banner"
import Footer from "../components/footer"
import Navbar from "../components/navbar"
import { Outlet } from "react-router-dom"

export default function Index() {

    return (
        <>
            <Navbar />
            <Banner />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )

}
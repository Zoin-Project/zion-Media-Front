import type { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

type Props = { children: ReactNode };
const MainLayout = ({ children }: Props) => {
    return (
        <div className="relative w-full min-h-screen flex flex-col">
            <Navbar/>
            <main className="flex-1">{children}</main>
            <Footer />
        </div>
    )
}
export default MainLayout;
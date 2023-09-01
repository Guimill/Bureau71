import { useRouteError } from "react-router-dom";
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function Error() {
    const error = useRouteError();
    console.error(error);

    return (
        <>
            <Navbar />
            <main>
                <div className="paragraphe">
                    <h1>Oops!</h1>
                    <p>Sorry, an unexpected error has occurred.</p>
                    <b>{error.statusText || error.message}</b>
                </div>
            </main>
            <Footer />
        </>
    );
}
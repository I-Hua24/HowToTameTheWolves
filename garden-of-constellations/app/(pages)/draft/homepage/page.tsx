import Link from "next/dist/client/link";
import Header from "../../../components/Header/Header";


export default function HomePage() {
    return (
        <main>
            <Header />
            <h1 className="text-4xl font-bold">
                Welcome to the Garden of Constellations!
            </h1>

            <p>
                This is the homepage in process.
            </p>
            <p>
                Here are the following links to existing pages:
            </p>
            <ul>
                <li>
                    <Link href="/travels">My Travels</Link>
                </li>
            </ul>
        </main>
    );
}




import Link from "next/dist/client/link";


export default function HomePage() {
    return (
        <main>
            <h1 className="text-4xl font-bold">
                Garden of Constellations
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




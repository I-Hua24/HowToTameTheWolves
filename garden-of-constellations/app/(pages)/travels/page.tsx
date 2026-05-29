import Link from "next/dist/client/link";

export default function TravelsPage() {
    return (
        <main>
         
         

            <p>
                This is the travel page in process.
            </p>
            <p>
                Here are the following cities that I have traveled to:
            </p>
            <ul>
                <li>
                    <Link href="/travels/montreal">Montreal</Link>
                </li>
                <li>
                    <Link href="/travels/taipei">Taipei</Link>
                </li>
            </ul>
        </main>
    );
}




import Link from "next/link";

export default async function TravelPage({ // we need to make the component async to use await inside it
  params,
}: {
  params: Promise<{ slug: string }>; //Promise is used to ensure that the data is fetched before rendering the page
}) {
  const { slug } = await params; //Await pause the assignment until the promise is resolved, 
  return (
    <main className="max-w-3xl mx-auto p-6">

      <h1 className="text-4xl font-bold">
        {slug}
      </h1>

      <p>
        This is a travel page for {slug}.
      </p>
    </main>
  );
}
export default function TravelPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold">
        {params.slug}
      </h1>

      <p>
        This is a travel page for {params.slug}.
      </p>
    </main>
  );
}
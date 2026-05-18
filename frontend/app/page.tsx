import DynamicRenderer from "@/components/DynamicRenderer";

async function getPortfolioData() {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";
    const res = await fetch(`${apiUrl}/portfolio`, { next: { revalidate: 60 } });
    if (!res.ok) return null;
    return res.json();
  } catch (e) {
    return null;
  }
}

export default async function Home() {
  const data = await getPortfolioData();

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Under Maintenance</h1>
          <p className="text-gray-500">Please check back later or start the backend/seed data.</p>
        </div>
      </div>
    );
  }

  return (
    <main>
      {/* Navbar would go here */}
      <DynamicRenderer registry={data.registry} data={data} />
      {/* Footer would go here */}
    </main>
  );
}

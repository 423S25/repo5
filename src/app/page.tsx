export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <h1 className="font-bold text-6xl">ESOF 423: Group 5</h1> 
       <h2>Staff Intranet Project</h2> 
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Made with Next.JS
          </li>
          <li>Group Members: Talia Clarke, Sierrah Paul, Ryan Plush, Ryley Sanden, Kira Hopkins, Mark Kwapisz, and Henry Weston</li>
        </ol>
      </main>
    </div>
  );
}

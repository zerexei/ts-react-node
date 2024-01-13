import { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    (async () => {
      const res = await fetch('http://localhost:3001/posts', {
        method: 'POST',
      });
      console.log(await res.json());
    })();
  }, []);

  return (
    <>
        <div className="section bug overflow-auto  ">
          <main className="w-[300rem] border border-blue-400">
            <header>
              <h1 className="heading-1">Posts</h1>
              <p className="h-screen"></p>
              <p className="h-screen"></p>
            </header>
          </main>
      </div>
    </>
  );
}

export default App;

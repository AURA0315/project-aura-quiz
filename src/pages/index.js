import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Project AURA: Companion Quiz</title>
      </Head>
      <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
        <h1>Welcome to Project AURA</h1>
        <p>This is the companion quiz prototype for the TV show "Love in the Algorithm".</p>
        <p>More features coming soon...</p>
      </main>
    </>
  );
}
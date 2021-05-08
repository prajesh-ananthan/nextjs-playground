import Link from 'next/link'

function HomePage() {
  return (
    <div>
      <h1>The Home Page</h1>
      {/* Linking to a page */}
      <ul>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/clients">Clients</Link>
        </li>
      </ul>
    </div>
  )
}
// This is used to import this function in another script
export default HomePage;

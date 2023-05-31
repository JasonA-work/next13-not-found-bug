import Link from "next/link"

export default function Home() {
  return (
    <>
      <h1>HomePage</h1>
      <br />

      <p>
        <Link href="/about">Link to "/about": Go to about page</Link>
      </p>
      <br />

      <p>
        <Link href="/xyz">
          Link to "/xyz": Go to a page that should throw 404 error
        </Link>
      </p>
      <br />

      <p>
        In normal routes, the application behaves as expected. But in the 404
        for routes, the 404 page refreshes itself every 3-4 seconds or so. This
        behavior shows both in the browser UI and when I check the network tab
        (all the resources are reloaded / refetched)
      </p>
      <br />
      <p>
        But in the 404 for routes, the 404 page refreshes itself every 3-4
        seconds or so. This behavior shows both in the browser UI and when I
        check the network tab (all the resources are reloaded / refetched).{" "}
        <strong>
          This seems to only happen on the development server (npm run dev). In
          PROD, with Vercel, things seem to be fine.
        </strong>
      </p>
    </>
  )
}

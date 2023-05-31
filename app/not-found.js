export default function NotFound() {
  return (
    <>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <h1>
        In normal routes, the application behaves as expected. But in the 404
        routes, the 404 page refreshes itself every 3-4 seconds or so. This
        behavior shows both in the browser UI and when I check the network tab
        (all the resources are reloaded / refetched)
      </h1>
    </>
  )
}

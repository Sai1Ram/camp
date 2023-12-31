import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-[#0a192f] w-full ">
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp

import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import BookContext from "../context/BookContext";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <BookContext>
        <Header />
        <Component {...pageProps} />
      </BookContext>
    </>
  );
}

export default MyApp;

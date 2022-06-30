import "../styles/globals.css";
import "../config/firebase.config";
import Navbar from "../components/Navbar";
import { AuthContextProvider, useAuth } from "../../context/authContext";
import { useRouter } from "next/router";
import ProtectedRoute from "../components/ProtectedRoute";
import store from "../../redux/store";
import { Provider } from "react-redux";
const publicRoutes = ["/login", "/register"];
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { user } = useAuth();

  const publicRoutes = ["/login", "/register"];
  return (
    <Provider store={store}>
      <AuthContextProvider>
        {publicRoutes.includes(router.pathname) ? (
          <Component {...pageProps} />
        ) : (
          <ProtectedRoute>
            <Navbar /> <Component {...pageProps} />
          </ProtectedRoute>
        )}
      </AuthContextProvider>
    </Provider>
  );
}

export default MyApp;

import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useAuth } from "../../context/authContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  const router = useRouter();

  useEffect(() => {
    if (!user) {
      console.log("auth");
      router.push("/login");
    }
  }, [router, user]);

  return <>{user ? children : null}</>;
};

export default ProtectedRoute;

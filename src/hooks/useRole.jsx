import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useRole = () => {
  const [role, setRole] = useState(null);
  const [roleLoading, setLoading] = useState(true);

  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    if (!user?.email) {
      setLoading(false);
      return;
    }

    axiosSecure
      .get(`/users/role?email=${user.email}`)
      .then(res => {
        setRole(res.data.role);
      })
      .finally(() => setLoading(false));
  }, [axiosSecure, user?.email]);

  return { role, roleLoading };
};

export default useRole;

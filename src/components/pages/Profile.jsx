import axios from "axios";
import { useEffect, useState } from "react";

// // fetching user data after login.
// const dispatch = useDispatch();
// useEffect(() => {
//   // Fetch user details when the application is loaded
//   dispatch(fetchUserDetailsAsync());
// }, [dispatch]);

function Profile() {
  const [userDetails, setUserDetails] = useState({});
  const fetchUserDetails = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/v1/users/profile`,
        {
          withCredentials: true, // Axios automatically sends cookies when using withCredentials
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setUserDetails(response.data.userDetails);
      // console.log(response.data.userDetails);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };
  useEffect(() => {
    fetchUserDetails();
  }, []);
  return (
    <>
      <h1>User Details</h1>
      {JSON.stringify(userDetails, null, 3)}
    </>
  );
}

export default Profile;

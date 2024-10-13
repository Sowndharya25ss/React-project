import {
  Routes,
  Route,
  Link,
  useParams,
  Navigate,
} from "react-router-dom";
import { useEffect, useState } from "react";

function Routing() {
  return (
    <>
      <div>
        <h1>Routing</h1>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/home" element={<Home></Home>}>
            Home Page
          </Route>
          {/* Nested Route */}
          <Route path="/about/*" element={<About></About>}>
            About Page
          </Route>
          <Route path="/contact" element={<Contact></Contact>}>
            Contact Page
          </Route>
          {/* Default Route */}
          <Route path="*" element={<None></None>}></Route>
          {/* Dynamic Route */}
          <Route path="/users/:id" element={<Users></Users>}></Route>
          <Route path="/" element={<Navigate to="/home"></Navigate>}></Route>
        </Routes>
      </div>
    </>
  );

  function Users() {
    const params = useParams();
    let [data, setData] = useState(null);
    useEffect(() => {
      (async function () {
        const response = await fetch(
          `https://fakestoreapi.com/users/${params.id}`
        );
        const data = await response.json();
        setData(data);
      })();
    }, []);

    return (
      <>
        {data == null ? (
          <h3>Loading...</h3>
        ) : (
          <>
            <h3>User name : {data.username}</h3>
            <h3>Name : {data.name.firstname + " " + data.name.lastname}</h3>
          </>
        )}
      </>
    );
  }

  function Home() {
    return <h3>Home</h3>;
  }
  function About() {
    return (
      <>
        <h3>About</h3>
        <Routes>
          <Route path="company" element={<Company></Company>}></Route>
        </Routes>
      </>
    );
  }

  function Contact() {
    return <h3>Contact</h3>;
  }
  function None() {
    return <h3>None of the above</h3>;
  }
  function Company() {
    return <h4>Nested Route</h4>;
  }
}

export default Routing;

import React from "react"
import {Link} from "@reach/router"

const Header = () => {
  return (
    <nav className="container pt3">
      <Link to="/">Home</Link> {" | "}
      <Link to="/courses">Courses</Link> {" | "}
      <Link to="/about">About</Link>
    </nav>
  )
}

export default Header

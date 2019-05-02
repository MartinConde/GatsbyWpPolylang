import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <Link
        to="/en/about"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        English About
      </Link>{" "}
      <br />
      <Link
        to="/es/nosotros"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        Spanish About
      </Link>{" "}
      <br />
      <Link
        to="/de/uber-uns"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        German About
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

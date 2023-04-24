import React from "react";

export default function Header() {
  return (
    <header className="bg-primary text-white">
      <div className="container text-center">
        <img
          width="125"
          height="125"
          src="https://graph.facebook.com/1243067599/picture?type=square"
          alt="..."
          className="rounded-circle"
        />
        <h1>Garrett Smith</h1>
        <p className="lead">Test Project</p>
        <p className="lead">
          <i className="fa fa-heart text-danger" />
          {`{ Laravel-React }`}
        </p>
      </div>
    </header>
  );
}

Header.displayName = "HomePageHeader";

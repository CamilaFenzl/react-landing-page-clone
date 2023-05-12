export default function Header() {
  return (
    <>
      <div
        data-w-id="5ee542f7-a595-ddf1-7526-e121148e361d"
        className="navbar-no-shadow wf-section"
      >
        <div
          data-animation="default"
          data-collapse="medium"
          data-duration="400"
          data-easing="ease"
          data-easing2="ease"
          data-doc-height="1"
          role="banner"
          className="navbar-no-shadow-container w-nav"
        >
          <div className="container-regular">
            <div className="navbar-wrapper">
              <a
                href="/"
                aria-current="page"
                className="navbar-brand w-nav-brand w--current"
              >
                <img
                  src="https://uploads-ssl.webflow.com/62b1c9375bce4d3ca2b1d20b/62b1c9a001c2b18ef207651d_MyDesignBuddy.svg"
                  loading="lazy"
                  width="225"
                  alt="My Design Buddy Logo"
                  className="image-14"
                />
              </a>
              <nav role="navigation" className="nav-menu-wrapper w-nav-menu">
                <ul role="list" className="nav-menu w-list-unstyled">
                  <li data-ms-content="!members" className="no-shrink">
                    <a href="#Pricing" className="nav-link">
                      Pricing
                    </a>
                  </li>
                  <li data-ms-content="!members" className="no-shrink">
                    <a href="#Work-Examples" className="nav-link">
                      Work
                    </a>
                  </li>
                  <li data-ms-content="!members" className="no-shrink">
                    <a href="#Craig-Tuffs" className="nav-link">
                      About me
                    </a>
                  </li>
                  <li data-ms-content="!members" className="no-shrink">
                    <a href="#FAQ-s" className="nav-link">
                      FAQ&#x27;s
                    </a>
                  </li>
                  <li data-ms-content="members" className="no-shrink">
                    <a href="#/ms/profile" className="nav-link">
                      My account
                    </a>
                  </li>
                  <li className="mobile-margin-top-10">
                    <div className="nav-button-wrapper">
                      <a href="#/ms/login" className="small-btn w-button">
                        Login
                      </a>
                      <a
                        data-ms-content="members"
                        href="#/ms/membership/redirect"
                        className="small-btn w-button"
                      >
                        Submit a request
                      </a>
                    </div>
                  </li>
                </ul>
              </nav>
              <div className="menu-button w-nav-button">
                <div className="w-icon-nav-menu"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

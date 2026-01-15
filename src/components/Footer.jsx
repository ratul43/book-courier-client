import React from "react";

const Footer = () => {
  return (
    <div className="bg-base-200 text-base-content ">
      <footer className="footer sm:footer-horizontal p-10">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Book Collection</a>
          <a className="link link-hover">Fare</a>
          <a className="link link-hover">Offers</a>
          <a className="link link-hover">Coverage</a>
          <a className="link link-hover">Charges</a>
        </nav>

        <nav>
          <h6 className="footer-title">Contact Us</h6>
          <h1>Book Courier Ltd.</h1>
          <h3>Address</h3>
          <p>
            Celilo St North Bonneville, Washington(WA), 98639
          </p>
          <h3>Phone</h3>
          <p>+(509) 427-0133 805 </p>
          <h3>Email</h3>
          <p>bookcourier@gmail.com</p>
        </nav>

        {/* Social Icons  */}

        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 16 16"
                className="fill-current"
              >
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
      </footer>
      <aside>
        <p className="text-center p-4">
          Copyright © {new Date().getFullYear()} - All right reserved by Book Courier Ltd
        </p>
      </aside>
    </div>
  );
};

export default Footer;

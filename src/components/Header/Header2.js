import React, { useEffect } from "react";
import "./Header1.css";
import { Link } from "react-router-dom";
import { RiChat1Line, RiSearchLine } from "react-icons/ri";
import $ from "jquery";

const Header2 = () => {

  function disableScroll() {
    document.body.style.overflow = "hidden";
    document.querySelector("html").scrollTop = window.scrollY;
  }

  function enableScroll() {
    document.body.style.overflow = null;
  }

  useEffect(() => {
    $("document").ready(function () {
      var trigger = $("#hamburger"),
        isClosed = true;
      var triggerop = $(".buy-info-head2");
      var trigerop = $(".backck-check");
      enableScroll();

      if (triggerop && trigger && trigerop) {
        trigger.click(function () {
          burgerTime();
        });

        trigerop.click(() => {
          burgerTime();
        });

        function burgerTime() {
          if (isClosed == true) {
            trigger.removeClass("is-open");
            trigger.addClass("is-closed");
            triggerop.addClass("open");
            trigerop.addClass("open-sheet");
            disableScroll();
            isClosed = false;
          } else {
            trigger.removeClass("is-closed");
            trigger.addClass("is-open");
            triggerop.removeClass("open");
            trigerop.removeClass("open-sheet");
            enableScroll();
            isClosed = true;
          }
        }
      }
    });
    if (window.location.pathname == "/") {
      var chageBg = $(".buy-info-head1");
      chageBg.addClass("home-bg-color");
    }
  }, []);

  useEffect(() => {
    $("document").ready(function () {
      var trigger = $("#search-op"),
        isClosed = true;
      var triggerop = $(".search-src");

      if (triggerop && trigger) {
        trigger.click(function () {
          burgerTime();
        });

        function burgerTime() {
          if (isClosed == true) {
            // trigger.removeClass("is-open");
            // trigger.addClass("is-closed");
            triggerop.addClass("openserach");
            isClosed = false;
          } else {
            // trigger.removeClass("is-closed");
            // trigger.addClass("is-open");
            triggerop.removeClass("openserach");
            isClosed = true;
          }
        }
      }
    });
  }, []);

  const changebackgroundd = () => {
    if (window.scrollY > 110) {
      const navlinkss = document.querySelector(".hamburger");
      const navlinks = document.querySelector(".buy-info-head1");
      if (navlinks && navlinkss) {
        navlinks.classList.add("buy-info-head1-exit");
        navlinkss.classList.add("hamburger-exit");
      }
    }
    if (window.scrollY <= 110) {
      const navlinkss = document.querySelector(".hamburger");
      const navlinks = document.querySelector(".buy-info-head1");
      if (navlinks && navlinkss) {
        navlinks.classList.remove("buy-info-head1-exit");
        navlinkss.classList.remove("hamburger-exit");
      }
    }
  };

  window.addEventListener("scroll", changebackgroundd);

  return (
    <div className="buy-info-head">
      <div className="buy-info-head1">
        <div className="buy-info-head2">
          <div className="buy-info-head3">
            <ul>
              <Link to="/" className="header-nav-linkk">
                <h4>BuyInfo</h4>
              </Link>
            </ul>
          </div>

          <div className="buy-info-head4">
            <ul>
              <Link to="/" className="header-nav-linkk">
                <li>Home</li>
              </Link>

              <li className="cate-drop-init">
                
                  Categories
                
                <div className="cate-drop-parent">
                  <div className="noob-hook"></div>
                  <div className="noob-profile-op">
                    <ul>
                    <Link
                              className="dropdown-link"
                              to={`/check/products`}
                            >
                              <li>Check</li>
                            </Link>
                    </ul>
                  </div>
                </div>
              </li>

              <Link to="/blogs" className="header-nav-linkk">
                <li>Blogs</li>
              </Link>
              <Link to="/forum" className="header-nav-linkk">
                <li>
                  <RiChat1Line /> Forum
                </li>
              </Link>
              <Link to="/" className="header-nav-linkk">
                <li id="search-op">
                  <RiSearchLine /> Search
                </li>
              </Link>

              <Link to="/login" className="header-nav-linkk">
                  <div className="autin-div">
                    <h3>Login</h3>
                  </div>
                </Link>
            </ul>
          </div>
        </div>
        <div className="hamburger" id="hamburger">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="backck-check"></div>
        <div className="search-src">
        </div>
      </div>
    </div>
  );
};

export default Header2;

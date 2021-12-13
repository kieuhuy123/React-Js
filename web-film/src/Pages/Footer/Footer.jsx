import React from "react";
import "./Footer.css";

import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { ImFilm } from "react-icons/im";

function Footer() {
  return (
    <footer>
      <div className="footer-container container">
        <div className="footer-links ">
          <div className="footer-link-wrapper  ">
            <div className="footer-link-items">
              <h2>Giới thiệu</h2>

              <Link to="/">Liên hệ</Link>
              <Link to="/">Sản xuất</Link>
              <Link to="/">Bản quyền</Link>
            </div>
            <div className="footer-link-items">
              <h2>Thể loại</h2>
              <Link to="/">Phim bộ</Link>
              <Link to="/">Phim lẻ</Link>
              <Link to="/">Phim chiếu rạp</Link>
            </div>
          </div>
          <div className="footer-link-wrapper">
            <div className="footer-link-items">
              <h2>Hỗ trợ </h2>
              <Link to="/">Câu hỏi thường gặp</Link>
              <Link to="/">Điều khoản sử dụng</Link>
              <Link to="/">Thông tin doang nghiệp</Link>
            </div>
            <div className="footer-link-items">
              <h2>Mạng xã hội </h2>
              <Link to="/">Instagram</Link>
              <Link to="/">Facebook</Link>
              <Link to="/">Youtube</Link>
            </div>
          </div>
        </div>

        <section className="social-media">
          <div className="social-media-wrap">
            <div className="footer-logo">
              <Link to="/" className="social-logo">
                <ImFilm className="navbar-icon" />
                SSPHIM
              </Link>
            </div>
            <small className="website-rights">SS PHIM © 2021</small>
            <div className="social-icons">
              <Link
                className="social-icon-link"
                to="/"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </Link>
              <Link
                className="social-icon-link"
                to="/"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </Link>
              <Link
                className="social-icon-link"
                to={
                  "//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber"
                }
                target="_blank"
                aria-label="Youtube"
              >
                <FaYoutube />
              </Link>
              <Link
                className="social-icon-link"
                to="/"
                target="_blank"
                aria-label="Twitter"
              >
                <FaTwitter />
              </Link>
              <Link
                className="social-icon-link"
                to="/"
                target="_blank"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}

export default Footer;

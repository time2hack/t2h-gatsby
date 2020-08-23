import React, { useRef } from "react";
import styled from "styled-components";
import siteConfig from "../../utils/siteConfig";
import loaderSvg from "../../img/loader.svg";

const Subscribe = () => {
  const input = useRef(null);
  const submit = () => {
    fetch(`${siteConfig.siteUrl}/members/api/send-magic-link/`, {
      method: "POST",
      referrer: siteConfig.siteUrl,
      referrerPolicy: "no-referrer-when-downgrade",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        email: input.current.value,
        emailType: "subscribe",
        labels: [],
      }),
    });
  };

  return (
    <section className="subscribe-form">
      <h3 className="subscribe-form-title">Subscribe to Time to Hack</h3>
      <p className="subscribe-form-description">
        Get the latest posts delivered right to your inbox
      </p>
      <form data-members-form="subscribe">
        <label htmlFor="subscribe-email">Please enter your email</label>
        <div className="form-group">
          <input
            ref={input}
            id="subscribe-email"
            className="subscribe-email"
            data-members-email=""
            placeholder="youremail@example.com"
            autoComplete="false"
          />
          <button className="button primary" type="submit">
            <span className="button-content">Subscribe</span>
            <span className="button-loader">
              <img src={loaderSvg} alt="Loading" />
            </span>
          </button>
        </div>
        <div className="message-success">
          <strong>Great!</strong> Check your inbox and click the link to confirm
          your subscription.
        </div>
        <div className="message-error">Please enter a valid email address!</div>
      </form>
    </section>
  );
};

export default Subscribe;

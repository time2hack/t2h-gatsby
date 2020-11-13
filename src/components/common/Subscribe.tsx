import React, { useRef } from "react";
import styled from "styled-components";
import siteConfig from "../../utils/siteConfig";
import loaderSvg from "../../img/loader.svg";

const SubscribeBox = styled.section`
  margin: 1.5em 0;
  padding: 6.5vw 7vw 8vw;
  border: 1px solid #e4eaed;
  text-align: center;
  background: linear-gradient(#fbfdfe, #f4f8fb);
  border-radius: 3px;

  .subscribe-form-title {
    margin: 0 0 3px;
    padding: 0;
    color: var(--darkgrey);
    font-size: 2.25rem;
    line-height: 1;
    font-weight: 600;
  }

  .subscribe-form-description {
    margin-bottom: 0.2em 0 1em;
    color: var(--midgrey);
    font-size: 1.375rem;
    line-height: 1.55em;
  }

  form {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-align: center;
    align-items: center;
    margin: 0 auto;
    max-width: 460px;
  }

  .form-group {
    -ms-flex-item-align: stretch;
    align-self: stretch;
    display: -ms-flexbox;
    display: flex;
  }

  .subscribe-email {
    display: block;
    padding: 10px;
    width: 100%;
    border: 1px solid #dbe3e7;
    color: var(--midgrey);
    font-size: 1.125rem;
    line-height: 1em;
    font-weight: 400;
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text;
    border-radius: 5px;
    transition: border-color 0.15s linear;
    -webkit-appearance: none;
  }

  button {
    position: relative;
    display: inline-block;
    margin: 0 0 0 10px;
    padding: 0 20px;
    height: 43px;
    outline: none;
    color: #fff;
    font-size: 1rem;
    line-height: 39px;
    font-weight: 400;
    text-align: center;
    background: linear-gradient(#50b6ef, #299fe0 60%, #299fe0 90%, #37a5e2);
    border-radius: 5px;
    -webkit-font-smoothing: subpixel-antialiased;
  }

  button:active,
  button:focus {
    background: #209bdf;
  }

  .button-loader,
  .message-error,
  .message-success {
    display: none;
  }

  .loading .button-content {
    visibility: hidden;
  }

  .loading .button-loader {
    position: absolute;
    top: 0;
    left: 50%;
    display: inline-block;
    margin-left: -19px;
    transform: scale(0.7);
  }

  .button-loader svg path,
  .button-loader svg rect {
    fill: #fff;
  }

  .error .message-error,
  .invalid .message-error,
  .success .message-success {
    margin: 1em auto 0;
    max-width: 400px;
    color: var(--red);
    font-size: 1rem;
    line-height: 1.5em;
    text-align: center;
  }

  .success .message-success {
    display: block;
    color: #96c02d;
  }

  .error .message-error,
  .invalid .message-error {
    display: block;
  }

  @media (max-width: 650px) {
    .subscribe-form-title {
      font-size: 1.5rem;
    }

    .subscribe-form-description {
      font-size: 1rem;
    }
  }

  @media (max-width: 500px) {
    .form-group,
    form {
      -ms-flex-direction: column;
      flex-direction: column;
    }

    .form-group {
      width: 100%;
    }

    button {
      margin: 10px 0 0;
      width: 100%;
    }
  }

  @media (prefers-color-scheme: dark) {
    border: none;
    background: linear-gradient(#000, #000);

    .subscribe-form-title {
      color: hsla(0, 0%, 100%, 0.9);
    }

    .subscribe-form p {
      color: hsla(0, 0%, 100%, 0.7);
    }

    .subscribe-email {
      border-color: #121417;
      color: hsla(0, 0%, 100%, 0.9);
      background: #0b0c0e;
    }

    .subscribe-email:focus {
      border-color: #3e434c;
    }

    .subscribe-form button {
      opacity: 0.9;
    }

    .subscribe-form .error .message-error,
    .subscribe-form .invalid .message-error {
      color: #ed694d;
    }

    .subscribe-form .success .message-success {
      color: #abcf51;
    }
  }
`;

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
    <SubscribeBox>
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
    </SubscribeBox>
  );
};

export default Subscribe;

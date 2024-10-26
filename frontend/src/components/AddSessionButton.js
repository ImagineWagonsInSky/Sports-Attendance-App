import React from "react";
import styled from "styled-components";

const Button = () => {
  return (
    <StyledWrapper>
      <button className="cssbuttons-io-button">
        <svg
          height="24"
          width="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" fill="currentColor" />
        </svg>
        <span>Add</span>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .cssbuttons-io-button {
  display: flex;
  align-items: center;
  font-family: inherit;
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
  padding: 0.7em 1.4em 0.7em 1.1em;
  color: white;
  background: #ad5389;
  background: linear-gradient(
    0deg,
    #1454a7 0%,
    #1454a7 100%
  );
  border: none;
  box-shadow: 0 0.7em 1.5em -0.5em #1454a7;
  letter-spacing: 0.05em;
  border-radius: 20em;
}

.cssbuttons-io-button svg {
  margin-right: 6px;
}

.cssbuttons-io-button:hover {
  box-shadow: 0 0.5em 1.5em -0.5em #1454a7;
}

.cssbuttons-io-button:active {
  box-shadow: 0 0.3em 1em -0.5em #1454a7;
}

`;

export default Button;

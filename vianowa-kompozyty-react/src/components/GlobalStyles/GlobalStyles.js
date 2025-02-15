import { createGlobalStyle } from "styled-components";
import "../../fonts/bebasneue/bebasneue.css";
import "../../fonts/roboto/roboto.css";

export const GlobalStyles = createGlobalStyle`
 :root {
  --accent: #ff8c00;
  --font-base: "Roboto", sans-serif;
  --font-accent: "Bebas Neue", sans-serif;
}

* {
  padding: 0px;
  margin: 0px;
  border: none;
}

::-webkit-scrollbar {
    width: 4px; 
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--accent);
    border-radius: 10px;
  }

*,
*::before,
*::after {
  box-sizing: border-box;
}


/* Links */

a,
a:link,
a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
  cursor: pointer;
}

/* Common */

aside,
nav,
footer,
header,
section,
main {
  display: block;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  font-size: inherit;
  font-weight: inherit;
}

ul,
ul li {
  list-style: none;
}

img {
  vertical-align: top;
}

img,
svg {
  max-width: 100%;
  height: auto;
}

address {
  font-style: normal;
}

/* Form */

input,
textarea,
button,
select {
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  background-color: transparent;
}

input::-ms-clear {
  display: none;
}

button,
input[type="submit"] {
  display: inline-block;
  box-shadow: none;
  background-color: transparent;
  background: none;
  cursor: pointer;
}

input:focus,
input:active,
button:focus,
button:active {
  outline: none;
}

button::-moz-focus-inner {
  padding: 0;
  border: 0;
}

label {
  cursor: pointer;
}

legend {
  display: block;
}

body {
  background-color: #010508;
  color: #fafaf5;

  font-family: var(--font-base);
  font-weight: 300;
}

.no-scroll {
  overflow: hidden;
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
}

.section {
  padding-top: 70px;
}

`;

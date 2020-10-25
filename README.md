

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![GPLv3 License][license-shield]][license-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/MaximilianHeidenreich/Snipp-api">
    <img src="https://via.placeholder.com/150" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Snipp API</h3>

  <p align="center">
    A simple API server for the <a href="https://github.com/MaximilianHeidenreich/Snipp">Snipp frontend</a>.
    <br />
    <a href="https://github.com/MaximilianHeidenreich/Snipp-api"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://snipp.maximilian-heidenreich.de">View Demo</a>
    ·
    <a href="https://github.com/MaximilianHeidenreich/Snipp-api/issues">Report Bug</a>
    ·
    <a href="https://github.com/MaximilianHeidenreich/Snipp-api/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

- [Table of Contents](#table-of-contents)
- [About The Project](#about-the-project)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)



<!-- ABOUT THE PROJECT -->
## About The Project

**! If you want to know more about Snipp, please continue reading inside the main project: [Snipp](https://github.com/MaximilianHeidenreich/Snipp)**

Snipp API provides a small API server for the Snipp frontend using express. The API server bridges the gap between the frontend and a PostgreSQL database which stores Snipp's data.

The server is pretty basic, only implementing a few routes to fetch & update data, but also exposes an API documentation / testing route using [Swagger UI](https://swagger.io/tools/swagger-ui/).

It can beasily be deployed to a standalone server or [Heroku](https://heroku.com/).


<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
```sh
npm install npm@latest -g
```

### Installation

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
```sh
git clone https://github.com/your_username_/Project-Name.git
```
3. Install NPM packages
```sh
npm install
```
4. Enter your API in `config.js`
```JS
const API_KEY = 'ENTER YOUR API';
```



<!-- USAGE EXAMPLES -->
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_



<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/MaximilianHeidenreich/Snipp-api/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the GNU GPLv3 License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Maximilian Heidenreich - github@maximilian-heidenreich.de

Project Link: [https://github.com/MaximilianHeidenreich/Snipp-api](https://github.com/MaximilianHeidenreich/Snipp-api)







<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/MaximilianHeidenreich/Snipp-api.svg?style=flat-square
[contributors-url]: https://github.com/MaximilianHeidenreich/Snipp-api/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/MaximilianHeidenreich/Snipp-api
[forks-url]: https://github.com/MaximilianHeidenreich/Snipp-api/network
[stars-shield]: https://img.shields.io/github/stars/MaximilianHeidenreich/Snipp-api
[stars-url]: https://github.com/MaximilianHeidenreich/Snipp-api/stargazers
[issues-shield]: https://img.shields.io/github/issues/MaximilianHeidenreich/Snipp-api?style=flat-square
[issues-url]: https://github.com/MaximilianHeidenreich/Snipp-api/issues
[license-shield]: https://img.shields.io/github/license/MaximilianHeidenreich/Snipp-api?style=flat-square
[license-url]: https://github.com/MaximilianHeidenreich/Snipp-api/blob/master/LICENSE.md
[product-screenshot]: images/screenshot.png
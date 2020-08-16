# Winget.run API Docs

This repo contains the hopefully up to date documentation explaining how to use our [winget.run](https://winget.run) API. These docs should be checked semi-regularly by anyone currently using the API as we will post any important information or deprecation notices here.

Since this is a repo solely dedicated to docs, the info here will be kept brief. If you want to learn more about any aspect of winget.run, please check out our other repos.

## Contents
- [Installation](#installation)
- [Development](#development)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Authors](#authors)
- [Acknowledgments](#acknowledgments)
- [License](#license)

## Installation

The docs can be built by running `yarn build` which will generate all the static files, or alternatively, one could clone the gh-pages branch of this repo.

## Development

One can run `yarn start` to run the app in development mode with hot reloading. The text part of the docs can be changed by editing the markdown files found in /docs. Info regarding any styling, config, or other changes can be found on the [Docusaurus](https://v2.docusaurus.io/) website.

## Deployment

We use GitHub Actions CI/CD for our deployments. Any code pushed to the master branch is built automatically and deployed to GitHub Pages on the gh-pages branch.

## Contributing

All contributions are welcome. If you notice any inconsistencies with the docs or anything that could be improved (I'm a programmer not a novelist), please open a ticket or make a pull request! We currently track all issued for this repo using [ZenHub](https://www.zenhub.com/) boards on the [API](https://github.com/winget-run/api) repo.

## Authors

- **Lukasz Niezabitowski** *(Dragon1320)*

## Acknowledgments

- My beloved coffee machine for making glorious coffee in the morning (and night) and keeping me awake during these 12 hour programming sessions as we rushed to get this released.
- Certain things mentioned in our docs' introduction section and certain other things that I was not allowed to leave in but kept in source control anyway to amuse anyone who comes across it.

## License

Ask us if you want to use the code, or suggest a license and make a pr.

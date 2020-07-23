---
id: introduction
title: Introduction
---

## Overview
This developer-oriented guide outlines the major features and use-cases behind out [winget.run](https://winget.run) REST API. Our major goal for this API has been to empower developers in fetching Winget package data without having to interacting with the GitHub API, possibly running into rate-limits.

This guide is divided into multiple sections:

### General
This part of the guide outlines generic API information that is required in order to gain access to our data;

- Versioning
- Authentication
- Ratelimiting

:::caution
Authentication and ratelimiting in particular may not work properly in API v2 pre-stable release
:::

### Routes
This part of the documentation discusses, in detail, the different endpoints available to developers;

- Packages
- Search
- Stats
- Manifests

:::info
Packages are cut-down versions of manifest with extra info used by [winget.run](https://winget.run).
:::

## Features
Our API provides a number of features for developers working with Winget packages. In order to display up-to-date package info, we monitor the Winget GitHub repo and sync our data every 30 minutes.

The following data can be accessed:
- Raw unmodified manifests
- Cut-down manifests with extra data for use on [winget.run](https://winget.run)
- API usage statistics

Additionally, we offer the ability to search through all published packages using key-words, bringing back the most relevant results.

## Contributing
Are we missing some packages or are our docs incomplete? If you notice any inconsistencies like these, please contact us on make any appropriate changes yourself on our [GitHub repo](https://github.com/winget-run/docs).

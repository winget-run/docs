---
id: introduction
title: Introduction
---

## Overview
This developer-oriented guide outlines the major features and use-cases behind our [winget.run](https://winget.run) REST API. Our major goal for this API has been to empower developers in fetching Winget package data without having to interacting with the GitHub API, possibly running into rate-limits.

This guide is divided into multiple sections:

### General
This part of the guide outlines generic API information that is required in order to gain access to our data;

- [Versioning](/docs/versioning)
- [Authentication](/docs/authentication)
- [Ratelimiting](/docs/ratelimiting)

:::caution
Authentication and ratelimiting in particular may not work properly in API v2 pre-stable release.
:::

### Routes
This part of the documentation discusses, in detail, the different endpoints available to developers;

- [Packages](/docs/packages)
- [Search](/docs/search)
- [Stats](/docs/stats)
- [Manifests](/docs/manifests)

:::info
[Packages](/docs/introduction#package-vs-manifest) are cut-down versions of manifest with extra info used by [winget.run](https://winget.run).
:::

## Features
Our API provides a number of features for developers working with Winget packages. In order to display up-to-date package info, we monitor the Winget GitHub repo and sync our data every 30 minutes.

The following data can be accessed:
- Raw unmodified manifests
- Cut-down manifests with extra data for use on [winget.run](https://winget.run)
- API usage statistics

Additionally, we offer the ability to search through all published packages using key-words, bringing back the most relevant results.

## Often overlooked info
This section describes small differences that appear between different REST APIs. While these are not need-to-know things per se, being aware of them will make any developer's life much easier.

### Undocumented routes
There are multiple API routes which appear in the production source code but may not be listed here. These routes usually require a specific token and are reserved for the developers' use. If any route is undocumented, it should be considered non-public and unstable and can change at any time. This is still the case even if the route in question appears under a stable API version in the source code.

### Reading the schema
Schemas for API responses use two types of formatting; The major data returned from routes is usually given as typescript interfaces, with any non-standard data types explained either explained where they appear or in the 'types' section below. The response schemas themselves are in yaml format and may reference the typescript interfaces.

:::caution
Despite different schema formatting in the docs, in reality, all responses are returned as application/json.
:::

The schema below indicates that on a successful response, the API will return a 200 response with the body being the following json:
```json
{
  "Example": [
    {
      "Id": "id",
      "Name": "example"
    },
    ...
  ]
}
```

#### Example schema

Example
```yaml
Id: string;
Name: string;
```

#### Successful response
```yaml
Code: 200
Body:
  Example: Example[]
```

### URI parameters
I was supposed to put something here but I forgot what it was. Ill get to it later:tm:.

### HTTP standards
The following http codes can be returned from the API:
- 200
- 400
- 401/403
- 404
- 500

Any 500 reponses should be considered issues on our end and should be reported as bugs on our [GitHub repo](https://github.com/winget-run/api).

All responses returned from the API which contain data, return a reponse with an application/json body.

### Errors and no data
Any routes which would return a single datum (not an array) will return a 404, eg. /v2/packages/Microsoft/NonExistentPackage. In contrast, any routes which would return multiple data (an array) will return a 200 and an empty array, eg. /v2/packages/Microsoft.

### Pagination
Routes which return an array in their response are generally paginated and will be marked as such in these docs. Any paginated route can accept the 'take' and 'page' query parameters. Take represents the number of documents per page, while page represents the page number (starting from 0 ofc) to return documents for.

### Ordering and sorting
Results for all paginated routes can be sorted and ordered by mulitple fields which depend on the data being requested.

#### Sorting
Sorting can be specified by including a 'sort' query parameter. Since this differs based on the data, allowed fields will be specified along with route-specific docs.

#### Ordering
Ordering is always the same regardless of data; 1 for ascending and -1 for descending and can be specified by setting the 'order' query parameter. The default is always ascending.

#### Take
- Min: 1
- Max: 24
- Default: 12

#### Page
- Min: 0
- Default: 0

### Dates
Any field typed as 'Date' in the API returns an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) encoded date as a string.

### Case sensitivity
All data passed to and returned from the API is case sensitive. This is reflected in the API response schemas for each route.

### Package vs manifest
Manifests are raw data taken from the [Winget GitHub repo](https://github.com/microsoft/winget-pkgs) and dumped into our database. Packages are our way of representing this data in a way that is more usable for our purposes, such as browsing and searching for packages, as well as being optimised for our database usage. While there is an manifest for each 'winget package' version, there is only a single package which encompasses and lists all the versions for a particular 'winget package'.

### API abuse
There are a few things which we would ask you to not do with our API:
- Hitting the rate-limits an excessive amount of time
- Scraping manifest data (you can use the GitHub API for that instead)

## Contributing
As you can probably imagine, this project requires a lot of work and many a developer has lost their sanity already. If you want to help us out you can do so in a multitude of ways. If you think you can help by doing any of the following or in some other way, please contact us or report any bugs/ideas on our [GitHub repo](https://github.com/winget-run/docs);
- Helping with development (devops, backend, frontend, design).
- Helping advertise out site. *<--- we're exceedingly bad at this!*
- Helping do mundane stuff (like writing docs).
- Reporting bugs and inconsistencies such as missing packages.
- Giving us ideas for how to make our site/API better.
- Supporting us via [monetary donation](https://ko-fi.com/wingetdotrun) (servers are expensive).

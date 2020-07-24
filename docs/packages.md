---
id: packages
title: Packages
---

## Overview
Routes prefixed with /package relate to fetching package data. Packages are cut-down versions of manifests with extra data used by [winget.run](https://winget.run). This section of the docs will discuss basic package routes with the 'advanced' ones being covered under 'search'.

## Schema
Below is the package schema in Typescript format:

Package;
```
Id: string;

Versions: string[];
Latest: {
  Name: string;
  Publisher: string;
  Tags: string[];
  Description?: string;
  Homepage?: string;
  License?: string;
  LicenseUrl?: string;
};

Featured: boolean;
IconUrl?: string;
Banner?: string;
Logo?: string;

UpdatedAt: Date;
CreatedAt: Date;
```

### Non-manifest fields
Multiple non-manifest fields exist on the package model. These mainly determine if and how a package is displayed on the homepage of [winget.run](https://winget.run);
- Featured
- IconUrl (image url)
- Banner (image url)
- Logo (image url)

## Routes
Package related routes are outlined below:

### Publisher packages
This route can be used to view all packages created by a single publisher.

#### Url
`/v2/packages/:publisher`

#### Successful response
```
Code: 200
Body:
  Packages: Package[]
  Total: number
```

#### No data response
```
Code: 200
Body:
  Packages: []
  Total: 0
```

### Single package
This route can be used to fetch info for a single package.

#### Url
`/v2/packages/:publisher/:packageName`

#### Successful response
```
Code: 200
Body:
  Package: Package
```

#### No data response
```
Code: 404
```

### Featured packages
This route returns a non-paginated list of all packages marked as 'featured'. This list should not exceed a few packages.

#### Url
`/v2/packages/featured`

#### Successful response
```
Code: 200
Body:
  Packages: Package[]
```

#### No data response
```
Code: 200
Body:
  Packages: []
```

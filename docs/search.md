---
id: search
title: Search
---

## Overview
This part of the guide explains how package search related routes function and the best practices surrounding them. We have decided to separate search related content from packages as these routes have added complexity which needs to be focused on and explained to allow developers to make the best use of them.

### Multiple fields
Our search algorithm uses MongoDB text search and examines multiple fields with a weighted score for each field in order to determine the most suitable results. While multiple results can be returned with the same score can be returned in the 'package search' rotue, these results are further filtered and sorted in the 'auitocomplete route'.

Search fields:
- Name
- Publisher
- Tags
- Description

While the first three fields are fully included in the search, as some descriptions can be lengthy, keywords are extracted and used for the search instead.

:::caution
Details including keyword extraction are not yet finalised.
:::

### Fuzzy search
In order to provide the most accurate results, we use fuzzy search. This means that users can not only search for exact matches, but partial words and phrases. In addition, similar sounding words are considered eqivalent in our search algorithm, such as colour and color. We achieve this internally through the combination of ngrams and the double metaphone algorithm.

### Additional options
Multiple additional options can be specified for our search algorithm through the use of query parameters which will affect the searching and filtering of results. These may be available or one or more search routes below.

#### Query
This is a 'search all fields' type query. Setting this parameter will disallow the following:
- name
- publisher
- description
- tags

#### Name/Publisher/Description
These parameters allow for searching by a specific field and can be combined.

#### Tags
This parameter allows for searching for package tags. Multiple tags can be specified by separating them by a ','.

#### Split query
Default: true.

This option splits the search query by whitespace and searched for each part separately.

#### Partial match
Default: false.

This option enabled the 'partial' part of fuzzy search; The query string will be split into ngrams which will be used for the search. This process is carried our on each part of the query if 'split query' is enabled.

#### Ensure contains
Default: false.

This option ensures that each final search result exactly contains the specified query, discarding non-matching results. Additionally, this option cannot be set if a non 'query' search paramter such as name, publisher, etc. is specified.

#### Prefer contains
Default: false.

This option functions similarly to 'ensure contains', however, instead of removing packages which don't exactly match the search query, results are re-shuffled based on how well they match the query.

#### Sample
Default: take (see [pagination](/docs/introduction#pagination)).

The number of packages to sample when 'prefer contains' is specified. This option exists in case packages outside of the number specified by 'take' could be a higher match. While the sorting logic will use 'sample' packages, only 'take' packages will be returned in the final response.

:::caution
When setting this to any value other than 'take', pagination will no longer work correctly. As such, this should be used for sampling a small number of top results, for example, for an autocomplete search.
:::

## Schema
This route returns 'package' responses with an extra added 'SearchScore' field. For more info about the this schema, please read the package routes section.

Package (with SearchScore)
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

SearchScore: number;
```

## Routes
Package search related routes are outlined below:

### Package search
This route can be used to search for packages. It should be used for viewing large amounts for search results.

> This route returns paginated results.

#### Url
`/v2/packages`

#### Query
```
query: string
name: string
publisher: string
description: string
tags: string
splitQuery: boolean
partialMatch: boolean
ensureContains: boolean
preferContains: boolean
sample: number
```

#### Successful response
```
Code: 200
Body:
  Packages: Package[] (with SearchScore)
  Total: number
```

#### No data response
```
Code: 200
Body:
  Packages: []
  Total: 0
```

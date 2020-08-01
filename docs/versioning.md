---
id: versioning
title: Versioning
---

## General notes
We use semantic versioning (major.minor.patch) to define our API versions; all changes on one particular major version should be backwards compatible. Endpoints for different API versions are defined using the major version preceeded by a 'v'. For example, all API routes under version 2.x.x will be preceeded with /v2.

:::info
The current minor and patch API versions can be found under releases on our [GitHub repo](https://github.com/winget-run/api).
:::

### Deprecation
When a new API version is deemed stable, any preceeding versions will become deprecated. These versions should not be used for any new projects while projects already using these versions should aim to update as soon as possible. Deprecated versions will continue to function for at least one month following deprecation after which no guarantees can be made. Any deprecation notices will be displayed on these docs.

As [mentioned in the introduction](/docs/introduction#undocumented-routes), these docs are the definitive guide as to which features of particular API versions and versiones themsolves are stable and backwards compatible. Even if a feature or version exists in the source code, it cannot be considered stable and may be removed without notice unless it is mentioned here.

### Unversioned routes
There may be routes in the source code which are purposefully unversioned. These should not be used anywhere, even by us on our website. The purpose of these routes is usually testing and they will most likely be removed. While things like this should not make their way into the stable API, things happen.

## Noteworthy versions
We currently operate two major versions of the API; v1 and v2.

### v1
This API versions is the current stable release, offering a smaller feature set than v2. As this version will be deprecated soon, any information, unless otherwise stated, applies to v2 only.

### v2
This API version is the successor to v1, offering a wider feature set. While this version is still under active development, it could be considered in 'beta' with no new major features or changes planned. This version is currently being used on [winget.run](https://winget.run).

:::caution
Updates to API v2 *MAY* cause breaking changes until a stable release, after which nothing should break.
:::

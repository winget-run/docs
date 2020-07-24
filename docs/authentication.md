---
id: authentication
title: Authentication
---

## Unauthenticated requests
Our API can be used without providing an access token, however, we only recommend this method if you plan to play around with the API or only intend to use it for personal purposes. If you intend to use our API for an application which can be accessed by others, please consider using using API tokens as it will allow for a smoother experience for everyone :smile:.

:::info
Ratelimits for unauthenticated requests will make large application development quite difficult.
:::

TODO: auth header not included in routes section

## Access tokens
Using access tokens allows us to more easily track API requests, which in turn makes it possibly to allow developers more access/power with peace of mind.

Using access tokens will unlock the following:
- Extra useful API routes
- Higher ratelimits

### Using tokens
API access tokens can be specified by including an **'xxx-access-token'** header in your request.

### Getting tokens
Currently, the only method of acquiring tokens is by contacting us on GitHub. We may look to automate this process if many people show interest in using our API.

:::caution
Access tokens are not fully implemented yet! This will change as API v2 stabilises.
:::

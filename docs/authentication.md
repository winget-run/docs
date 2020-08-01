---
id: authentication
title: Authentication
---

## Unauthenticated requests
Our API can be used (for the most part) without providing an access token, however, we only recommend this method if you plan to play around with the API or only intend to use it for personal purposes or want to call our API directly on your frontend. For any use of the API on the backend, please consider using using API tokens as it will allow for a smoother experience for everyone :smile:.

Any routes which require an access token will be marked accordingly.

## Access tokens
Using access tokens allows us to more easily track API requests, which in turn makes it possibly to allow developers more access/power with peace of mind.

Using access tokens will unlock the following:
- Extra useful API routes
- Higher rate-limits

### Using tokens
API access tokens can be specified by including an **'xxx-access-token'** header in your request and setting it to 'Bearer <your_token>'.

### Getting tokens
Currently, the only method of acquiring tokens is by contacting us on GitHub. We may look to automate this process if many people show interest in using our API.

:::caution
Developers should take extra care to not leak their tokens as contacting us to refresh the token may take some time.
:::

## Future plans
If many people show interest in using our API or if manually generating/refreshing token becomes too large of a chore, we may look to automate the process. This will most likely be accomplished by allowing users to log in with their GitHub or Microsoft accounts and linking any tokens with those.

This will allow for a better user experience and most importantly peace of mind for both us and the developer as refreshing and revoking tokens can be done simply and easily. As an added bonus, most people using Windows have a Microsoft account so any desktop Winget application which we or another developer may make in the future can benefit from this.

---
id: ratelimiting
title: Rate-limiting
---

## Authentication
All authenticated requests are limited using the client's token. If a token is not provided in any API request, this is deemed as aunauthenticated and our ratelimiting falls back to using the client's IP address.

While there is some tolerance between accidentally calling ratelimited routes and API abuse, application developers should strive to respect these limits through the use of application logic and headers providing ratelimiting information returned by our API. 

### Ratelimit abuse
Multiple and repeated instances of calling ratelimited routes may lead to one or more of the following:
- A longer cool-down period
- Revocation of the API token
- IP blacklisting

:::caution
Ratelimiting is not yet implemeted on API v2. This is an overview of the planned implementation.
:::

## Limits
info

### Global
info

### Search
info

### Headers
info

## Advanced
info

### Sliding window
[info](https://blog.cloudflare.com/counting-things-a-lot-of-different-things/)

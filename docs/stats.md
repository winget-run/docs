---
id: stats
title: Stats
---

## Overview
This section provides a brief overview of our stat routes. Currently there is only one route created for this purpose which tracks the number of requests made to the 'single package' route to give us a general idea which packages are being viewed more often than others. Please note that this route does not currently check for any types of abuse and no timeouts are implemented to prevent spam. These features may be implemented in a future API update.

:::caution
Due to potential exploits, limits (TBD) will be imposed to how much stat data can be queried at any one time.
:::

### Time ranges
Package stats are aggregated into daily intervals (UTC). However, the API provides an easy method of aggregating these numbers over a range of different intervals:
- Days
- ISO Weeks
- Months

In addition, iso dates specifying the starting and ending intervals between which to retrieve stats can be supplied. The before date defaults to the current date, whereas the after date defaults to the start of (unix) time. Dates specified for both fields are rounded down based on the binning interval specified (above).

## Schema
The stats schema is shown below:

Stats
```
Period: Date;
Value: number;
```

### Periods (aside)

> This section does not apply to data returned from the API, it only concerns our handing of stat data in our database.

Rather than using iso date strings for storage, we set the 'period' to a numerical value. The period field is dependent on our sampling period; The smallest interval (in ms) into which we bin our data. This is currently set as one day and will not change in API v2.

The 'period' value represents a rounded down count of sampling periods since the start of (unix) time and can be calculated as follows:
```
// 1 day
const SAMPLING_PERIOD = 1000 * 60 * 60 * 24;

const period = Math.floor(Date.now() / SAMPLING_PERIOD);
```

## Routes
Below are the routes which allow to fetch API usage statistics:

### Package stats
This route returns the number of requests made to the 'single package' route over a period of time binned into specified intervals.

The data returned here is guaranteed to be ordered by date (oldest first). However, if the 'single package' route was not accessed at all during a particular period, the Stats object for that period will be missing from the array. For example, if we request stats for the past week and the package was never viewed on Wednesday, the resulting data array will onyly have 6 elements.

#### Url
`/v2/stats`

#### Query
```
packageId: string (publisher.packageName)
resolution: string (day | isoWeek | month)
after: Date
before: Date
```

#### Successful response
```
Code: 200
Body:
  Stats:
    Id: string
    Data: Stats[]
```

#### No data response
```
Code: 200
Body:
  Stats:
    Id: string
    Data: []
```

---
id: manifests
title: Manifests
---

## Overview
Fetching raw manifest data from the API is covered by this section. While not as much utility is provides for manifest routes compared to packages, such as search, these endpoints provide all of the data that we acquire from GitHub in an unmodified state. This can be quite useful if, for example, some data which we leave out of our package schema is required for your application. If this is the case, we recommend searching through packages and using the returned ids to request additional data from the routes below.

## Schema
The full manifest schema is shown below. The schema *should* follow the [standards set out by Microsoft](https://docs.microsoft.com/en-us/windows/package-manager/package/manifest).

Manifest
```
  Id: string;
  Name: string;
  AppMoniker?: string;
  Version: string;
  Publisher: string;
  Channel?: string;
  Author?: string;
  License?: string;
  LicenseUrl?: string;
  MinOSVersion?: string;
  Description?: string;
  Homepage?: string;
  Tags?: string;
  FileExtensions?: string;
  Protocols?: string;
  Commands?: string;
  InstallerType?: string;
  Switches?: {
    Custom?: string;
    Silent?: string;
    SilentWithProgress?: string;
    Interactive?: string;
    Language?: string;
  };
  Log?: string;
  InstallLocation?: string;
  Installers: [
    {
      Arch: string;
      Url: string;
      Sha256: string;
      SignatureSha256?: string;
      Language?: string;
      InstallerType?: string;
      Scope?: string;
      SystemAppId?: string;
      Switches?: {
        Language?: string;
        Custom?: string;
      };
    }
  ];
  Localization?: [
    {
      Language: string;
      Description?: string;
      Homepage?: string;
      LicenseUrl?: string;
    }
  ];
```

## Routes
Manifest related routes are shown below:

### Single manifest
This route allows for fetching a single manifest given an id and version.

#### Url
`/v2/manifests/:id/:version`

#### Successful response
```
Code: 200
Body:
  Manifest: Manifest
```

#### No data response
```
Code: 404
```

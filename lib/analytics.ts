// Analytics configuration.
//
// These IDs are public by design -- they ship to the browser in the client
// bundle -- so they are safe to keep in the repo. They are still read from the
// environment first so a fork (or a local run) can point at its own property.

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? 'G-L10863XRX7'

export const SMARTLOOK_KEY =
  process.env.NEXT_PUBLIC_SMARTLOOK_KEY ?? '889372f4a12d3e91296e3ef819a02d90943a880d'

export const SMARTLOOK_REGION = 'eu'

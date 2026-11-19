# Dahab Bay Hotel

Website for Dahab Bay Hotel (Blue Hole Road, Dahab, South Sinai, Egypt). Astro, static, English at
the root and Arabic under `/ar/`. Built from the Giza Pyramids View Guest House site: search box →
availability list → room pages → three-step checkout → WhatsApp request.

**Nothing here has been confirmed with the hotel.** Every fact and photo comes from its public
listings, read on 2026-11-20. The hotel's own domain (dahabbayhotel.com, named on its Google entry)
did not answer.

## Run

    npm install
    npm run build
    npx astro preview --port 4331 --host 127.0.0.1    # http://127.0.0.1:4331/dahab-bay-hotel/

    node scripts/flow.mjs [ar]                         # the booking path end to end (needs the preview)
    BASE=http://127.0.0.1:4331/dahab-bay-hotel/ node scripts/shots.mjs work/shots 390 "" ar/
    node scripts/og.mjs                                # share image and touch icons

## Sources

| What | Source |
|---|---|
| Nine room types, their beds, sizes, features and four photos each; all 64 photos | Booking.com listing, as shown on Priceline |
| Address, check-in 12:00 / check-out 10:00, 24-hour desk, languages, airport transfer, pets | Trip.com, HotelsCombined, Priceline (they agree) |
| Coordinates, phone +20 109 007 1183, 4.0 from 970 reviews, the review lines | Google Maps entry, as shown on Wanderlog |
| 7.6 from 78 reviews | Booking.com score, as shown on Priceline |
| Coordinates of the places around | OpenStreetMap |

Left out because the listings contradict each other or are plainly wrong: the number of rooms (20
or 25), whether breakfast is included, "water park", "skiing", "nightclub", "fitness centre".

## What to edit: `src/data/content.json`

Room prices (US dollars, or `null` for "On request") and how many of each type, phone and WhatsApp,
the two review scores, the review lines. `src/data/content.ts` checks it at build time.

## To confirm with the hotel

- The WhatsApp number: it is assumed to be the Google phone number. HotelsCombined shows a different phone, +20 128 825 0908.
- Prices: none are published as the hotel's own; listings show roughly US$31 to US$49 a night.
- How many rooms of each type there are (the pickers allow 1 or 2; this is a guess).
- Whether breakfast is included in the rate.
- Bed layouts where the listing text contradicts its photos (the sea-view double shows more than one bed).
- That the hotel is happy for its Booking.com photos and guests' Google review lines to be used.

## Not built

The owner's dashboard (`/admin/`) from the Giza site, prices, online payment, live availability.
There is no GitHub repository yet; `astro.config.mjs` assumes `/dahab-bay-hotel` on GitHub Pages.

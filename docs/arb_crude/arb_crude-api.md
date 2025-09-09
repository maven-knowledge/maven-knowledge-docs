# Arb Crude API

The Maven Knowledge **Arb Crude API** gives you structured, secure access to our full historical and latest “Arb Crude” intelligence—providing an enhanced view of Crude movements across the arbitrage.

---

## Endpoints

| Endpoint                  | Description                                                                                   |
|---------------------------|----------------------------------------------------------------------------------------------|
| `/rest/v1/arb_crude_all`   | **All historical Arb Crude report data**. Includes every report line and all permitted columns, from your assigned access date onward. |
| `/rest/v1/arb_crude_latest`| **The most recent week's report data**. Snapshot of all the latest report lines from our Arb Crude report.

---

## Data Coverage

- Provides a cleansed, formatted and enhanced representation of our weekly Arb Crude report.
- All data is updated and synchronized each week, inline with our reporting cycle.
- **Row-level security (RLS):** You only see rows for your permitted timeframe and columns.

---

## Example Response

Here’s a typical JSON response row from `/rest/v1/arb_crude_all` (truncated for clarity):

```json
{
  "id": 59089,
  "report": "Arb Crude",
  "report_line": "GEM OO OTIS       140,000MT  01-03/02 DAS ISLAND/MED-UKC  WS 61.5   EXXON=USD 3,416,448 BASIS ANTIFER (VIA CAPE)",
  "report_date": "2025-01-20T03:47:02+00:00",
  "flag": null,
  "comment": null,
  "vessel": "GEM",
  "imo": 9406001,
  "owners_option": true,
  "owners_option_details": "VESSEL: OTIS (9408217)",
  "volume": 140000,
  "supply_start_date": "2025-02-01T00:00:00+00:00",
  "supply_end_date": "2025-02-03T00:00:00+00:00",
  "load_location": "DAS ISLAND",
  "load_country": "UAE",
  "load_region": "ARABIAN GULF",
  "load_east_west": "EAST",
  "load_location_2": null,
  "load_country_2": null,
  "load_region_2": null,
  "load_east_west_2": null,
  "destination_location": null,
  "destination_country": null,
  "destination_region": "MEDITERRANEAN SEA",
  "destination_east_west": "WEST",
  "destination_location_2": null,
  "destination_country_2": null,
  "destination_region_2": null,
  "destination_east_west_2": null,
  "arb_direction": "EAST-WEST",
  "freight": "WS 61.5",
  "freight_amount": 3416448,
  "freight_basis": "ANTIFER (VIA CAPE)",
  "trader": "EXXON",
  "destination_location_opt_2": null,
  "destination_country_opt_2": null,
  "destination_region_opt_2": "UK CONT",
  "destination_east_west_opt_2": "WEST",
  "freight_opt_2": null,
  "freight_amount_opt_2": null,
  "freight_basis_opt_2": null,
  "destination_location_opt_3": null,
  "destination_country_opt_3": null,
  "destination_region_opt_3": null,
  "destination_east_west_opt_3": null,
  "freight_opt_3": null,
  "freight_amount_opt_3": null,
  "freight_basis_opt_3": null,
  "destination_location_opt_4": null,
  "destination_country_opt_4": null,
  "destination_region_opt_4": null,
  "destination_east_west_opt_4": null,
  "freight_opt_4": null,
  "freight_amount_opt_4": null,
  "freight_basis_opt_4": null
}
```

**Note:** All fields are fully documented in the [Arb Crude Columns](arb_crude-columns.md) reference.

---

:::tip
You can filter and paginate both endpoints using all the techniques in [Queries & Filtering](../queries.md) and [Pagination](../pagination.md).
:::

---

**Next:** See [Arb Crude Columns](arb_crude-columns.md) for full details on every field, including data type, typical values, and example use.

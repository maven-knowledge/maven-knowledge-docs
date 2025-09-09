# Arb Fuel Oil+ API

The Maven Knowledge **Arb Fuel Oil+ API** gives you structured, secure access to our full historical and latest “Arb Fuel Oil+” intelligence—providing an enhanced view of Fuel Oil, CBFS, VGO and other relevant product movements across the arbitrage.

---

## Endpoints

| Endpoint                  | Description                                                                                   |
|---------------------------|----------------------------------------------------------------------------------------------|
| `/rest/v1/arb_fuel_all`   | **All historical Arb Fuel Oil+ report data**. Includes every report line and all permitted columns, from your assigned access date onward. |
| `/rest/v1/arb_fuel_latest`| **The most recent week's report data**. Snapshot of all the latest report lines from our Arb Fuel Oil+ report.

---

## Data Coverage

- Provides a cleansed, formatted and enhanced representation of our weekly Arb Fuel Oil+ report.
- All data is updated and synchronized each week, inline with our reporting cycle.
- **Row-level security (RLS):** You only see rows for your permitted timeframe and columns.

---

## Example Response

Here’s a typical JSON response row from `/rest/v1/arb_fuel_all` (truncated for clarity):

```json
{
  "id": 60231,
  "report": "Arb Fuel",
  "report_line": "MARLIN SICILY     130LSFO    02-03/07 BRAZIL/EAST         WS 86.0   PETROBRAS=USD 3,555,240 BASIS SINGAPORE",
  "report_date": "2025-07-01T04:15:00+00:00",
  "flag": null,
  "comment": null,
  "vessel": "MARLIN SICILY",
  "imo": 9721234,
  "owners_option": false,
  "owners_option_details": null,
  "volume": 130000,
  "product": "LSFO",
  "supply_start_date": "2025-07-02T00:00:00+00:00",
  "supply_end_date": "2025-07-03T00:00:00+00:00",
  "load_location": "RIO DE JANEIRO",
  "load_country": "BRAZIL",
  "load_region": "EAST COAST SOUTH AMERICA",
  "load_east_west": "WEST",
  "load_location_2": null,
  "load_country_2": null,
  "load_region_2": null,
  "load_east_west_2": null,
  "destination_location": null,
  "destination_country": "SINGAPORE",
  "destination_region": "SOUTH EAST ASIA",
  "destination_east_west": "EAST",
  "destination_location_2": null,
  "destination_country_2": null,
  "destination_region_2": null,
  "destination_east_west_2": null,
  "arb_direction": "WEST-EAST",
  "freight": "WS 86.0",
  "freight_amount": 3555240,
  "freight_basis": "SINGAPORE",
  "trader": "PETROBRAS",
  "destination_location_opt_2": null,
  "destination_country_opt_2": null,
  "destination_region_opt_2": null,
  "destination_east_west_opt_2": null,
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

**Note:** All fields are fully documented in the [Arb Fuel Oil+ Columns](arb_fuel-columns.md) reference.

---

:::tip
You can filter and paginate both endpoints using all the techniques in [Queries & Filtering](../queries.md) and [Pagination](../pagination.md).
:::

---

**Next:** See [Arb Fuel Oil+ Columns](arb_fuel-columns.md) for full details on every field, including data type, typical values, and example use.

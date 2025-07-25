# Arrivals API

The Maven Knowledge **Arrivals API** gives you structured, secure access to our full historical and latest “arrivals” intelligence—combining six core regional reports into a single, unified schema.

---

## Endpoints

| Endpoint                  | Description                                                                                   |
|---------------------------|----------------------------------------------------------------------------------------------|
| `/rest/v1/arrivals_all`   | **All historical arrivals report data**. Includes every arrival, all permitted columns, from your assigned access date onward. |
| `/rest/v1/arrivals_latest`| **The most recent week's report data**. Snapshot of all the latest reported arrivals from our suite of six reports. |

---

## Data Coverage

- Combines **Arabian Gulf, North Asia, NW Europe, Red Sea, Singapore, and USA** arrivals into a standardized and combined format.
- All data is updated and synchronized each week, inline with our reporting cycle.
- **Row-level security (RLS):** You only see rows for your permitted timeframe and columns.

---

## Example Payload

Here’s a typical JSON response row from `/rest/v1/arrivals_all` (truncated for clarity):

```json
{
  "id": 131845,
  "stem_status": "LADEN",
  "vessel": "AL MAHFOZA",
  "imo": "9271365",
  "volume": 100000,
  "product": "SRFO",
  "supply_start_date": "2025-07-07T00:00:00+00:00",
  "supply_end_date": "2025-07-09T00:00:00+00:00",
  "load_location": "JUBAIL",
  "load_country": "SAUDI ARABIA",
  "load_region": "RED SEA",
  "load_location_2": "FUJAIRAH",
  "load_country_2": "UAE",
  "load_region_2": "ARABIAN GULF",
  "freight": "RNR",
  "trader": "ARAMCO",
  "eta": "2025-07-23T00:00:00+00:00",
  "destination_location": "SHUQAIQ",
  "destination_country": "SAUDI ARABIA",
  "destination_region": "RED SEA",
  "receiver": "OIL CO.",
  "flag": "POSSIBLE PRODUCT",
  "comment": "CRUDE",
  "report_line": "23 JULY    AL MAHFOZA         100 SRFO   07-09/07  JUBAIL+FUJ  RNR     ARAMCO-SHUQAIQ!",
  "report": "Red Sea Arrivals",
  "report_date": "2025-07-21T03:58:20+00:00"
}
```

**Note:** All fields are fully documented in the [Arrivals Columns](arrivals-columns.md) reference.

---

:::tip
You can filter and paginate both endpoints using all the techniques in [Queries & Filtering](../queries.md) and [Pagination](../pagination.md).
:::

---

**Next:** See [Arrivals Columns](arrivals-columns.md) for full details on every field, including data type, typical values, and example use.

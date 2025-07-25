# Arrivals Table & Column Reference

Both `/arrivals_all` and `/arrivals_latest` endpoints return results in the **same structured format**.  
This table documents every available column, data type, and its meaning.

For guidance on how to filter or query using these columns, see [Example Queries & Filtering](../queries.md).

---

## Columns

| Column Name              | Type         | Description                                 | Example                        |
|--------------------------|--------------|---------------------------------------------|--------------------------------|
| id                       | integer      | Unique row identifier                       | 131845                         |
| stem_status              | text         | Current status of the stem                  | LADEN                          |
| vessel                   | text         | Vessel name                                 | AL MAHFOZA                     |
| imo                      | integer      | IMO number (vessel identifier)              | 9271365                        |
| volume                   | integer      | Cargo volume, metric tons                   | 100000                         |
| product                  | text         | Cargo/product name                          | SRFO                           |
| supply_start_date        | timestamptz  | Start date of supply/loading                | 2025-07-07T00:00:00+00:00      |
| supply_end_date          | timestamptz  | End date of supply/loading                  | 2025-07-09T00:00:00+00:00      |
| load_location            | text         | Port/location where cargo loaded            | JUBAIL                         |
| load_country             | text         | Country of load port/location               | SAUDI ARABIA                   |
| load_region              | text         | Region of load port/location                | RED SEA                        |
| load_location_2          | text         | Second load location (if applicable)        | FUJAIRAH                       |
| load_country_2           | text         | Country of second load location             | UAE                            |
| load_region_2            | text         | Region of second load location              | ARABIAN GULF                   |
| freight                  | text         | Freight type, notes, or contract type       | RNR                            |
| trader                   | text         | Trader or broker name                       | ARAMCO                         |
| eta                      | timestamptz  | Estimated time of arrival                   | 2025-07-23T00:00:00+00:00      |
| destination_location     | text         | Destination port/location                   | SHUQAIQ                        |
| destination_country      | text         | Country of destination                      | SAUDI ARABIA                   |
| destination_region       | text         | Region of destination                       | RED SEA                        |
| destination_location_2   | text         | Second destination location (if applicable) | (empty or e.g., ROTTERDAM)     |
| destination_country_2    | text         | Country of second destination location      | (empty or e.g., NETHERLANDS)   |
| destination_region_2     | text         | Region of second destination location       | (empty or e.g., NWE)           |
| receiver                 | text         | Receiving company or entity                 | OIL CO.                        |
| flag                     | text         | Alert/importance marker on this stem        | POSSIBLE PRODUCT               |
| comment                  | text         | Comment/information relating to flag        | CRUDE                          |
| report_line              | text         | The original report line from our emailed reports for reference | 23 JULY    AL MAHFOZA         100 SRFO   07-09/07  JUBAIL+FUJ  RNR     ARAMCO-SHUQAIQ! |
| report                   | text         | The report this line of data is associated with | Red Sea Arrivals           |
| report_date              | timestamptz  | Date and time of the report                 | 2025-07-21T03:58:20+00:00      |


---

:::tip
All columns in this table can be used for filtering and querying results—see [Queries & Filtering](../queries.md) for syntax and advanced examples.
:::

---

**Questions about a specific column, or need help with custom filtering? [Contact Support](../support.md).**

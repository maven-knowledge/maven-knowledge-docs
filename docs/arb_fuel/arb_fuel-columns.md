# Arb Fuel Oil+ Column Reference

Both `/arb_fuel_all` and `/arb_fuel_latest` endpoints return results in the **same structured format**.  
This table documents every available column, data type, and its meaning.

For guidance on how to filter or query using these columns, see [Example Queries & Filtering](../queries.md).

*Please note: The examples provided in the table are designed to explain each field, as opposed to necessarily being a true reflection of the 'report_line' example given.*

---

## Columns

| Column Name                      | Type         | Description                                                                 | Example |
|----------------------------------|--------------|-----------------------------------------------------------------------------|---------|
| id                               | integer      | Unique row identifier                                                       | 60231 |
| report                           | text         | The report this line of data is associated with                             | Arb Fuel |
| report_line                      | text         | Original text line from the Arb Fuel report for reference                   | MARLIN SICILY     130LSFO    02-03/07 BRAZIL/EAST         WS 86.0   PETROBRAS=USD 3,555,240 BASIS SINGAPORE |
| report_date                      | timestamptz  | Date and time the report was published                                      | 2025-01-20T03:47:02+00:00 |
| flag                             | text         | Alert/importance marker on this stem                                        | FAILED |
| comment                          | text         | Comment/information relating to flag                                        | STEM |
| vessel                           | text         | Vessel name                                                                 | MARLIN SICILY |
| imo                              | integer      | IMO number (vessel identifier)                                              | 9721234 |
| owners_option                    | boolean      | Whether the charterer has an owner’s option                                 | TRUE |
| owners_option_details            | text         | Details about the owner’s option, if applicable                             | VESSEL: OTIS (9408217) |
| volume                           | integer      | Cargo volume in metric tons                                                 | 140000 |
| product                          | text         | Cargo/product name                                                          | LSFO |
| supply_start_date                | timestamptz  | Start date of supply/loading                                                | 2025-02-01T00:00:00+00:00 |
| supply_end_date                  | timestamptz  | End date of supply/loading                                                  | 2025-02-03T00:00:00+00:00 |
| load_location                    | text         | Port/location where cargo is loaded                                         | RIO DE JANEIRO |
| load_country                     | text         | Country of the load port/location                                           | BRAZIL |
| load_region                      | text         | Region of the load port/location                                            | EAST COAST SOUTH AMERICA |
| load_east_west                   | text         | Aribitrage side for the load port/location                                  | WEST |
| load_location_2                  | text         | Second load port/location (if applicable)                                   |  |
| load_country_2                   | text         | Country of second load port/location                                        |  |
| load_region_2                    | text         | Region of second load port/location                                         |  |
| load_east_west_2                 | text         | Aribitrage side for the second load location                                |  |
| destination_location             | text         | Primary destination port/location                                           |  |
| destination_country              | text         | Country of destination port/location                                        | SINGAPORE |
| destination_region               | text         | Region of destination                                                       | SOUTH EAST ASIA |
| destination_east_west            | text         | Aribitrage side for destination                                             | EAST |
| destination_location_2           | text         | Second destination port/location (if applicable)                            |  |
| destination_country_2            | text         | Country of second destination                                               |  |
| destination_region_2             | text         | Region of second destination                                                |  |
| destination_east_west_2          | text         | Aribitrage side for second destination                                      |  |
| arb_direction                    | text         | Arbitrage trade flow direction based on primary load location and destination | WEST-EAST |
| freight                          | text         | Freight type                                                                | WS 86.0 |
| freight_amount                   | numeric      | Freight amount in USD                                                       | 3555240 |
| freight_basis                    | text         | Basis for the calculation of the freight amount                             | SINGAPORE |
| trader                           | text         | Name of the trader or charterer                                             | PETROBRAS |
| destination_location_opt_2       | text         | Potential/alternate destination port/location                               |  |
| destination_country_opt_2        | text         | Potential/alternate destination country                                     |  |
| destination_region_opt_2         | text         | Potential/alternate destination region                                      |  |
| destination_east_west_opt_2      | text         | Aribitrage side for alternate destination                                   |  |
| freight_opt_2                    | text         | Potential/alternate freight type                                            |  |
| freight_amount_opt_2             | numeric      | Potential/alternate freight amount in USD                                   |  |
| freight_basis_opt_2              | text         | Potential/alternate freight basis                                           |  |
| destination_location_opt_3       | text         | Third Potential destination location                                        |  |
| destination_country_opt_3        | text         | Third Potential destination country                                         |  |
| destination_region_opt_3         | text         | Third Potential destination region                                          |  |
| destination_east_west_opt_3      | text         | Aribitrage side for third Potential destination                             |  |
| freight_opt_3                    | text         | Third Potential freight type                                                |  |
| freight_amount_opt_3             | numeric      | Third Potential freight amount in USD                                       |  |
| freight_basis_opt_3              | text         | Third Potential freight basis                                               |  |
| destination_location_opt_4       | text         | Fourth Potential destination location                                       |  |
| destination_country_opt_4        | text         | Fourth Potential destination country                                        |  |
| destination_region_opt_4         | text         | Fourth Potential destination region                                         |  |
| destination_east_west_opt_4      | text         | Aribitrage side for fourth Potential destination                            |  |
| freight_opt_4                    | text         | Fourth Potential freight type                                               |  |
| freight_amount_opt_4             | numeric      | Fourth Potential freight amount in USD                                      |  |
| freight_basis_opt_4              | text         | Fourth Potential freight basis                                              |  |

---

:::tip
All columns in this table can be used for filtering and querying results—see [Queries & Filtering](../queries.md) for syntax and advanced examples.
:::

---

**Questions about a specific column, or need help with custom filtering? [Contact Support](../support.md).**

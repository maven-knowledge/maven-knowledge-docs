# Example Queries & Filtering

Maven Knowledge APIs use [PostgREST](https://postgrest.org/) for all REST endpoints, enabling highly flexible and powerful filtering using simple query parameters.  
This page provides real-world query examples for all major use cases. For a full list of advanced query operators, visit the [PostgREST API docs](https://postgrest.org/en/stable/api.html#operators).

---

## Core Filtering Syntax

You can filter results by appending query parameters to any endpoint.  
The basic structure is:

```http
GET /rest/v1/ENDPOINT?column=operator.value
```

- **Equality:** `=eq.` (equals)
- **Inequality:** `=neq.` (not equal)
- **Greater/Less Than:** `=gte.`, `=lte.`, `=gt.`, `=lt.`
- **Inclusion:** `=in.(value1,value2)`
- **Pattern Matching:** `=ilike.%value%` (case-insensitive, supports wildcards)

---

## Most Common Queries

### Filter by Date

Return all rows after a certain date:
```http
GET /rest/v1/arrivals_all?report_date=gte.2024-01-01
```

### Filter by Text (Exact Match)

Find all records where `product` is "HSFO":
```http
GET /rest/v1/arrivals_all?product=eq.HSFO
```

### Filter by Multiple Values (IN)

Find records with products "HSFO", "SRFO", or "LSFO":
```http
GET /rest/v1/arrivals_all?product=in.(HSFO,SRFO,LSFO)
```

### Case-Insensitive Partial String Match

Find vessels with "queen" in their name:
```http
GET /rest/v1/arrivals_all?vessel=ilike.%queen%
```

### Multiple Conditions

Find arrivals into Spain with volume ≥ 50,000 MT:
```http
GET /rest/v1/arrivals_all?destination_country=eq.Spain&volume=gte.50000
```

### Date Ranges

Find arrivals with an ETA in June 2024:
```http
GET /rest/v1/arrivals_all?eta=gte.2024-06-01&eta=lt.2024-07-01
```

### Filter by Secondary Fields

Find records where the second load country is "USA":
```http
GET /rest/v1/arrivals_all?load_country_2=eq.USA
```

---

## Advanced Filtering

### Date + Text

All arrivals of "HSFO" in July 2024:
```http
GET /rest/v1/arrivals_all?product=eq.HSFO&report_date=gte.2024-07-01&report_date=lt.2024-08-01
```

### Negation (Exclude a value)

All arrivals NOT for Singapore:
```http
GET /rest/v1/arrivals_all?destination_country=neq.Singapore
```

### Pagination (Limit/Range)

Fetch the first 100 rows:
```http
Range: 0-99
GET /rest/v1/arrivals_all
```
_See [Pagination](pagination.md) for more details._

---

## Operator Reference

| Operator        | Description                   | Example                            |
|-----------------|------------------------------|------------------------------------|
| eq              | Equal                        | `product=eq.HSFO`                |
| neq             | Not equal                    | `receiver=neq.Total`               |
| gt, gte         | Greater than, Greater or Eq. | `volume=gt.50000`                  |
| lt, lte         | Less than, Less or Eq.       | `eta=lt.2024-08-01`                |
| in              | In a set of values           | `product=in.(HSFO,SRFO,LSFO)`     |
| ilike           | Case-insensitive pattern     | `vessel=ilike.%queen%`             |

See the [PostgREST Operators Reference](https://postgrest.org/en/stable/api.html#operators) for even more operators and usage details.

---

:::tip
Complex filters can be chained together by joining parameters with `&`.  
All fields listed in the [Column Reference](arrivals/arrivals-columns.md) can be filtered using these operators.
:::

---

**Need a custom query or struggling with a filter? [Contact Support](support.md) for help building advanced queries.**

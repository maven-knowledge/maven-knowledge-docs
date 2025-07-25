# Pagination

All Maven Knowledge API endpoints are **paginated** for fast, reliable access to even very large datasets.  
This prevents timeouts and makes sure you can retrieve exactly as much data as you need, in manageable chunks.

---

## Default Page Size

- **Maximum page size:** 1000 rows per request  
  *(This is also the default if you do not specify a Range header.)*

---

## How to Paginate

To fetch additional rows beyond the first 1000, set the standard HTTP `Range` header in your request:

```http
Range: 0-999
GET /rest/v1/arrivals_all
```

- The Range uses **zero-based indexing** (`0-999` for the first 1000 rows, `1000-1999` for the next 1000, and so on).
- Continue incrementing the range until you receive an empty response (or a partial page).

---

## Example: Fetching All Data with Python

Here’s a real-world Python example that **automatically loops through all pages** and aggregates the results:

```python
import requests
import pandas as pd

MK_API_URL = "https://YOUR_PROJECT.supabase.co"
MK_API_KEY = "YOUR_ANON_KEY"

CLIENT_EMAIL = "client@example.com"
CLIENT_PASSWORD = "YOUR_PASSWORD!"

# Authenticate to get access token (see Authentication docs)
auth_url = f"{MK_API_URL}/auth/v1/token?grant_type=password"
auth_headers = {"apikey": MK_API_KEY, "Content-Type": "application/json"}
auth_payload = {"email": CLIENT_EMAIL, "password": CLIENT_PASSWORD}
auth_response = requests.post(auth_url, headers=auth_headers, json=auth_payload)
access_token = auth_response.json()["access_token"]

# Set up headers for data request
rest_url = f"{MK_API_URL}/rest/v1/arrivals_all"
headers = {"apikey": MK_API_KEY, "Authorization": f"Bearer {access_token}"}

all_data = []
page = 0
page_size = 1000

while True:
    range_start = page * page_size
    range_end = range_start + page_size - 1
    combined_headers = {**headers, "Range": f"{range_start}-{range_end}"}

    response = requests.get(rest_url, headers=combined_headers)
    if response.status_code != 200:
        print(f"Error fetching data: {response.status_code} - {response.text}")
        break

    batch = response.json()
    if not batch:
        break  # No more data to fetch
    all_data.extend(batch)
    print(f"Retrieved {len(batch)} rows (page {page + 1})")
    page += 1

print(f"Total rows downloaded: {len(all_data)}")
```

This script will keep looping—fetching 1000 rows at a time—until no more data is returned.

---

## Pagination Best Practices

- Always use the Range header to avoid timeouts with large queries.
- You can combine Range and filter queries (e.g., by date or product) for more targeted results.
- If your total results are less than 1000, you’ll only get a single response.

---

:::tip
For help building paginated integrations in other languages, or for extremely large data exports, [contact Support](support.md).
:::

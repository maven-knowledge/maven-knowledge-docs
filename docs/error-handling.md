# Error Handling

Maven Knowledge APIs use standard HTTP status codes and clear response formats to make error detection and troubleshooting straightforward.  
This section describes the most common error scenarios and how to handle them.

---

## Common Error Codes

| Status Code | Meaning              | Typical Cause                                           | Resolution                           |
|-------------|----------------------|--------------------------------------------------------|--------------------------------------|
| 200         | Success              | Request completed successfully                         | —                                    |
| 204         | No Content           | No data matches your filters or access permissions      | Check your query or time range       |
| 400         | Bad Request          | Invalid syntax, parameter, or filter in the request     | Review API docs and query structure  |
| 401         | Unauthorized         | Invalid or missing access token / credentials           | Check and refresh your token         |
| 403         | Forbidden            | Insufficient permissions (RLS policy or API limits)     | Check your access date and filters   |
| 404         | Not Found            | Endpoint does not exist, or wrong URL                   | Check endpoint spelling and version  |
| 429         | Too Many Requests    | Rate limit exceeded                                    | Reduce request frequency, backoff    |
| 500         | Server Error         | Temporary API/server issue                              | Wait and retry; contact support if persistent |

---

## Authentication Errors

- **401 Unauthorized**  
  Your bearer token is missing, expired, or invalid.  
  _Solution:_ Authenticate again to get a new token, and check you are including it in your `Authorization` header.

- **403 Forbidden**  
  Your token is valid but your user/account does not have permission to access this data.  
  _Solution:_ Check your `client_access_date` and permissions, or contact [Support](support.md).

---

## No Data Returned

- **Empty response (HTTP 204 or `[]` in JSON)**  
  - No matching rows for your filters or access level.
  - You may be filtering by a time period, product, or value where no data exists.
  - You may not have permission to access data before your assigned start date.

---

## File Output

- Downloaded files (e.g., CSV via the Python scripts) are always UTF-8 encoded and include all active column headers.
- If your download results in an **empty file**, this usually means your query/filter returned no data, or your user has no data after their access date.

---

## Example: Handling Errors in Python

Here’s an example snippet for catching authentication and data errors in a script:

```python
response = requests.get(rest_url, headers=combined_headers)
if response.status_code == 401:
    print("❌ Authentication failed. Please refresh your access token.")
    raise SystemExit()
elif response.status_code == 403:
    print("❌ Access denied. Check your permissions or access window.")
    raise SystemExit()
elif response.status_code != 200:
    print(f"❌ Unexpected error: {response.status_code} - {response.text}")
    raise SystemExit()
else:
    data = response.json()
    if not data:
        print("⚠️ No data available for your query or access level.")
```

---

## Best Practices

- **Always check HTTP status codes** before processing data.
- **Log error messages and status codes** in your integration to aid in troubleshooting.
- **Do not retry on 401/403 errors** without checking your credentials or permissions first.
- **Implement exponential backoff** (wait and retry) if you receive 429 errors.
- **Contact [Support](support.md)** if you receive repeated 500-series errors or cannot resolve the issue.

---

:::tip
If your integration stops working after a period of time, your access token may have expired.  
Always refresh your token when you receive a 401 error.
:::

---

**Still having trouble? [Contact Maven Knowledge Support](support.md) for troubleshooting and advanced integration help.**

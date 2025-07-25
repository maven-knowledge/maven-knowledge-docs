# Arrivals Code Example

This section provides a ready-to-use Python script to authenticate, download, and export data from the Maven Knowledge Arrivals API. It handles both authentication and pagination, and outputs a CSV file containing all rows you are permitted to access.

You can use this same script for both endpoints:
- **All Arrivals data:** Use `/rest/v1/arrivals_all` to download all arrivals since your assigned access date.
- **Recent Arrivals data:** Replace `/arrivals_all` with `/arrivals_latest` to fetch only the most recent week's arrivals.

Simply update the **MK_API_KEY**, **CLIENT_EMAIL** and **CLIENT_PASSWORD** in the configuration block before running.

---

## Example Python Script

```python
#--- Arrivals All Example ---

# Install dependencies (uncomment if running in Colab or first time)
# !pip install requests pandas --quiet

import requests
import pandas as pd

# === MK API CONFIGURATION ===
MK_API_URL = "https://noehiccfrwtbaoliaqrm.supabase.co"  # Maven Knowledge API URL
MK_API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5vZWhpY2Nmcnd0YmFvbGlhcXJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI1ODkxODEsImV4cCI6MjA2ODE2NTE4MX0.paMvVqSOM1dbYz4TmFqTe5axQSThPQMahOgCLc73Fho"  # Public API Key

CLIENT_EMAIL = "client@example.com"
CLIENT_PASSWORD = "StrongPassword123!"

# === STEP 1: Authenticate ===
print("🔐 Connecting to Maven Knowledge API...")
auth_url = f"{MK_API_URL}/auth/v1/token?grant_type=password"
auth_headers = {"apikey": MK_API_KEY, "Content-Type": "application/json"}
auth_payload = {"email": CLIENT_EMAIL, "password": CLIENT_PASSWORD}

auth_response = requests.post(auth_url, headers=auth_headers, json=auth_payload)

if auth_response.status_code == 200:
    access_token = auth_response.json()["access_token"]
    print("✅ Authentication successful.")
else:
    print(f"❌ Authentication failed: {auth_response.status_code} - {auth_response.text}")
    raise SystemExit("Please check your email/password and try again.")

# === STEP 2: Fetch Data with Pagination ===
print("📥 Downloading data from arrivals_all...")
rest_url = f"{MK_API_URL}/rest/v1/arrivals_all"
headers = {"apikey": MK_API_KEY, "Authorization": f"Bearer {access_token}"}

all_data = []
page = 0
page_size = 1000  # 1000 max per request

while True:
    range_start = page * page_size
    range_end = range_start + page_size - 1
    combined_headers = {**headers, "Range": f"{range_start}-{range_end}"}

    response = requests.get(rest_url, headers=combined_headers)
    if response.status_code != 200:
        print(f"❌ Error fetching data: {response.status_code} - {response.text}")
        raise SystemExit("Data request failed. Contact support if issue persists.")

    batch = response.json()
    if not batch:
        break  # No more data
    all_data.extend(batch)
    print(f"✅ Retrieved {len(batch)} rows (page {page + 1})")
    page += 1

if not all_data:
    print("⚠️ No data available for your access level or filters.")
else:
    print(f"✅ Download complete. Total rows: {len(all_data)}")

# === STEP 3: Save to CSV ===
df = pd.DataFrame(all_data)
output_file = "maven_knowledge_arrivals_all.csv"
df.to_csv(output_file, index=False)
print(f"💾 Data saved to {output_file}")
```

---

:::tip
To fetch only Arrivals data from the most recent report cycle (week), change this line:

```python
rest_url = f"{MK_API_URL}/rest/v1/arrivals_all"
```
to:

```python
rest_url = f"{MK_API_URL}/rest/v1/arrivals_latest"
```
:::

---

**Need this in another language, or want to automate your workflow? [Contact Support](../support.md) for custom integration help.**
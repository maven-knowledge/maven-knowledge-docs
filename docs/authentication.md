# Authentication & Security

Maven Knowledge APIs use secure, standards-based authentication and authorization built on **Supabase Auth** and PostgreSQL **Row Level Security (RLS)**.  
Every API call requires authentication via a **JWT bearer token** and your assigned API key.

---

## Authentication Workflow

1. **Obtain credentials:**  
   Get your account email and password, and your assigned API key (anon key) from Maven Knowledge.

2. **Request an access token:**  
   Use the `/auth/v1/token?grant_type=password` endpoint to exchange your credentials for a JWT access token.

3. **Use the access token:**  
   Include the returned bearer token in the `Authorization` header of all subsequent API requests.

---

## Example: Obtain an Access Token

```bash
curl -X POST 'https://YOUR_PROJECT.supabase.co/auth/v1/token?grant_type=password' \
  -H "apikey: YOUR_ANON_KEY" \
  -H "Content-Type: application/json" \
  -d '{"email": "client@example.com", "password": "YOUR_PASSWORD"}'
```

A successful response will include your bearer access token:

```json
{
  "access_token": "YOUR_ACCESS_TOKEN",
  "token_type": "bearer",
  "expires_in": 3600,
  "refresh_token": "YOUR_REFRESH_TOKEN",
  "user": {
    "id": "user-uuid",
    "email": "client@example.com",
    "aud": "authenticated"
    // ...additional metadata
  }
}
```

---

## Using Your Access Token

For all requests to the API, add the access token in the `Authorization` header:

```http
Authorization: Bearer YOUR_ACCESS_TOKEN
apikey: YOUR_ANON_KEY
```

Example request:

```bash
curl -X GET 'https://YOUR_PROJECT.supabase.co/rest/v1/arrivals_all' \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "apikey: YOUR_ANON_KEY"
```

---

## Token Lifecycle

| Token Type    | Validity         | Usage                                      |
|---------------|------------------|--------------------------------------------|
| Access Token  | 1 hour           | Include in all API requests                |
| Refresh Token | 30 days          | Use to obtain a new access token           |

**Note:**  
- When your access token expires (typically after 1 hour), use the refresh token to obtain a new access token.  
- Never expose your tokens in client-side code or URLs.

---

## Security Details

:::caution
All Maven Knowledge APIs require HTTPS. Requests made over HTTP will be rejected.
:::

- **HTTPS only:** All endpoints require HTTPS.  
- **Row Level Security (RLS):** Ensures you only access data you are permitted to view, based on your user and client permissions.
- **Client table permissions:** Your access is restricted by your assigned API start date. You can only see data on or after this date. If you would like access to our entire history of data, please [get in touch](support.md).

---

## Password & Account Security

- Passwords must meet industry-standard complexity requirements. You will be provided with a suitable password, or you can request a specific one when your account is setup.
- For password reset or management, contact Maven Knowledge support.
- For automated integrations, use a dedicated service account if available.

---

## Authentication Error Handling

| Error Code      | Meaning                                      | Solution                                            |
|-----------------|----------------------------------------------|-----------------------------------------------------|
| 401 Unauthorized| Invalid or expired access token               | Obtain a new token or refresh your access token     |
| 403 Forbidden   | Insufficient permissions (RLS enforced)       | Check user permissions or `client_access_date`      |
| 429 Too Many Requests | Rate limit exceeded                    | Implement backoff/retry strategy                    |

:::tip Troubleshooting
- Always use your bearer token and API key in every API request.
- If you receive repeated 401/403 errors, check your token validity, credentials, and assigned access date.
- For persistent issues, [contact Maven Knowledge Support](support.md).
:::

---

## Best Practices

- **Store tokens securely**—never hard-code them or expose in client-side code.
- **Implement automatic token refresh** logic for uninterrupted access.
- **Monitor authentication events** for security and compliance.
- **Use role-based access controls** to protect sensitive data.

---

**Ready to authenticate?**  
See the Python code example in [Arrivals Code Example](arrivals/arrivals-code-example.md), or contact [Support](support.md) for onboarding assistance.
# Introduction

# Welcome to the Maven Knowledge API

Maven Knowledge delivers high-integrity market intelligence through a robust, secure, and developer-friendly API platform.

Our APIs are built on **PostgreSQL** and powered by **Supabase**, ensuring high reliability, enterprise security, and exceptional performance for both real-time and historical data access. This architecture allows you to seamlessly integrate the oil industry’s most complete accurate and forward-focused view of global Fuel Oil, Feedstock, and Blendable Crude flows into your operational workflows, BI dashboards, or analytic pipelines.

---

## Why Maven Knowledge APIs?

- **Secure:** Enterprise-grade authentication and fine-grained access controls.
- **Reliable:** Backed by proven Postgres infrastructure and cloud-native practices.
- **Future-proof:** Scalable architecture for expanding data sets and new API products.
- **Unified Access:** Consistent authentication, schema, and query patterns across all endpoints.
- **Comprehensive:** Access both snapshot and historical data for robust analytics.

---

## Available APIs

| API                                   | Description                                                            | Availability    |
|----------------------------------------|------------------------------------------------------------------------|-----------------|
| **[Arrivals](arrivals/arrivals-endpoints)** | Our six Fuel Oil/ Heavy Sweet Arrivals reports; Arabian Gulf, North Asia, NW Europe, Red Sea, Singapore and USA - combined into a single accessible source.      | August 2025     |
| **Arb Fuel Oil +**                       | All Fuel Oil + CBFS + VGO being bought in the WEST and sold in the EAST.                                                | September 2025  |
| **Arb Crude**                            | All Crude Oil being bought in the WEST and sold in the EAST.                                                | September 2025  |
| **Iranian Champagne**                     | Tracks the Iranian Tanker Fleet and how their Crude and Fuel Oil is moving.                                             | October 2025    |
| **Fuel Oil Movements East of Suez**       | Detailed insights on all Fuel Oil trades East of Suez.                                                | October 2025    |

*Click an available API name for full technical documentation, schema, and usage examples.*

---

## Getting Started

### Documentation Structure

This API documentation is organized to help both newcomers and advanced integrators:

**General Concepts & Authentication**
- **Introduction:** Platform overview and key concepts.
- **Authentication:** How to obtain API credentials and use JWT-based authentication.
- **API Specific Documentation:** Endpoint reference, practical examples, and usage best practices.
- **Additional Information:** Details relating to pagination, requests and error handling.

**API-Specific Documentation**
- **Each API section includes:**
  - Introduction and key features
  - Complete endpoint and parameter reference
  - Practical request/response examples (with Python code and sample queries)
  - Error handling guidance

---

## Authentication

All Maven Knowledge APIs use **JWT-based authentication** for secure and auditable access.

**To get started:**
1. **Obtain your credentials** from Maven Knowledge (email and password; API key provided during onboarding).
2. **Request an access token** using the authentication endpoint.
3. **Include the bearer token** in all subsequent API requests.

> See the [Authentication](authentication.md) section for code samples and troubleshooting tips.

---

## Support and Resources

If you have questions, encounter any issues, or need help integrating:

- [Contact Maven Knowledge Support](support.md) for technical assistance.

---

## Integration Best Practices

- Use consistent authentication and API client logic across all endpoints for future compatibility.
- Use the most relevant endpoint for your data requirements.
- Apply query filters at the API layer to minimize payload size and improve performance.
- Leverage the provided code examples for rapid integration.

---

:::tip Ready to get started?
Jump to our [Arrivals API](arrivals/arrivals-endpoints.md), explore [Queries & Filtering](queries.md), or visit [Authentication](authentication.md) to begin.
:::



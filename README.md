
# Shopvilla

Shopvilla now runs as a Next.js application on Vercel. The existing Express API is exposed
through the Vercel serverless catch-all at `/api/*`, so the frontend and backend can use the
same domain.

## Local development

1. Copy `backend/.env.example` to `backend/.env` and set the required values.
2. Install dependencies with `npm install`.
3. Start Next.js and the local Express API with `npm run dev`.
4. Open `http://localhost:3000`.

## Vercel deployment

Import this repository into Vercel with the repository root as the project root. Vercel
detects the Next.js app automatically and builds it with `npm run build`.

Add these environment variables in the Vercel project settings:

- `MONGO_URI`
- `JWT_SECRET`
- `RAZORPAY_KEY_ID`
- `RAZORPAY_KEY_SECRET`
- `GMAIL_USER` and `GMAIL_PASS` (for password reset emails)
- `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, and `CLOUDINARY_API_SECRET`

`FRONTEND_URL` is optional for a same-domain deployment. If it is set, use the deployed
Vercel URL. Do not commit any `.env` file or secret values.

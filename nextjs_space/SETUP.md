# Local Development Setup Guide

## ✅ Completed Steps

1. **Dependencies Installed** - All npm packages have been installed using `npm install --legacy-peer-deps`
2. **Prisma Schema Fixed** - Updated for Windows compatibility
3. **Prisma Client Generated** - Prisma client has been generated

## 📋 Next Steps

### 1. Set Up PostgreSQL Database

You need to have PostgreSQL installed and running. Then update the `DATABASE_URL` in your `.env` file:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/database_name"
```

### 2. Run Database Migrations

Once your database is set up, run:

```bash
npx prisma migrate dev --name init
```

This will create all the necessary tables in your database.

### 3. (Optional) Seed the Database

To populate the database with initial admin users and default tags:

```bash
npx prisma db seed
```

Default admin credentials:
- Email: `john@doe.com` / Password: `johndoe123`
- Email: `admin@lastprompt.com` / Password: `admin123`

### 4. Configure Environment Variables

Make sure your `.env` file has the correct values:

- **DATABASE_URL**: Your PostgreSQL connection string
- **NEXTAUTH_URL**: `http://localhost:3000` (for local development)
- **NEXTAUTH_SECRET**: Generate a secure random string (you can use: `openssl rand -base64 32`)
- **Email Service**: Configure `RESEND_API_KEY` if you need email functionality (recommended for production). In development, emails will be logged to console.
- **hCaptcha**: Optional - leave empty to bypass captcha verification in development

### 5. Start the Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## 🔧 Troubleshooting

- If you encounter database connection errors, make sure PostgreSQL is running and the `DATABASE_URL` is correct
- If Prisma client errors occur, try running `npx prisma generate` again
- For email functionality, you'll need to configure Resend API key:
  - Sign up at https://resend.com
  - Get your API key from the dashboard
  - Add `RESEND_API_KEY` to your `.env` file
  - Optionally set `FROM_EMAIL` and `FROM_NAME` for custom sender info

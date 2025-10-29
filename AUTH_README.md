# 🔐 Highly Secure Authentication System

This project implements a comprehensive authentication system using **NextAuth.js v5**, **Prisma**, **Resend**, and **shadcn/ui** components.

## ✨ Features

### 🔑 Authentication Methods
- **Credentials Authentication** with email verification
- **Google OAuth** integration
- **Password Reset** functionality with secure tokens
- **Email Verification** for new accounts

### 🛡️ Security Features
- **Bcrypt password hashing** (12 rounds)
- **Email verification** required for credentials login
- **Secure token generation** for verification and password reset
- **Token expiration** (24h for verification, 1h for password reset)
- **Route protection** middleware
- **CSRF protection** (built into NextAuth.js)
- **Session management** with secure cookies

### 🎨 UI/UX Features
- **Beautiful shadcn/ui components**
- **React Hot Toast** notifications
- **Responsive design**
- **Password strength indicator**
- **Loading states** and proper error handling
- **Email templates** with professional styling

## 🚀 Setup Instructions

### 1. Install Dependencies

```bash
npm install next-auth@beta @auth/prisma-adapter bcryptjs react-hot-toast resend @types/bcryptjs
```

### 2. Environment Variables

Copy `.env.example` to `.env.local` and fill in your values:

```env
# Database
DATABASE_URL="your_database_connection_string"

# NextAuth.js
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your_secret_key_here"

# Google OAuth
GOOGLE_CLIENT_ID="your_google_client_id"
GOOGLE_CLIENT_SECRET="your_google_client_secret"

# Resend Email
RESEND_API_KEY="your_resend_api_key"
EMAIL_FROM="noreply@yourdomain.com"
```

### 3. Database Setup

```bash
# Generate Prisma client
npx prisma generate

# Push schema to database
npx prisma db push

# (Optional) Seed database
npx prisma db seed
```

### 4. Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URIs:
   - `http://localhost:3000/api/auth/callback/google` (development)
   - `https://yourdomain.com/api/auth/callback/google` (production)

### 5. Resend Setup

1. Sign up at [Resend](https://resend.com/)
2. Verify your domain
3. Create an API key
4. Add the API key to your environment variables

## 📁 File Structure

```
src/
├── app/
│   ├── api/auth/
│   │   ├── [...nextauth]/route.ts     # NextAuth.js API routes
│   │   ├── signup/route.ts            # User registration
│   │   ├── verify-email/route.ts      # Email verification
│   │   └── forgot-password/route.ts   # Password reset
│   ├── auth/
│   │   ├── signin/page.tsx            # Sign in page
│   │   ├── signup/page.tsx            # Sign up page
│   │   ├── forgot-password/page.tsx   # Forgot password page
│   │   ├── reset-password/page.tsx    # Reset password page
│   │   └── verify-email/page.tsx      # Email verification page
│   └── profile/page.tsx               # User profile page
├── components/
│   ├── providers.tsx                  # Session provider wrapper
│   └── ui/                           # shadcn/ui components
├── hooks/
│   └── useAuth.ts                    # Authentication hook
├── lib/
│   ├── auth.ts                       # NextAuth.js configuration
│   └── email.ts                      # Email service
├── types/
│   └── next-auth.d.ts               # NextAuth.js type extensions
└── middleware.ts                     # Route protection
```

## 🔒 Security Considerations

### Password Requirements
- Minimum 8 characters
- At least one uppercase letter
- At least one lowercase letter
- At least one number
- At least one special character (@$!%*?&)

### Token Security
- Verification tokens expire in 24 hours
- Password reset tokens expire in 1 hour
- Cryptographically secure random token generation
- Tokens are cleared after use

### Email Security
- Beautiful HTML email templates
- Clear security warnings in emails
- Professional styling to prevent phishing concerns

## 🎯 Usage Examples

### Protecting Routes

```tsx
// Using the middleware (automatic)
// Just add routes to the publicPaths array in middleware.ts

// Using the hook (manual)
import { useRequireAuth } from "@/hooks/useAuth"

export default function ProtectedPage() {
  const { user, isLoading } = useRequireAuth()

  if (isLoading) return <div>Loading...</div>

  return <div>Welcome, {user?.name}!</div>
}
```

### Getting User Session

```tsx
import { useSession } from "next-auth/react"

export default function Component() {
  const { data: session, status } = useSession()

  if (status === "loading") return <p>Loading...</p>
  if (status === "unauthenticated") return <p>Not logged in</p>

  return <p>Signed in as {session.user.email}</p>
}
```

### Server-side Authentication

```tsx
import { auth } from "@/lib/auth"

export default async function ServerComponent() {
  const session = await auth()
  
  if (!session) {
    return <div>Not authenticated</div>
  }

  return <div>Hello {session.user.name}</div>
}
```

## 🔧 Customization

### Adding New OAuth Providers

1. Install the provider package
2. Add provider to `src/lib/auth.ts`
3. Add environment variables
4. Update the signin page UI

### Custom Email Templates

Modify the email templates in `src/lib/email.ts`:
- `generateVerificationEmailHTML()`
- `generatePasswordResetEmailHTML()`

### Styling

The authentication pages use shadcn/ui components and can be customized by:
- Modifying the component props
- Updating the CSS classes
- Changing the color scheme in your tailwind config

## 🚨 Troubleshooting

### Common Issues

1. **Email not sending**: Check Resend API key and domain verification
2. **OAuth not working**: Verify redirect URIs and client credentials
3. **Database errors**: Ensure Prisma schema is up to date
4. **Session issues**: Check NEXTAUTH_SECRET and NEXTAUTH_URL

### Development Tips

- Use `npm run dev` to start development server
- Check browser console for client-side errors
- Check server logs for API errors
- Use Prisma Studio to inspect database: `npx prisma studio`

## 📚 Documentation Links

- [NextAuth.js Documentation](https://authjs.dev/)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Resend Documentation](https://resend.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.
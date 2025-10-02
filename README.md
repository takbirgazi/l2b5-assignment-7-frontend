# 🌐 Portfolio Frontend — (Next.js + TypeScript + TailwindCSS + `shadcn/ui`)

> A modern, responsive frontend for the Portfolio project, built with **Next.js App Router**, **TypeScript**, **TailwindCSS**, and **`shadcn/ui`**.  
> Features dynamic content fetching (blogs, projects) from a backend API, polished UI, and secure JWT-based authentication for dashboard access.

---

## Features

### Public Pages
- Engaging hero section with background image and call-to-action
- About section with concise bio and "See More" option
- Blog and project listings
- Skills showcase
- Client testimonials
- Fully responsive and accessible design
- Incremental Static Regeneration (ISR) for blogs and projects

### Private Pages (Admin Only)
- Secure JWT authentication for login
- Owner dashboard to manage blogs and projects
- Create, update, and delete blog/project entries
- Robust form validation and error handling
- Toast notifications for user feedback

### Additional Highlights
- Smooth UI interactions with `shadcn/ui` components
- Reusable hooks (`useAuth`, `useFetch`) and API utilities
- Lazy-loading for performance optimization
- Semantic and accessible HTML

---

## Tech Stack

- **Framework:** Next.js 15 (App Router)  
- **Language:** TypeScript  
- **Styling:** TailwindCSS, `shadcn/ui`  
- **HTTP:** Axios / fetch  
- **Authentication & State:** JWT, localStorage, custom hooks  
- **Notifications:** react-hot-toast  

---

## Recommended Folder Structure

```
frontend/
├── app/                # Next.js App Router pages
│   ├── dashboard/      # Admin dashboard
│   ├── blog/           # Blog pages
│   ├── project/        # Project pages
│   ├── page.tsx        # Home page
│   └── layout.tsx      # Root layout
├── components/         # Reusable UI components
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── BlogSection.tsx
│   ├── ProjectSection.tsx
│   ├── Skills.tsx
│   ├── Testimonials.tsx
│   └── Navbar.tsx
├── lib/                # API calls & utilities
│   ├── api.ts
│   └── utils.ts
├── hooks/              # Custom React hooks
│   ├── useAuth.ts
│   └── useFetch.ts
├── public/
├── .env                # Environment variables
├── package.json
├── tsconfig.json
└── README.md
```

---

## Getting Started

1. **Clone the repository:**

    ```bash
    git clone https://github.com/takbirgazi/l2b5-portfolio-frontend.git
    cd l2b5-portfolio-frontend
    ```

2. **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

3. **Configure environment variables:**

    Create a `.env` file and set:

    ```
    NEXT_PUBLIC_API_URL=https://your-backend-url.vercel.app/api/v1
    NEXT_PUBLIC_SITE_NAME=Your Portfolio
    ```

4. **Run the development server:**

    ```bash
    npm run dev
    # or
    yarn dev
    ```
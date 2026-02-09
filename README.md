# AppifyDevs Analytics Dashboard

Responsive admin analytics dashboard built with Next.js, TypeScript, Redux, Tailwind CSS, and Recharts.

## Live Demo
- https://appify-devs-job-task.vercel.app/

## Features
- Collapsible sidebar + top header layout
- KPI cards with trend indicators
- Revenue (area), Orders (bar), User Distribution (pie), and Traffic Sources charts
- Filter controls (date range + user type) that update dashboard data
- Skeleton loading, error states, and animated transitions
- Light/Dark theme support

## Tech Stack
- Framework: Next.js (App Router)
- Language: TypeScript
- Styling: Tailwind CSS
- Charts: Recharts
- State Management: Redux Toolkit
- Data: Mock JSON + simulated API delay
- Animations: Framer Motion

## Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the dev server:
   ```bash
   npm run dev
   ```
3. Open `http://localhost:3000`

## Architecture Notes
- **State** lives in `redux/` slices (`dashboard`, `filter`, `theme`).
- **Data** is served from `data/mockData.json` and shaped in `lib/api/dashboard.ts`.
- **Components** are organized by feature (`components/dashboard/`, `components/layout/`, `components/ui/`).
- **Charts** live in `components/dashboard/charts/`.

## Filters Behavior
- Date range controls how many recent points are shown:
  - `7days` → last 3 points
  - `30days` → last 6 points
  - `12months` → all 12 points
- User type filters user distribution and scales KPI values proportionally.

## Assumptions
- Date range options are mapped to available mock data points.
- User type filter adjusts KPI values proportionally for demo purposes.
- Traffic Sources are percentages and always sum to ~100.

## Scripts
- `npm run dev` – start dev server
- `npm run build` – production build
- `npm run start` – start production server
- `npm run lint` – run ESLint

## Deployment
Deploy on Vercel or Netlify. Add your live URL in the **Live Demo** section.

## Test Credentials
- Not applicable (no auth implemented).

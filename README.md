# Munchies web app - For all your restaurant needs

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/your-username/munchies-web-app.git
cd munchies-web-app
```
2. Install dependencies:

```bash
npm run install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Add env credentials in `.env` for API URL and SANITY Studio:
```
NEXT_PUBLIC_API_URL=''
NEXT_PUBLIC_SANITY_PROJECT_ID=''
NEXT_PUBLIC_SANITY_DATASET=''
```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to access the web app.
Open [http://localhost:3000/sanity-studio](http://localhost:3000/sanity-studio) with your browser to access sanity studio for content management.

## Project details

### User stories
- As a user, the first time I open the website, I should see an unfiltered list of all restaurants
- As a user, I should be able to select a filter from the sidebar or the topbar. When I select a filter, the List View should reflect the new updates
- As a user, I should be able to select multiple filters
- As a user, I should be able to deselect a filter by clicking on it. If I deselect any filter(s), the List View should reflect the new updates

### Tech Stack
- Next.js v15
- Typescript
- TailwindCSS
- ShadCN
- Zustand
- Sanity CMS (for content management)

### Project structure
- `app/`: Contains the main application components and pages.
- `/components`: Contains reusable UI components (`Button`, `Badge`) and custom components (`FilterCard`, `RestaurantListItem` etc.)
- `/hooks`: Contains custom hooks.
- `/lib`: Contains utility functions and API actions.
- `/public`: Contains static assets such as images and fonts.
- `/sanity`: Contains sanity configuration files
- `/store`: Contains Zustand store management configuration.
- `/types`: Typescript types and interfaces used throughout the entire application.

### Vercel Link
- This project has been deployed on Vercel and can be accessed via the link above:
[Link](https://munchies-web-app.vercel.app/)

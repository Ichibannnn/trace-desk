<!--  Features -->

Core: (Must Have)

- Create an issue
- Viewing issues
- Update an issue
- Deleting an issue

Advance:

- User authentication
- Assigning issues
- Sorting issues
- Filtering Issues

-Make it work first. Then, improve it (Refactor)

<!-- Setting up the Development Environment -->

Extension:

- ES7 + React/Redux/React-Native sn
- Javascript and Typescript
- Tailwind CSS Intellisence
- Prisma

<!-- Creating a Project -->

- npx create-next-app@latest <ProjectName>
- cd <ProjectName>
- npm run dev
- cleanup -> page.tsx
- global.css

@import "tailwindcss";

:root {
--background: #ffffff;
--foreground: #171717;
}

@theme inline {
--color-background: var(--background);
--color-foreground: var(--foreground);
--font-sans: var(--font-geist-sans);
--font-mono: var(--font-geist-mono);
}

@media (prefers-color-scheme: dark) {
:root {
--foreground: 255, 255, 255;
}
}

body {
color: var(--foreground);
font-family: Arial, Helvetica, sans-serif;
}

<!-- Building the Navbar -->

- app/Navbar.tsx
- import to layout.tsx

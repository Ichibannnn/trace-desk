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
- links array
- nav, links, map links,
- usePathname, react-icons
- styling, npm i classnames@2.3.2

<!-- Intalling MySql -->

-https://dev.mysql.com/downloads
-workbench or data grip

<!-- Setting Up Prisma -->

-npm i prisma@5.3.1
-npx prisma init
-create model Issue
-npx prisma format
-npx prisma migrate dev

<!-- Building an API -->

-app/apiFolder/issues/route.ts
-zod
-prisma client

<!-- Setting Up Radix UI -->

-npm install @radix-ui/themes
-import "@radix-ui/themes/styles.css"; (layout.tsx)
-Theme

<!-- Setup New Issue Page -->

-issues/new/page.tsx
-Theme proveider to layout.tsx

<!-- Customizing Radix UI Theme -->

-ThemePanel
-Check theme setup
-Config font
-Theme/Typography search next

- inter/classname config
- add app/theme-config.css
- paste custom css to radix ui

.radix-themes {
--default-font-family: var(--font-inter);
}

-import './theme-config.css'
-check if the font-family was changed to "Inter"

<!-- Adding a Markdown Editor -->

-install npm install --save react-simplemde-editor easymde

<!-- Handling Form Submission -->

-npm install react-hook-form
-npm i axios

<!-- Implement Client-side validation -->

-Refactore schema/new file
-npm i @hookform/resolvers

<!-- Extracting Error Handler (Reusable) -->

-ErrorMessage.tsx

<!-- Clear .next cache -->

$ cd "D:/ICHIBAN/Systems/trace-desk" && rm -rf .next && echo "Cleared .next cache"

--

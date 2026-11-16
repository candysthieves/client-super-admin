# 🗯️ Lumos Super Admin client

🙏 **Welcome to the Super Admin for the Lumos application!**

📝 **Description:**
A web-based administrative panel **Superadmin** for managing system users. The application interacts with the server via a GraphQL API and provides tools for authorization, viewing, searching, sorting, and deleting users, as well as retrieving detailed information about each user.

🍭 Developed by team **Candy Thieves**:

**Team-lead** - _Vladislav Kravchenko_

**Front-end:**
[Lumos app Client Super Admin repository](https://github.com/candysthieves/client-super-admin)
[Lumos app Client repository](https://github.com/candysthieves/client)

- [Vikastgn](https://github.com/Vikastgn) - Viktoriya Stognieva (**Main**)
- [Intrstng](https://github.com/intrstng) - Andrei Babich
- [hoakiin](https://github.com/hoakiin) - Ekaterina Olesik
- [VladSkij](https://github.com/VladSkij) - Vladislav Skalskij
- [tymanskaya](https://github.com/tymanskaya) - Ekaterina Tymanskaya

**Back-end:**
[Lumos app API repository](https://github.com/candysthieves/api)

- [VladSapozhnik](https://github.com/VladSapozhnik) - Vladislav Sapozhnik (**Main**)
- [ChiteS33](https://github.com/ChiteS33) - Anatolij Novik

### Key Pages Super Admin:

- 🔐 Sign In
- 📜 Users list
  - Uploaded files
  - Payments
  - Followers
  - Following
- 📊 Statistics
  - Users
  - Photos
- 📰Payments list
- ❓ Forgot Password
- 📧 Posts list

## Technology Stack 💻📚

- TypeScript
- Next.js 16 (App Router)
- TanStack Query
- React Hook Form
- Zod validation
- ESLint
- Prettier
- Stylelint
- Radix UI
- SCSS
- ...

## Deploy 🌐

[Lumos app deploy link](https://lumosapp.net/)

## 🔗 Related Projects

[UI-kit Lumos npm-package](https://www.npmjs.com/package/@candy.thieves/ui-kit-lumos) — a UI component library (UI-kit) for the **Lumos** application

[UI-kit Lumos repository](https://github.com/candysthieves/lumos-ui-kit) — UI-kit library repository for the **Lumos** application

[Figma Design](https://www.figma.com/design/UehOuThHVruUR8jcC22FXS/Inctagram?m=auto&t=DixPh2DJFl4iZtwB-6) — mockups and design system

## Getting Started (Client)🚀

### Requirements

- Node.js installed locally.
- pnpm installed locally.

Follow these steps to run the application locally:

1.  **Clone the repository:**

    ```bash
    https://github.com/candysthieves/client-super-admin.git
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd client-super-admin
    ```

3.  **Switch to the `dev` branch:**

    ```bash
    git checkout dev
    ```

4.  **Install dependencies:**

    ```bash
    pnpm install
    ```

    If you have problems with running the script, use the following command in the CLI:

    ```bash
    pnpm install --legacy-peer-deps
    ```

5.  **Configure environment variables:** [ _TODO: check if it will be necessary in the future_]

- Create a `.env` file in the root directory based on the `.env.example` file.
- Fill in the required credentials in the `.env` file.

6.  **Start the development server:**

    ```bash
    pnpm run dev
    ```

7.  **Access the application:**

- Open your browser and navigate to the link provided in the CLI.

## Available Scripts ⚙️

- **`build`:** 📦 Builds the application for production.

  ```bash
  pnpm run build
  ```

- **`dev`:** 💻 Starts the Next.js development server.

  ```bash
  pnpm run dev
  ```

- **`dev:host`:** 🛡️ Starts the Next.js development server and binds the server to the specified hostname with experimental HTTPS support in development mode.

  ```bash
  pnpm run dev:host
  ```

- **`stylelint:check`:** 🎨 Checks SCSS files for stylelint errors.

  ```bash
  pnpm run stylelint:check
  ```

- **`stylelint:fix`:** 🔧 Automatically fixes SCSS stylelint errors.

  ```bash
  pnpm run stylelint:fix
  ```

- **`format:check`:** ✅ Checks code formatting with Prettier.

  ```bash
  pnpm run format:check
  ```

- **`format:fix`:** ✨ Automatically formats code with Prettier.

  ```bash
  pnpm run format:fix
  ```

- **`lint:check`:** 🔍 Runs ESLint to check for code quality issues.

  ```bash
  pnpm run lint:check
  ```

- **`lint:fix`:** 🐛 Automatically fixes ESLint errors.

  ```bash
  pnpm run lint:fix
  ```

- **`preview`:** 👀 Starts a local server to preview the production build.

  ```bash
  pnpm run preview
  ```

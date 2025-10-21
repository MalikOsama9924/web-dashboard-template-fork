# 🚀 Next.js Web/Dashboard Template

A **comprehensive** and **production-ready** template for building both **web applications** and **admin dashboards** using **TypeScript**, **Next.js**, and **Material-UI**.

## ✨ Features

### 🏗️ Architecture

- **Next.js** with App Router and React 19
- **TypeScript** with centralized type system
- **Modular TypeScript types** with barrel exports
- **Material-UI** with Emotion styling
- **Tailwind CSS** for utility-first styling
- **SCSS** support for advanced styling
- **Turbo** mode for faster development

### 🔐 Authentication & Authorization

- Complete authentication system with login/logout
- Protected route middleware
- Role-based access control
- Public, private, and hybrid route types
- Redirect handling for unauthorized access

### 🎨 UI & Theming

- **Material-UI** components and icons
- **Dark/Light theme** switching with `next-themes`
- **CSS Variables Design System** with automatic theme switching
- **Responsive design** with Tailwind CSS
- Custom theme configuration
- SCSS modules for component-specific styles
- **Framer Motion** for smooth animations

### 🗃️ State Management

- **Redux Toolkit** for global state
- **React Query** for server state and caching
- Pre-configured authentication slice
- Typed Redux hooks and store

### 📋 Forms & Validation

- **React Hook Form** integration with Material-UI
- **Yup** schemas for validation with @hookform/resolvers
- Date picker components with MUI X
- Form generation CLI tools

### 🚦 Routing & Navigation

- **App Router** with layout groups
- Dynamic sidebar navigation
- Nested route support
- Route-based access control
- Custom 404 and unauthorized pages

### 🛠️ Development Tools

- **ESLint** configuration for Next.js and TypeScript
- **Component generation** CLI with type scaffolding
- **Centralized type system** with barrel exports
- Hot reload with Turbo mode
- Progress bar for page transitions
- Error boundaries for graceful error handling
- **TypeScript strict mode** for enhanced type safety

## 📦 Installation

### Prerequisites

- **Node.js >=22.x**
- **Yarn** package manager

### Install Dependencies

```bash
yarn
```

## 🚀 Getting Started

### Development Server

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Development with Auto-open

```bash
yarn dev:code
```

This will open VS Code and start the dev server simultaneously.

### Production Build

```bash
yarn build
```

Build artifacts will be generated in the **`dist`** folder.

### Start Production Server

```bash
yarn start
```

### Linting

```bash
yarn lint
```

## 📁 Project Structure

```
├── 📁 public/
│   └── 📁 images/
├── 📁 scripts/                      # CLI generation tools
│   └── generate-module.js           # Module scaffolding
├── 📁 src/
│   ├── 📁 app/                      # Next.js App Router
│   │   ├── 📁 (auth-layout)/        # Authentication pages
│   │   ├── 📁 (dashboard-layout)/   # Admin dashboard
│   │   ├── 📁 (web-layout)/         # Public website
│   │   └── 📁 api/                  # API routes
│   ├── 📁 modules/                  # Feature modules (self-contained)
│   │   ├── 📁 auth/                 # Authentication
│   │   └── 📁 user/                 # User management
│   ├── 📁 components/               # Shared UI components
│   │   ├── 📁 ui/                   # Reusable components
│   │   ├── 📁 Guard/                # Route protection
│   │   ├── 📁 LayoutWrappers/       # Layout components
│   │   └── 📁 Providers/            # Context providers
│   ├── 📁 lib/                      # Third-party configs
│   │   └── axios.ts                 # HTTP client setup
│   ├── 📁 config/                   # App configuration
│   ├── 📁 event-emitter/            # Event management
│   ├── 📁 redux/                    # Global state management
│   ├── 📁 routes/                   # Route definitions
│   ├── 📁 socket/                   # WebSocket setup
│   ├── 📁 styles/                   # Global styles & CSS variables
│   ├── 📁 theme/                    # Material-UI theme
│   ├── 📁 utils/                    # Helper functions & hooks
│   └── middleware.ts                # Route protection
├── .env.local
├── next.config.ts
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## 🏗️ Module-Based Architecture

The project uses a **modular architecture** for better organization and scalability:

```
src/modules/
├── auth/                    # Authentication module
│   ├── components/         # LoginForm, SignupForm
│   ├── hooks.ts           # useLogin, useSignup, useLogout
│   ├── services.ts        # API calls
│   ├── types.ts           # Type definitions
│   ├── enums.ts           # Constants
│   └── validations.ts     # Zod schemas
└── user/                   # User management module
    ├── components/
    ├── hooks.ts
    └── ...
```

### Benefits

- ✅ Self-contained features
- ✅ Easy to scale and maintain
- ✅ Reusable across projects

### Generate New Module

```bash
yarn generate product
```

Creates `src/modules/product/` with all necessary files.

## 🛡️ Authentication & Route Protection

The template includes a comprehensive authentication system:

### Route Types

- **Public Routes** (`isPublic: true`): Only accessible when user is signed out
- **Private Routes** (`isPrivate: true`): Only accessible when user is signed in
- **Hybrid Routes** (`isHybrid: true`): Always accessible regardless of auth state

### Middleware Protection

The `middleware.ts` file automatically handles:

- Route protection based on authentication status
- Redirects to login for unauthorized access
- Access control for different user roles

## 🎨 CSS Variables Design System

The template features a comprehensive **CSS Variables Design System** located in `src/styles/variables.scss` that provides:

### 🌓 Automatic Theme Switching

- **Light and Dark themes** with seamless transitions
- CSS custom properties for consistent theming
- Automatic theme detection and switching

### 🎨 Design Tokens

The design system includes organized variables for:

- **Primary & Secondary Colors**: `--primary`, `--secondary`
- **Text Colors**: `--text-color` with theme-aware variants
- **Background Colors**: `--bg-color`, `--main-container-bg`, `--header-bg`
- **Sidebar Colors**: `--sidebar-bg`, `--sidebar-link-color`, `--selected-sidebar-bg`
- **Border Colors**: `--border-color` for consistent borders
- **Component Colors**: Progress bars, tables, footers

### 🔧 Implementation

```scss
// Light theme (default)
:root {
  --primary: #4338ca;
  --text-color: #1f2937;
  --bg-color: #fefefe;
  // ... more variables
}

// Dark theme
.dark {
  --text-color: #e8e8e8;
  --bg-color: #0c0e14;
  // ... theme overrides
}
```

### 💡 Usage

Components automatically inherit theme values:

```scss
.my-component {
  background-color: var(--bg-color);
  color: var(--text-color);
  border: 1px solid var(--border-color);
}
```

## 🎨 Layout System

The template uses Next.js layout groups for different sections:

- **`(auth-layout)`**: Authentication pages (login, register)
- **`(web-layout)`**: Public website pages with header/footer
- **`(dashboard-layout)`**: Admin dashboard with sidebar navigation

Each layout includes its own specific styling and navigation structure.

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_APP_NAME=Your App Name
```

### Theme Customization

Modify theme settings in `src/theme/` directory to customize:

- Color schemes
- Typography
- Component variants
- Breakpoints

### Tailwind Configuration

The project uses **Tailwind CSS v4** with PostCSS integration:

- Modern CSS-based configuration
- Custom color palette
- Extended spacing
- Component-specific utilities
- Responsive breakpoints

## 📚 Key Dependencies

### Core Framework

- **Next.js** - React framework with App Router
- **React** - Latest React with concurrent features
- **TypeScript** - Type safety and developer experience

### UI & Styling

- **@mui/material** - Material-UI component library
- **@mui/icons-material** - Material Design icons
- **@mui/x-date-pickers** - Advanced date/time pickers
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **SASS** - CSS preprocessor

### State Management

- **@reduxjs/toolkit** - Modern Redux with utilities
- **React Redux** - React bindings for Redux
- **@tanstack/react-query** - Server state management

### Forms & Validation

- **React Hook Form** - Performant forms with easy validation
- **Zod** - TypeScript-first schema validation

### Utilities

- **Axios** - HTTP client for API calls
- **Day.js** - Date manipulation library
- **Sonner** - Toast notifications
- **Socket.io Client** - Real-time communication

### Development Tools

- **ESLint** - Code linting and formatting
- **PostCSS** - CSS post-processing
- **Sharp** - Image optimization
- **Next Themes** - Theme switching

## 🚀 Performance Optimizations

- **Turbo mode** for faster development builds
- **Modular imports** for Material-UI to reduce bundle size
- **Image optimization** with Next.js Image component
- **Code splitting** with dynamic imports
- **Tree shaking** for unused code elimination

## 🧪 Error Handling

- **Error Boundaries** with React Error Boundary
- **Global error pages** (404, unauthorized)
- **API error handling** with Axios interceptors
- **Form validation** with comprehensive schemas

## 📱 Responsive Design

- **Mobile-first** approach with Tailwind CSS
- **Flexible layouts** that adapt to all screen sizes
- **Touch-friendly** Material-UI components
- **Optimized navigation** for mobile devices

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Farrukh Ahmad**

- Email: farrukhahamd62@gmail.com

---

Built with ❤️ using Next.js, TypeScript, and Material-UI

# Feima-Robotics.github.io

This repository contains the documentation website for Feima Robotics.

## Project Structure

```
.
├── src/
│   ├── content/
│   │   └── docs/
│   │       ├── en/                 # English documentation
│   │       │   └── slam/           # SLAM related docs
│   │       └── zh/                 # Chinese documentation
│   │           └── slam/           # SLAM related docs
│   └── ...
├── astro.config.mjs               # Astro configuration
├── package.json
└── README.md
```

## Development Guide

### Prerequisites

- Node.js 20 or higher
- pnpm (recommended) or npm

### Setup

1. Clone the repository:
```bash
git clone https://github.com/Feima-Robotics/Feima-Robotics.github.io.git
cd Feima-Robotics.github.io
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

### Building

To build the site for production:

```bash
pnpm build
```

The built files will be in the `dist/` directory.

<div align="center">

# 🚀 Professional Portfolio Website

**A modern, responsive portfolio showcasing my journey as a Full Stack Software Engineer**

[![Built with SvelteKit](https://img.shields.io/badge/SvelteKit-5-FF3E00?style=flat&logo=svelte&logoColor=white)](https://kit.svelte.dev/)
[![Styled with Tailwind](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed-Vercel-000000?style=flat&logo=vercel&logoColor=white)](https://vercel.com)

[🌐 Live Demo](#) • [📧 Contact](https://www.linkedin.com/in/nicholas-quinn/) • [💼 LinkedIn](https://www.linkedin.com/in/nicholas-quinn/)

</div>

---

## ✨ Features

- **Fully Responsive Design** - Seamless experience across all devices (mobile, tablet, desktop)
- **Modern Tech Stack** - Built with SvelteKit 5, TypeScript, and Tailwind CSS
- **Interactive UI** - Smooth animations and hover effects using Skeleton UI
- **Project Showcase** - Dynamic project cards with GitHub integration
- **Experience Timeline** - Professional experience with detailed technology stacks
- **Resume Integration** - Direct PDF resume download
- **Performance Optimized** - Fast loading times and optimized assets

## 🛠️ Tech Stack

**Frontend Framework**
- [SvelteKit 5](https://kit.svelte.dev/) - Next-generation web framework
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript

**Styling & UI**
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Skeleton UI](https://www.skeleton.dev/) - Svelte component library
- Responsive design with mobile-first approach

**Development Tools**
- [Bun](https://bun.sh/) - Fast JavaScript runtime
- [Prettier](https://prettier.io/) - Code formatter
- [Svelte MCP Server](https://svelte.dev/docs/mcp/overview) - AI-assisted development

**Deployment**
- [Vercel](https://vercel.com) - Serverless deployment platform

## 🚀 Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (or Node.js 18+)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/FreakyNobleGas/my-professional-website.git
   cd my-professional-website
   ```

2. **Install dependencies**
   ```bash
   bun install
   ```

3. **Start the development server**
   ```bash
   bun run dev
   ```

4. **Open your browser**
   ```
   Navigate to http://localhost:5173
   ```

## 📁 Project Structure

```
my-professional-website/
├── src/
│   ├── lib/
│   │   ├── card.svelte              # Experience card component
│   │   ├── project-card.svelte      # Project showcase component
│   │   └── data/
│   │       ├── experience.json      # Professional experience data
│   │       └── projects.json        # Projects portfolio data
│   ├── routes/
│   │   ├── +layout.svelte          # Root layout
│   │   └── +page.svelte            # Main landing page
│   └── app.css                     # Global styles
├── static/
│   ├── headshot.png                # Professional headshot
│   ├── resume.pdf                  # Resume document
│   └── project-screenshots/        # Project images
└── README.md
```

## 🎨 Customization

### Adding New Projects

Edit `src/lib/data/projects.json`:

```json
{
  "name": "Project Name",
  "link": "https://github.com/username/repo",
  "screenshot": "/project-screenshots/image.png",
  "description": "Brief project description",
  "technologies": ["Tech1", "Tech2", "Tech3"]
}
```

### Adding Experience

Edit `src/lib/data/experience.json`:

```json
{
  "years": "Jan 2020 - Present",
  "company": "Company Name",
  "title": "Job Title",
  "description": "Role description",
  "technologies": ["Python", "TypeScript", "AWS"]
}
```

## 🚢 Deployment

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/FreakyNobleGas/my-professional-website)

**Manual Deployment:**

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

The site will automatically rebuild on every push to the main branch.

## 🤖 AI Development Tools

This project was built with assistance from AI coding tools:

- **[Claude AI](https://claude.ai/)** - AI pair programming assistant
- **[Svelte MCP Server](https://svelte.dev/docs/mcp/overview)** - Official Svelte documentation integration

### Setup AI Tools (Optional)

Configure the Svelte MCP Server for Claude Code:

```bash
claude mcp add -t http -s local svelte https://mcp.svelte.dev/mcp
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Design inspiration from [Brittany Chiang's Portfolio](https://brittanychiang.com/?ref=hackernoon.com)
- Discovered through [HackerNoon's Developer Portfolio Examples](https://hackernoon.com/21-best-developer-portfolio-examples-p61j31wi)
- Built with [SvelteKit](https://kit.svelte.dev/) and [Skeleton UI](https://www.skeleton.dev/)

---

<div align="center">

**[⬆ back to top](#-professional-portfolio-website)**

Made with ❤️ by [Nick Quinn](https://github.com/FreakyNobleGas)

</div>
# Agent Guidelines for al-folio

A simple, clean, and responsive Jekyll theme for academics.

## Site-specific bilingual blog rule

- Every original blog post must be published as a Chinese-English pair. If the user supplies only Chinese or only English, translate it faithfully into the other language before publishing.
- Preserve all claims, qualifications, section structure, equations, tables, citations, links, and references. Do not summarize, omit, or add arguments during translation.
- Give each language version its own stable URL and set reciprocal `translation_url` frontmatter links. Use `lang: zh-CN` for Chinese and `lang: en` for English.
- Include only the primary-language version in the Blog archive (`sophie_post: true`); set its translated counterpart to `sophie_post: false` to avoid duplicate entries.
- Treat each Chinese-English article pair as one page for analytics. Set the same `view_count_path` in both versions so all new GoatCounter pageviews are reported to one primary path. If the language URLs already accumulated separate counts, list every non-primary historical path under `view_count_legacy_paths` in both versions; displayed totals must sum the primary and legacy paths. For a new pair, use the primary-language article URL from the first publication and omit `view_count_legacy_paths`.
- After the text of every original article is final, use the installed `ian-xiaohei-illustrations` skill to extract one memorable visual metaphor, then create one article-specific, transparent-background SVG header illustration. Depict one simple, isolated object and keep it compact and legible at 112-132 px. Prefer clean low-poly, simple vector, or pixel-art rendering over sketching. Preserve the subject's natural colors when that gives it more character; either a restrained retro palette or a clean modern palette is acceptable, and the site's purple is optional rather than mandatory. Do not include text in the artwork. Save the SVG under `assets/img/blog/`, set `illustration` and localized `illustration_alt` frontmatter in both language versions, and reuse the same image for the bilingual pair.
- Show the automatically calculated estimated reading time beside the unified view count. Calculate Chinese at 400 CJK characters per minute and English at 220 words per minute, rounded up with a one-minute minimum; do not maintain reading-time values manually in post frontmatter.
- Before publishing, inspect every display-math block in both languages. Short formulas that function grammatically as part of a sentence (for example, between “needs” and “units”) should use inline math. Keep multi-line derivations, emphasized constraints, boxed conclusions, arrays, and other structurally important equations in display mode. Apply each decision consistently to both language versions.
- Build and inspect both rendered pages before publishing.

## Quick Links by Role

- **Are you a coding agent?** → Read [`.github/copilot-instructions.md`](.github/copilot-instructions.md) first (tech stack, build, CI/CD, common pitfalls & solutions)
- **Customizing the site?** → See [`.github/agents/customize.agent.md`](.github/agents/customize.agent.md)
- **Writing documentation?** → See [`.github/agents/docs.agent.md`](.github/agents/docs.agent.md)
- **Need setup/deployment help?** → [INSTALL.md](INSTALL.md)
- **Troubleshooting & FAQ?** → [TROUBLESHOOTING.md](TROUBLESHOOTING.md)
- **Customization & theming?** → [CUSTOMIZE.md](CUSTOMIZE.md)
- **Quick 5-min start?** → [QUICKSTART.md](QUICKSTART.md)

## Essential Commands

### Local Development (Docker)

The recommended approach is using Docker.

```bash
# Initial setup & start dev server
docker compose pull && docker compose up
# Site runs at http://localhost:8080

# Rebuild after changing dependencies or Dockerfile
docker compose up --build

# Stop containers and free port 8080
docker compose down
```

### Pre-Commit Checklist

Before every commit, you **must** run these steps:

1.  **Format Code:**
    ```bash
    # (First time only)
    npm install --save-dev prettier @shopify/prettier-plugin-liquid
    # Format all files
    npx prettier . --write
    ```
2.  **Build Locally & Verify:**

    ```bash
    # Rebuild the site
    docker compose up --build

    # Verify by visiting http://localhost:8080.
    # Check navigation, pages, images, and dark mode.
    ```

## Critical Configuration

When modifying `_config.yml`, these **must be updated together**:

- **Personal site:** `url: https://username.github.io` + `baseurl:` (empty)
- **Project site:** `url: https://username.github.io` + `baseurl: /repo-name/`
- **YAML errors:** Quote strings with special characters: `title: "My: Cool Site"`

## Development Workflow

- **Git & Commits:** For commit message format and Git practices, see [.github/GIT_WORKFLOW.md](.github/GIT_WORKFLOW.md).
- **Code-Specific Instructions:** Consult the relevant instruction file for your code type.

| File Type                                     | Instruction File                                                                                |
| --------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| Markdown content (`_posts/`, `_pages/`, etc.) | [markdown-content.instructions.md](.github/instructions/markdown-content.instructions.md)       |
| YAML config (`_config.yml`, `_data/`)         | [yaml-configuration.instructions.md](.github/instructions/yaml-configuration.instructions.md)   |
| BibTeX (`_bibliography/`)                     | [bibtex-bibliography.instructions.md](.github/instructions/bibtex-bibliography.instructions.md) |
| Liquid templates (`_includes/`, `_layouts/`)  | [liquid-templates.instructions.md](.github/instructions/liquid-templates.instructions.md)       |
| JavaScript (`_scripts/`)                      | [javascript-scripts.instructions.md](.github/instructions/javascript-scripts.instructions.md)   |

## Common Issues

For troubleshooting, see:

- [Common Pitfalls & Workarounds](.github/copilot-instructions.md#common-pitfalls--workarounds) in copilot-instructions.md
- [TROUBLESHOOTING.md](TROUBLESHOOTING.md) for detailed solutions
- [GitHub Issues](https://github.com/alshedivat/al-folio/issues) to search for your specific problem.

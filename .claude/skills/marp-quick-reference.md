# Marp Quick Reference

Core syntax and common patterns for Marp slide creation.

## Basic Syntax

### Slide Separator
```markdown
---
```
Each `---` on its own line creates a new slide.

### Front-Matter Directives
```markdown
---
marp: true
theme: default
paginate: true
backgroundColor: '#1a1a2e'
color: '#e8e8f0'
---
```

### Scoped Directives (Single Slide)
```markdown
<!-- _backgroundColor: black -->
<!-- _color: white -->
```
Underscore prefix applies directive to current slide only.

## Images

### Basic Image
```markdown
![Alt text](path/to/image.png)
```

### Sized Image
```markdown
![width:600px](path/to/image.png)
![height:400px](path/to/image.png)
![w:800px h:600px](path/to/image.png)
```

### Background Image
```markdown
![bg](path/to/image.png)
![bg opacity:0.3](path/to/image.png)
```

## Tables

```markdown
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Data 1   | Data 2   | Data 3   |
| Data 4   | Data 5   | Data 6   |
```

**Dark theme tip:** Ensure table styling includes background colors for `th` and `td` to maintain text visibility.

## Code Blocks

### Inline Code
```markdown
`code here`
```

### Code Block
```markdown
```python
def example():
    return "Hello"
```
```

## Custom Styling

### Inline Style (All Slides)
```markdown
<style>
section {
  background: #1a1a2e;
  color: #e8e8f0;
}
</style>
```

### Scoped Style (Current Slide Only)
```markdown
<style scoped>
h1 {
  color: red;
}
</style>
```

## Common Patterns

### Title Slide
```markdown
---
# Presentation Title
**Subtitle or Date**

---
```

### Section Divider
```markdown
---
<!-- _class: lead -->
# Section Name

---
```

### Two-Column Layout
```markdown
<div style="display: flex; gap: 2em;">
<div style="flex: 1;">

## Left Column
- Point 1
- Point 2

</div>
<div style="flex: 1;">

## Right Column
- Point A
- Point B

</div>
</div>
```

## CLI Commands

### Generate HTML
```bash
marp input.marp.md -o output.html
```

### Generate PDF
```bash
marp input.marp.md -o output.pdf
```

### Generate PPTX
```bash
marp input.marp.md -o output.pptx
```

### Watch Mode (Auto-Rebuild)
```bash
marp -w input.marp.md
```

### Server Mode (Live Preview)
```bash
marp -s input.marp.md
```

## Troubleshooting

### Tables Not Visible on Dark Background
**Problem:** Default table styling has transparent backgrounds.
**Solution:** Add table styling to front-matter:
```markdown
style: |
  table { border-collapse: collapse; width: 100%; }
  th { background: #2a3a5a; color: #a8d8f8; }
  td { background: #1e1e3a; color: #e8e8f0; border: 1px solid #3a3a5a; }
```

### Slide Content Overflows
**Problem:** Too much content for one slide.
**Solution:** Split into multiple slides using `---`. Aim for 5-7 bullet points or 6-7 table rows max per slide.

### Images Not Loading in HTML
**Problem:** Relative paths break when HTML is moved.
**Solution:** Use absolute paths or keep images in same directory as HTML. For GitHub Pages, use repository-relative paths.

### GitHub Not Rendering .marp.md
**Problem:** GitHub doesn't recognize `.marp.md` files.
**Solution:** Always generate HTML and share the GitHub Pages URL, not the raw file or blob view.
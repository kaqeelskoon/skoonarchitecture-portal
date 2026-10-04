# 📄 SKOON Portal Documents Guide

## Overview
The portal now supports project documents with dynamic downloading functionality. Documents are organized in categories by project.

---

## Document Structure

```
documents/
├── SD-P153/
│   ├── drawings/          # Floor plans, elevations, sections
│   ├── specifications/    # Technical & material specs
│   ├── tender/           # BOQ & tender documents
│   └── reports/          # Design & cost reports
├── SD-P238/
├── SD-P253/
├── SD-P251/
├── SD-P281/
├── SD-P284/
├── SD-P301/
├── SD-P338/
└── SD-P256/
```

**Total: 9 Projects × 4 Categories = 36 folders ready for documents**

---

## How to Add Documents

### 1. **Prepare Your Documents**
- Convert all files to PDF format (recommended)
- Use clear, descriptive filenames
- Examples:
  - `Floor Plans.pdf`
  - `Architectural Specifications.pdf`
  - `BOQ - Structural.pdf`
  - `Design Report.pdf`

### 2. **Place Files in Correct Folders**

Each project has 4 folders:

| Folder | Contents | Examples |
|--------|----------|----------|
| **drawings** | Architectural & structural plans | `Floor Plans.pdf`, `Sections.pdf`, `Elevations.pdf` |
| **specifications** | Technical & material specifications | `Architectural Specs.pdf`, `MEP Specifications.pdf` |
| **tender** | Bill of Quantities & tender docs | `BOQ.pdf`, `Tender Invitation.pdf` |
| **reports** | Design, cost & schedule reports | `Design Report.pdf`, `Cost Estimate.pdf` |

### 3. **Update app.js Documents List** (if needed)

Each project in `app.js` has a `documents` object:

```javascript
documents: {
  drawings: ['Floor Plans.pdf', 'Sections.pdf', 'Elevations.pdf'],
  specifications: ['Arch Specs.pdf', 'MEP Specs.pdf'],
  tender: ['BOQ.pdf', 'Tender Letter.pdf'],
  reports: ['Design Report.pdf', 'Cost Estimate.pdf'],
}
```

If you add/remove files, update the filename arrays to match.

---

## Example: Adding Documents to SD-P153

```
documents/SD-P153/
├── drawings/
│   ├── Floor Plans.pdf
│   ├── Elevations & Sections.pdf
│   └── 3D Isometric Views.pdf
├── specifications/
│   ├── Architectural Specifications.pdf
│   └── MEP Specifications.pdf
├── tender/
│   ├── BOQ - All Works.pdf
│   └── Tender Invitation.pdf
└── reports/
    ├── Design Report.pdf
    └── Cost Estimate.pdf
```

Then in `app.js`, project SD-P153 already has:

```javascript
documents: {
  drawings: ['Floor Plans.pdf', 'Elevations & Sections.pdf', '3D Isometric Views.pdf'],
  specifications: ['Architectural Specifications.pdf', 'MEP Specifications.pdf'],
  tender: ['BOQ - All Works.pdf', 'Tender Invitation.pdf'],
  reports: ['Design Report.pdf', 'Cost Estimate.pdf'],
}
```

---

## Current Status

✅ **All 9 projects have document data in app.js**
✅ **All 36 folders are created and ready**
✅ **Download buttons are active in project-detail.html**
⏳ **Waiting for actual PDF files to be added**

---

## Download Functionality

### How It Works
1. User clicks "Download" on any document
2. The system looks for the file at: `documents/[PROJECT_CODE]/[CATEGORY]/[FILENAME]`
3. The file is downloaded to user's downloads folder
4. If file doesn't exist, browser will show 404 error

### Example Paths
- `documents/SD-P153/drawings/Floor Plans.pdf`
- `documents/SD-P338/tender/BOQ - Tower - Part 1.pdf`
- `documents/SD-P256/reports/Design Report - Aurum.pdf`

---

## Quick Checklist for Adding Real Documents

- [ ] Gather all project documents (PDFs preferred)
- [ ] Organize by project code (SD-P###)
- [ ] Sort into 4 categories: drawings, specifications, tender, reports
- [ ] Place files in correct `documents/SD-P###/[category]/` folders
- [ ] Verify filenames match those listed in `app.js`
- [ ] Test download buttons in portal
- [ ] Confirm files open correctly

---

## Files Currently in System

| Project | Category | Files |
|---------|----------|-------|
| SD-P301 | reports | 5 design report pages |
| SD-P338 | reports | 2 cover images |
| SD-P284 | drawings | 1 linear house image |

**All other folders are empty and ready for documents.**

---

## Deployment Note

When deploying to Vercel, Netlify, or any static host:
1. Ensure `documents/` folder is included in deployment
2. Update CDN configuration if using a proxy
3. Test download links on production URL
4. Consider adding CORS headers if accessing from different domain

---

## Support

For questions about document management, contact the SKOON operations team.

**Status:** ✅ Ready for document uploads
**Last Updated:** October 2026

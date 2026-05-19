# Distribution Guide

## Preparing the Project for Sharing

Before creating a ZIP file to share this project, follow these steps:

### 1. Clean Build

```bash
# Remove node_modules and build artifacts
rm -rf node_modules/
rm -rf build/

# Remove any personal files
rm -rf .bob/
```

### 2. Verify No Personal Data

Check that these files don't contain personal information:
- ✅ `README.md` - Should have placeholder values
- ✅ `mcp-config-example.json` - Template only
- ✅ `.gitignore` - Configured to exclude sensitive files

### 3. Files to Include in ZIP

**Essential Files:**
- `src/` - All source code
- `package.json` - Dependencies
- `tsconfig.json` - TypeScript configuration
- `README.md` - Main documentation
- `INSTALL.md` - Installation guide
- `SETUP.md` - Setup instructions
- `mcp-config-example.json` - Configuration template
- `.gitignore` - Git ignore rules
- `LICENSE` or `MIT` - License file

**Optional Documentation:**
- `jira-mcp-server-plan.md` - Implementation plan
- `jira-mcp-architecture.md` - Architecture diagrams
- `jira-mcp-implementation-guide.md` - Code examples
- `jira-mcp-summary.md` - Project summary

**DO NOT Include:**
- `node_modules/` - Too large, users will run `npm install`
- `build/` - Users will build themselves
- `.bob/` - Personal configuration
- Any files with real credentials

### 4. Create the ZIP

#### macOS/Linux:
```bash
cd /path/to/parent/directory
zip -r jira-mcp-server.zip Jira-mcp/ \
  -x "*/node_modules/*" \
  -x "*/build/*" \
  -x "*/.bob/*" \
  -x "*/package-lock.json"
```

#### Windows:
1. Right-click the `Jira-mcp` folder
2. Select "Send to" → "Compressed (zipped) folder"
3. Manually remove `node_modules/` and `build/` folders before zipping

### 5. What Users Will Do

When users receive the ZIP:

1. **Extract** to their preferred location
2. **Install dependencies**: `npm install`
3. **Build the project**: `npm run build`
4. **Get Jira credentials** (API token)
5. **Configure** Bob's MCP settings
6. **Restart** Bob

All instructions are in `INSTALL.md`.

## Sharing Checklist

Before sharing, verify:

- [ ] No personal credentials in any files
- [ ] README.md has placeholder values
- [ ] mcp-config-example.json is a template
- [ ] .gitignore is properly configured
- [ ] INSTALL.md has clear instructions
- [ ] node_modules/ is excluded
- [ ] build/ is excluded
- [ ] Package builds successfully (`npm install && npm run build`)

## Support

When sharing, let users know:

1. **Requirements**: Node.js v18+, Jira Cloud account, Bob AI
2. **Installation time**: ~5 minutes
3. **Support**: Point them to INSTALL.md and README.md
4. **Issues**: They should check troubleshooting sections first

## Version Updates

When releasing updates:

1. Update version in `package.json`
2. Add changelog notes in README.md
3. Test the build process
4. Create new ZIP following steps above
5. Notify users of changes

## License

This project is MIT licensed. Users can:
- Use commercially
- Modify
- Distribute
- Use privately

With conditions:
- Include license and copyright notice
- No liability or warranty

See LICENSE file for full details.
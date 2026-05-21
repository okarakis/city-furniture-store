# Instructor Notes - Bob Hands-On Lab

## Pre-Lab Setup

### 1. Jira Configuration
The lab uses a shared Jira instance configured in `.bob/mcp.json`:
- **URL**: `https://chauhanbvivek.atlassian.net`
- **Project**: City Furniture (CITY)
- **Credentials**: Pre-configured in `.bob/mcp.json`

**Security Notes**:
- The shared API token is included for lab convenience
- Consider rotating the token after each lab session
- Monitor issue creation during the lab
- The token has limited permissions (read/write to CITY project only)

### 2. Distribution Checklist

Before distributing to participants:
- [ ] Verify `.bob/mcp.json` has correct Jira credentials
- [ ] Ensure `jira-mcp-server/build/` is deleted (participants will build)
- [ ] Ensure `jira-mcp-server/node_modules/` is deleted
- [ ] Verify `.gitignore` excludes build artifacts
- [ ] Test that participants can build the MCP server
- [ ] Create a fresh CITY project in Jira (or clean existing one)

### 3. GitHub Setup

Participants will need:
- GitHub account
- Personal access token with `repo` and `workflow` scopes
- They will create their own `city-furniture-store` repository

### 4. Expected Jira Issues

Each participant will create issues like:
- CITY-X: "Add product detail page - [Student Name]"
- CITY-Y: "Implement shopping cart functionality - [Student Name]"
- CITY-Z: "Add contact form - [Student Name]"

Where X, Y, Z are sequential numbers. Monitor the shared project for:
- Duplicate issues
- Inappropriate content
- Students working on wrong issues

## During the Lab

### Common Issues

**1. MCP Server Build Fails**
- Check Node.js version (need 16+)
- Verify `npm install` completes successfully
- Check for TypeScript compilation errors

**2. Jira Connection Fails**
- Verify API token is still valid
- Check network connectivity
- Ensure `.bob/mcp.json` path is correct for participant's system

**3. Git Push Fails**
- Verify GitHub token has correct permissions
- Check repository exists and is accessible
- Ensure remote URL is correct

**4. Students Can't Find Their Issues**
- Remind them to note their issue numbers when created
- Use Jira search: `project = CITY AND summary ~ "Student Name"`
- Check issue was created successfully

### Monitoring

During the lab, monitor:
1. **Jira Project**: Watch for issue creation rate and content
2. **API Rate Limits**: Shared token may hit rate limits with many students
3. **Student Progress**: Check which exercises students are on

### Time Management

Typical timing:
- **Setup** (30 min): Most time-consuming, help students with environment
- **Part 1** (20 min): Usually smooth, minimal issues
- **Part 2** (30 min): May need help with Jira operations
- **Part 3** (20 min): Optional, for faster students

## Post-Lab Cleanup

After the lab:
1. **Review Jira Issues**: Check what students created
2. **Clean Up Project**: Archive or delete test issues
3. **Rotate API Token**: Generate new token for security
4. **Collect Feedback**: Ask students about their experience
5. **Update Materials**: Note any common issues for next time

## Troubleshooting Guide

### Issue: "Cannot find module 'jira-mcp-server'"
**Solution**: 
```bash
cd jira-mcp-server
npm install
npm run build
```

### Issue: "Authentication failed"
**Solution**: Check API token in `.bob/mcp.json` is valid

### Issue: "Project CITY not found"
**Solution**: Verify project exists in Jira and key is correct

### Issue: Students creating issues in wrong project
**Solution**: Remind them to always specify "project CITY"

### Issue: MCP server not showing in Bob
**Solution**: 
1. Restart VS Code
2. Check Output panel (View → Output → Bob)
3. Verify path in `.bob/mcp.json`

## Advanced Topics

For students who finish early:

1. **Custom MCP Server**: Guide them to create their own MCP server
2. **Advanced Jira Queries**: Teach JQL for complex searches
3. **Automation**: Create workflows that combine Git + Jira
4. **Code Review Automation**: Use Bob to review PRs automatically

## Resources for Instructors

- [MCP Documentation](https://modelcontextprotocol.io)
- [Jira REST API](https://developer.atlassian.com/cloud/jira/platform/rest/v3/)
- [Bob Documentation](https://docs.bob.ai)

## Lab Variations

### Variation 1: Individual Jira Instances
If you want students to use their own Jira:
1. Update LAB-SETUP.md to include Jira account creation
2. Have students configure their own `.bob/mcp.json`
3. Each student works in their own project

### Variation 2: Team-Based
Group students into teams:
1. Each team gets a project (TEAM1, TEAM2, etc.)
2. Teams collaborate on shared issues
3. Practice PR reviews within teams

### Variation 3: Extended Lab
Add additional exercises:
1. Sprint planning with Jira
2. Release management
3. Integration with CI/CD
4. Custom Bob modes

## Feedback Collection

After the lab, collect feedback on:
- Setup difficulty (1-5)
- Exercise clarity (1-5)
- Bob usefulness (1-5)
- Jira integration value (1-5)
- Overall experience (1-5)
- What worked well?
- What needs improvement?
- Additional topics to cover?

## Contact

For questions or issues with the lab materials:
- Review the troubleshooting sections in each guide
- Check the GitHub repository for updates
- Contact the lab maintainer

---

**Good luck with the lab!** 🚀
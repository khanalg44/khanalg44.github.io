# Security Policy

## Implemented Security Measures

### 1. Server Security (Node.js/Express)

#### Helmet.js
- Content Security Policy (CSP) configured
- X-Frame-Options set to prevent clickjacking
- X-Content-Type-Options prevents MIME sniffing
- X-XSS-Protection enabled

#### CORS Protection
- Restricted to specific origins (production domain)
- Credentials handling configured
- Development mode allows localhost

#### Rate Limiting
- API endpoints limited to 5 requests per 15 minutes per IP
- Prevents brute force and DDoS attacks
- Standard headers enabled

#### Input Validation
- All form inputs validated and sanitized
- Email format validation
- Length restrictions on all fields
- XSS prevention through input escaping

#### Payload Size Limits
- JSON and URL-encoded payloads limited to 10kb
- Prevents large payload attacks

### 2. Client Security (React)

#### Meta Tags
- X-Content-Type-Options: nosniff
- X-Frame-Options: SAMEORIGIN
- X-XSS-Protection: enabled
- Referrer Policy: strict-origin-when-cross-origin

#### HTTPS
- GitHub Pages provides automatic HTTPS
- Custom domain SSL certificate

#### React Built-in Security
- Automatic XSS protection in JSX
- DOM purification
- No dangerouslySetInnerHTML usage

### 3. Dependency Management

- Regular `npm audit` checks recommended
- Dependencies updated to latest stable versions
- Package-lock.json committed for reproducible builds

### 4. Static Site Benefits

- No database = No SQL injection risk
- No server-side execution in production
- Limited attack surface
- GitHub's infrastructure security

## Known Limitations

1. **Contact Form**: Currently not functional in production (static hosting)
   - Consider integrating Formspree, EmailJS, or Netlify Forms
   - Backend server not deployed with static site

2. **Development Dependencies**: Some vulnerabilities in dev dependencies
   - These don't affect production build
   - Breaking changes required to fix completely

3. **Third-party Scripts**: None currently used
   - If adding analytics/tracking, ensure GDPR compliance

## Reporting Security Issues

If you discover a security vulnerability, please email:
- Email: (contact through LinkedIn)

Do not create public GitHub issues for security vulnerabilities.

## Update Schedule

- Dependencies: Review monthly
- Security patches: Apply immediately
- Breaking changes: Evaluate quarterly

## Best Practices for Contributors

1. Never commit sensitive data (.env files, API keys, passwords)
2. Run `npm audit` before submitting PRs
3. Validate all user inputs
4. Use HTTPS for all external resources
5. Keep dependencies up to date

## Production Deployment Checklist

- [ ] Run `npm audit` and fix vulnerabilities
- [ ] Update all dependencies to latest stable versions
- [ ] Test CORS configuration
- [ ] Verify rate limiting is working
- [ ] Check HTTPS certificate is valid
- [ ] Test contact form (if implemented)
- [ ] Review CSP policy
- [ ] Confirm no sensitive data in source code
- [ ] Test on multiple browsers
- [ ] Verify mobile responsiveness

## Additional Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Express Security Best Practices](https://expressjs.com/en/advanced/best-practice-security.html)
- [React Security Best Practices](https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml)
- [GitHub Pages Security](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https)

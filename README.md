This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Requirements

- Node.js: >=20.18.1 and <23 (LTS 20.18.1+ or 22.x) — aligns local Node 20 and Vercel Node 22 without warnings
- Package manager: pnpm (recommended), npm, yarn, or bun
- Dev server: Next.js 15 uses Turbopack by default in development with `next dev`. For production, use `next build` and `next start`.
- MDX: Single pipeline using next-mdx-remote/rsc (remark-gfm). @next/mdx is not used to avoid dual processing. After pulling, run a clean install to update deps: rm -rf node_modules .next && pnpm install.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Error Logging System

The contact form includes a comprehensive error logging system to track and monitor spam attempts and form submission issues.

### Log Location
- Logs are stored in the `/logs` directory
- Files are named `form-errors-YYYY-MM-DD.log` (e.g., `form-errors-2025-01-23.log`)
- Each line is a JSON object containing:
  ```json
  {
    "timestamp": "2025-01-23T14:30:00.000Z",
    "ip": "hashed-ip-address",
    "error": "error-type",
    "formData": {
      "projectType": "website",
      "budget": "medium",
      "timeline": "month"
    }
  }
  ```

### Viewing Logs
1. View today's logs:
   ```bash
   cat logs/form-errors-$(date +%Y-%m-%d).log
   ```
2. Pretty print logs:
   ```bash
   cat logs/form-errors-$(date +%Y-%m-%d).log | while read line; do echo $line | jq; done
   ```
3. Search for specific errors:
   ```bash
   grep "spam detected" logs/form-errors-*.log
   ```

### Log Rotation (TODO)
Implement log rotation to automatically delete old logs:
1. Create a cron job or scheduled task
2. Keep logs for X days (e.g., 30 days)
3. Compress older logs
4. Delete logs older than retention period

### Log Viewer Utility (TODO)
Create a web-based log viewer:
1. Protected admin route for viewing logs
2. Filtering by date and error type
3. Search functionality
4. Export capabilities

### Error Categories (TODO)
Implement detailed error categorization:
1. Spam Detection
   - Content-based spam
   - Bot submissions
   - Honeypot triggers
2. Rate Limiting
   - IP-based limits
   - Time-based patterns
3. Validation Errors
   - Email validation
   - Input validation
   - Domain verification
4. System Errors
   - Email service issues
   - File system errors
   - Network problems

### GDPR Compliance
The logging system is GDPR-compliant:
- IP addresses are hashed with a salt
- No personal data is stored
- Logs are automatically deleted after retention period
- Only necessary information is logged

### Security Measures
Current security implementations:
1. Rate limiting (5 requests per hour per IP)
2. Honeypot fields
3. Spam pattern detection
4. Email domain validation
5. Input sanitization
6. XSS protection

## Log System Documentation

### Overview
The logging system is designed to track form submission errors, spam attempts, and other security-related events in a GDPR-compliant manner.

### Setup Instructions

1. **Environment Variables**
   Add to your `.env.local`:
   ```bash
   # Generate using: openssl rand -hex 32
   IP_SALT=your_generated_hex_here
   
   # Generate using: echo -n "your-secret-api-key" | shasum -a 256
   LOG_API_KEY_HASH=your_api_key_hash_here
   ```

2. **Directory Structure**
   ```
   /logs                    # Log files directory (created automatically)
   /src
     /utils
       /logs
         logManager.ts      # Log management utilities
         logRotation.ts     # Log rotation functionality
     /app
       /api
         /logs
           route.ts        # API endpoints for log access
   ```

3. **Log File Format**
   - Files are named: `form-errors-YYYY-MM-DD.log`
   - Each line is a JSON object:
     ```json
     {
       "timestamp": "2025-01-23T14:30:00.000Z",
       "ip": "hashed-ip-address",
       "error": "error-type",
       "formData": {
         "projectType": "website",
         "budget": "medium",
         "timeline": "month"
       }
     }
     ```

### Features

1. **Error Logging**
   - Automatic logging of form submission errors
   - IP addresses are hashed for GDPR compliance
   - Only non-sensitive form data is logged
   - Timestamps for all events

2. **Log Rotation**
   - Automatic daily log files
   - Compression of old logs
   - Configurable retention period
   ```typescript
   // Manual rotation
   import { LogRotation } from '@/utils/logs/logRotation'
   await new LogRotation(30, 7).rotate() // Keep 30 days, compress after 7
   ```

3. **Log Management**
   - Query logs by date range
   - Filter by error type
   - Get error statistics
   ```typescript
   import { LogManager } from '@/utils/logs/logManager'
   const logs = await new LogManager().getLogs({
     startDate: '2025-01-01',
     endDate: '2025-01-31',
     errorType: 'spam'
   })
   ```

### API Endpoints

1. **Get Logs**
   ```bash
   # Get all logs
   curl -H "x-api-key: your-api-key" http://localhost:3000/api/logs

   # With filters
   curl -H "x-api-key: your-api-key" \
     "http://localhost:3000/api/logs?startDate=2025-01-01&errorType=spam"
   ```

2. **Get Statistics**
   ```bash
   curl -X POST \
     -H "x-api-key: your-api-key" \
     -d '{"action":"getStatistics"}' \
     http://localhost:3000/api/logs
   ```

### Maintenance Tasks

1. **Set Up Log Rotation**
   Add to your server's crontab:
   ```bash
   # Run daily at midnight
   0 0 * * * cd /path/to/project && node -e "require('./src/utils/logs/logRotation.js').LogRotation.runDailyRotation()"
   ```

2. **Monitor Log Size**
   ```bash
   # Check log directory size
   du -sh logs/
   
   # List largest log files
   ls -lSh logs/
   ```

3. **View Recent Errors**
   ```bash
   # Today's errors
   cat logs/form-errors-$(date +%Y-%m-%d).log | jq
   
   # Last 10 errors
   tail -n 10 logs/form-errors-$(date +%Y-%m-%d).log | jq
   ```

### Security Considerations

1. **API Access**
   - Protected by API key
   - Hashed key comparison
   - Rate limiting on endpoints

2. **GDPR Compliance**
   - IP addresses are hashed
   - No personal data storage
   - Automatic data cleanup
   - Limited retention period

3. **Data Protection**
   - Logs are stored server-side
   - Access restricted to authorized personnel
   - Encrypted API communication

### Troubleshooting

1. **Missing Logs**
   - Check directory permissions
   - Verify log rotation settings
   - Check disk space

2. **API Access Issues**
   - Verify API key hash
   - Check rate limits
   - Confirm network access

3. **Performance Issues**
   - Monitor log file sizes
   - Check rotation schedule
   - Optimize query parameters

For additional support or custom configurations, contact the development team.

## Project Roadmap

### 1. Logging System Implementation

#### Log Rotation (Priority: High)
- [ ] Implement automatic log rotation system
- [ ] Create cron job for daily rotation
- [ ] Add compression for older logs
- [ ] Set up configurable retention period (30 days default)
- [ ] Implement cleanup for expired logs

#### Admin Log Viewer (Priority: Medium)
- [ ] Create protected admin route (/admin/logs)
- [ ] Implement authentication for admin access
- [ ] Add filtering by date and error type
- [ ] Add search functionality
- [ ] Implement log export (CSV, JSON)
- [ ] Create dashboard with error statistics

#### Error Categorization (Priority: Medium)
- [ ] Implement detailed error categories:
  - Spam Detection (content-based, bot, honeypot)
  - Rate Limiting (IP-based, time-based)
  - Validation Errors (email, input, domain)
  - System Errors (email service, filesystem, network)
- [ ] Add category-specific logging
- [ ] Create error trend analysis

### 2. Blog System Implementation

#### Content Management (Priority: High)
- [ ] Set up MDX for blog content
- [ ] Create blog post schema and validation
- [ ] Implement blog post metadata handling
- [ ] Add support for draft/published states
- [ ] Create admin interface for post management

#### Blog Features (Priority: High)
- [ ] Implement blog listing page with pagination
- [ ] Create individual blog post pages
- [ ] Add categories and tags system
- [ ] Implement search functionality
- [ ] Add related posts feature
- [ ] Create RSS feed

#### Rich Content Support (Priority: Medium)
- [ ] Add image optimization and management
- [ ] Implement code syntax highlighting
- [ ] Add support for embedded content (videos, tweets)
- [ ] Create custom MDX components
- [ ] Add table of contents generation

#### SEO & Performance (Priority: High)
- [ ] Implement SEO metadata for blog posts
- [ ] Add OpenGraph and Twitter card support
- [ ] Implement sitemap generation
- [ ] Add structured data (Schema.org)
- [ ] Implement performance optimizations
  - Image lazy loading
  - Content caching
  - Static generation

#### Social & Engagement (Priority: Low)
- [ ] Add social sharing buttons
- [ ] Implement comment system
- [ ] Add newsletter subscription
- [ ] Create social media preview images
- [ ] Add reading time estimation

### Timeline

#### Phase 1 (Current Sprint)
- Complete log rotation system
- Set up basic blog infrastructure
- Implement blog post creation and listing

#### Phase 2 (Next Sprint)
- Implement admin log viewer
- Add rich content support for blog
- Complete SEO optimization

#### Phase 3 (Future)
- Complete error categorization system
- Implement social features
- Add analytics and monitoring

### Notes
- All features should maintain GDPR compliance
- Mobile-first approach for all UI components
- Maintain accessibility standards (WCAG 2.1)
- Regular security audits required
- Performance budget: < 3s initial load time

# Client handoff — after go-live

Use this checklist when a preview site becomes the client’s live marketing site.

## 1. Confirm branding & facts

- [ ] Firm name, tagline, suburb, and address are correct
- [ ] Phone number and email are live and monitored
- [ ] ABN (if shown) matches the client’s records
- [ ] Services list matches what the firm actually offers
- [ ] About copy approved by the principal
- [ ] No leftover “preview / demonstration” wording in visible UI (footer may still note limits — remove if client prefers)

## 2. Contact form

- [ ] Formspree (or replacement) form ID set in `src/config/site.config.ts`
- [ ] Test submission received in the firm’s inbox
- [ ] Spam filtering / notification email confirmed
- [ ] Mailto fallback still points to the right address

## 3. Domain & hosting

- [ ] Vercel (or chosen host) project connected to the correct GitHub repo
- [ ] Custom domain attached (e.g. `www.firmname.com.au`)
- [ ] DNS propagated; HTTPS certificate active
- [ ] Redirect apex ↔ www as agreed

## 4. SEO & analytics (optional, client-approved)

- [ ] Titles and meta descriptions reviewed
- [ ] Google Business Profile link matches NAP (name, address, phone)
- [ ] Analytics / Tag Manager only if the client requested it

## 5. Access transfer

- [ ] Client (or their IT) has GitHub and Vercel access, **or** a maintenance agreement is in place
- [ ] Formspree account ownership transferred or shared
- [ ] Source of truth documented: “edit `src/config/site.config.ts` for copy/brand changes”

## 6. Scope reminder

This kit is a **marketing brochure site** (Home, Services, About, Contact). It is not a client portal, booking system, or document exchange. Future features should be scoped separately.

## Support contacts

| Role | Contact |
|------|---------|
| Build / preview partner | _(fill in)_ |
| Firm principal | _(fill in)_ |
| Hosting login | _(fill in)_ |

---

*Generated for use with the SEQ Accountant Preview Kit.*

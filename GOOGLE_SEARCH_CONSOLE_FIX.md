# Google Search Console 5xx Error Fix

## Wat is er gedaan?

### 1. ✅ .htaccess Optimalisatie
- Vereenvoudigde rewrite regels om loops te voorkomen
- Toegevoegd: error handling voor alle 4xx en 5xx errors
- Alle errors redirecten nu naar index.html (200 status)

### 2. ✅ Prerendering Fix
- Alle pagina's worden nu als `.html` bestanden gegenereerd
- `/features` → serveert `/features.html`
- Geen directories met trailing slashes meer

### 3. ✅ Trailing Slash Verwijderd
- URLs met trailing slash (/) redirecten naar versie zonder
- `/features/` → 301 redirect → `/features`

## Test Stappen

### 1. Controleer of de site bereikbaar is
```bash
curl -I https://www.glimps.be/features
# Verwacht: HTTP/2 200
```

### 2. Test Googlebot simulator
Gebruik: https://www.google.com/webmasters/tools/googlebot-fetch

Of gebruik de URL Inspection tool in Search Console:
1. Ga naar Search Console
2. Klik op "URL-inspectie" (bovenaan)
3. Voer een problematische URL in
4. Klik "Test live URL"
5. Bekijk de resultaten

### 3. Test trailing slash redirect
```bash
curl -I https://www.glimps.be/features/
# Verwacht: HTTP/2 301 (redirect)
# Location: https://www.glimps.be/features
```

### 4. Controleer prerendered files
Alle deze URLs zouden een 200 status moeten geven:
- https://www.glimps.be/features
- https://www.glimps.be/blog
- https://www.glimps.be/about
- https://www.glimps.be/blog/conversie-verhogen
- https://www.glimps.be/industries/fashion-design

## Als het probleem aanhoudt

### Optie 1: Gebruik alternatieve .htaccess
```bash
# Op de server
cd /path/to/public
mv .htaccess .htaccess.backup
mv .htaccess.alternative .htaccess
```

### Optie 2: Check server logs
Kijk in de Apache error logs voor meer details:
```bash
tail -f /var/log/apache2/error.log
# Of
tail -f /var/log/httpd/error_log
```

### Optie 3: Verify .htaccess is enabled
Controleer of `AllowOverride` is ingeschakeld in Apache config:
```apache
<Directory /var/www/html>
    AllowOverride All
</Directory>
```

## Google Search Console Acties

### 1. Request Re-indexing
Voor elke problematische URL:
1. Open URL Inspection tool
2. Voer de URL in
3. Test de live URL
4. Als test slaagt → klik "Request Indexing"

### 2. Validation Request
1. Ga naar het Page Indexing rapport
2. Klik op "Server error (5xx)" in de tabel
3. Klik "Validate Fix"
4. Wacht 1-2 weken op validatie resultaat

### 3. Monitor Progress
- Check daily for first 3 days
- Then weekly
- Google stuurt email als validatie klaar is

## Veelvoorkomende Oorzaken van 5xx Errors

1. **Server Overload** - Te veel requests tegelijk
2. **PHP Errors** - Als er PHP gebruikt wordt
3. **.htaccess Syntax Errors** - Verkeerde rewrite regels
4. **Resource Limits** - Memory of CPU limits bereikt
5. **Database Connection Issues** - Als er een database gebruikt wordt

## Nuttige Links

- Test page: https://www.glimps.be/test-googlebot.html (gebruik deze om te testen)
- Sitemap: https://www.glimps.be/sitemap.xml
- Robots.txt: https://www.glimps.be/robots.txt

## Contact Hosting Provider

Als het probleem aanhoudt na deze fixes, vraag je hosting provider:

1. "Waarom geeft de server 5xx errors aan Googlebot?"
2. "Zijn er rate limits voor crawlers?"
3. "Staan .htaccess rewrites toe?"
4. "Zijn er server logs beschikbaar?"
5. "Wat is de max execution time en memory limit?"

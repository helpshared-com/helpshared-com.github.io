export default {
  async fetch(request, env, ctx) {
    // Fetch the original response
    const response = await fetch(request);

    // Detect user country from Cloudflare headers
    const country = request.headers.get('cf-ipcountry');
    
    // Dynamically decide the lang attribute
    const langCode = country === 'ID' ? 'id' : 'en';

    // Use HTMLRewriter to modify the <html> tag
    return new HTMLRewriter()
      .on('html', {
        element(element) {
          element.setAttribute('lang', langCode);
        }
      })
      .transform(response);
  }
};
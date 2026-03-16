const https = require('https');
const fs = require('fs');
const path = require('path');

const fetchPage = (url) => new Promise((resolve) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => resolve(data));
    });
});

async function main() {
    console.log("Fetching gallery...");
    const galleryHtml = await fetchPage('https://sarangidentistry.in/photo_gallery/clinic/');

    const urlRegex = /(https:\/\/sarangidentistry\.in\/wp-content\/uploads\/[^"'\s>]+\.(jpg|jpeg|png|webp))/gi;
    const matches = [...galleryHtml.matchAll(urlRegex)];
    
    // Filter to real images, avoid favicons/logos/icons
    const galleryImages = matches
        .map(m => m[1])
        .filter(src => src.includes('wp-content/uploads') && !src.includes('logo') && !src.includes('icon') && !src.includes('bg'));
    
    // Removing duplicates and small thumbnails if any, usually full images don't have dims like -150x150
    const filteredImages = [...new Set(galleryImages)].filter(src => !src.match(/-\d+x\d+\.(jpg|png)$/));

    const outPath = './src/data/galleryData.js';
    const content = `// Auto-generated\nexport const galleryImages = ${JSON.stringify(filteredImages, null, 2)};\n`;
    fs.writeFileSync(outPath, content);
    console.log("Successfully extracted " + filteredImages.length + " images");
}
main();

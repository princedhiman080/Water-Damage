const fs = require('fs');
const path = require('path');

const slugs = [
  'is-water-damage-restoration-worth-it-chicago',
  'how-to-choose-water-damage-restoration-company-chicago',
  'what-not-to-do-after-water-damage-chicago',
  'can-water-damage-be-repaired-chicago',
  'how-long-does-water-damage-restoration-take-chicago'
];

slugs.forEach(slug => {
  const filePath = path.join('d:/water test/app/blog', slug, 'page.tsx');
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Remove existing homepage links to avoid double linking
  content = content.replace(/<Link href="\/".*?>(.*?)<\/Link>/gi, '$1');
  
  const regex1 = /water damage restoration chicago/i;
  const regex2 = /water damage restoration/i;
  
  function replaceFirst(text, regex) {
    let replaced = false;
    const parts = text.split(/(<[^>]*>)/);
    for (let i = 0; i < parts.length; i++) {
      if (parts[i].startsWith('<')) continue;
      
      if (!replaced && regex.test(parts[i])) {
        // Only replace the first match in this block
        parts[i] = parts[i].replace(regex, (match) => {
          return `<Link href="/" className="text-sky-600 font-semibold hover:underline">${match}</Link>`;
        });
        replaced = true;
      }
    }
    return { newText: parts.join(''), replaced };
  }
  
  let result = replaceFirst(content, regex1);
  if (!result.replaced) {
    result = replaceFirst(content, regex2);
  }
  
  fs.writeFileSync(filePath, result.newText, 'utf8');
  console.log('Updated: ' + slug + (result.replaced ? ' (Link Added)' : ' (No Link Added)'));
});

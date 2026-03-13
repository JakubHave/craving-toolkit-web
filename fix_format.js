const fs = require('fs');
let c = fs.readFileSync('src/app/articles/[slug]/page.tsx', 'utf8');

// Find the formatContent function and replace it with a more robust version
const oldCode = `const formatContent = (content: string) => {
    return content.split('\\n\\n').map((paragraph, idx) => {
      if (paragraph.startsWith('### ')) {
        return <h3 key={idx} className="text-2xl font-bold mt-10 mb-4 text-slate-900">{paragraph.replace('### ', '')}</h3>;
      }
      if (paragraph.startsWith('* ')) {
        const items = paragraph.split('\\n').map(item => item.replace('* ', ''));
        return (
          <ul key={idx} className="list-disc pl-6 space-y-2 mb-6 text-lg text-slate-700">
            {items.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        );
      }`;

const newCode = `const formatContent = (content: string) => {
    return content.split('\\n\\n').map((paragraph, idx) => {
      if (paragraph.startsWith('### ')) {
        return <h3 key={idx} className="text-2xl font-bold mt-10 mb-4 text-slate-900">{paragraph.replace('### ', '')}</h3>;
      }
      
      // Handle bullet points (* )
      if (paragraph.includes('\\n* ')) {
        const items = paragraph.split('\\n').filter(line => line.startsWith('* ')).map(item => item.substring(2));
        if (items.length > 0) {
          return (
            <ul key={idx} className="list-disc pl-6 space-y-2 mb-6 text-lg text-slate-700">
              {items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          );
        }
      }`;

c = c.replace(oldCode, newCode);
fs.writeFileSync('src/app/articles/[slug]/page.tsx', c);

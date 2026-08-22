import { visit } from 'unist-util-visit';

const WIDTH_RE = /\s*\{width=(\d+)\}\s*$/;

export function remarkFigures() {
  return (tree) => {
    visit(tree, 'paragraph', (node) => {
      if (node.children.length !== 1 || node.children[0].type !== 'image') return;
      const img = node.children[0];
      const alt = typeof img.alt === 'string' ? img.alt : '';
      const match = alt.match(WIDTH_RE);
      let caption = alt;
      let width;
      if (match) {
        width = Number(match[1]);
        caption = alt.slice(0, match.index).trimEnd();
        img.alt = caption;
      }
      node.data = node.data || {};
      node.data.hName = 'figure';
      if (width) {
        node.data.hProperties = { style: `width: min(${width}px, 100%)` };
      }
      if (caption) {
        node.children.push({
          type: 'paragraph',
          data: { hName: 'figcaption' },
          children: [{ type: 'text', value: caption }],
        });
      }
    });
  };
}

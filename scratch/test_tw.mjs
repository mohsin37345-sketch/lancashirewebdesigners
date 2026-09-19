import { compile } from 'tailwindcss';

try {
  const css1 = `
@import "tailwindcss";
@custom-variant dark (&:where(.dark, .dark *));
.test {
  @apply dark:bg-black;
}
`;
  const res1 = await compile(css1, { base: process.cwd() });
  console.log('Result with @custom-variant:');
  console.log(res1.build([]));
} catch (e) {
  console.log('@custom-variant error:', e.message);
}

try {
  const css2 = `
@import "tailwindcss";
@variant dark (&:where(.dark, .dark *));
.test {
  @apply dark:bg-black;
}
`;
  const res2 = await compile(css2, { base: process.cwd() });
  console.log('Result with @variant:');
  console.log(res2.build([]));
} catch (e) {
  console.log('@variant error:', e.message);
}

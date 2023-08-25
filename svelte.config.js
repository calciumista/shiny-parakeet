import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').config} */
const config = {
  kit: {
    adapter: adapter()
  }
};

export default config;
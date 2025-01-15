# Astro Starter

To use,

- clone repo
- git remote remove origin
- pnpm i
- astro host

Another starter I made for my projects! Why do I need another? Well so far I've made
two including this one. 

- Vite, Daisy, React, React-Router-Dom
and this one
- Astro, Daisy React

So they're pretty similar, the primary difference being Astro vs Vite. Why do 
I need both and when would I use one over the other? 

Excellent questions. In short, Vite is more fit for Apps, and Astro is more 
fit for static content with occasional hydration (SSG type stuff). 

Vite needs some nginx config, then relies on react-router to handle page routing, 
and I can easily implement some complex logic when it comes to app routing,
and I love the DX of Vite for bundling. The downside is, it's a SPA so 
some curl based crawling / indexing wont work super well for SEO. Also, it's a bit 
heavier, which usually isn't a problem, but for ultra-lightweight hosting there 
are some drawbacks. 

Astro is awesome. It has SSR or SSG functionality, but I usually use it as a SSG. 
It lets me add in React sparingly as needed, but still have jsx for building my 
static content. It has scoped css, and components by default. I threw Daisy into 
this one for some added css framework stuff, and it all builds to basic html 
css that requires no extra nginx config to host. My bundle size gets tiny tiny.

Just another tool for another job, and this is where I'd usually start when it comes
to using Astro as a starter template. 
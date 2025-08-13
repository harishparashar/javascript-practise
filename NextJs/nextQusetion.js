// 1 - What is Next js. 
// Next js is react framework for building fullstack web App. developed by vercel. 
// so it means you can write any react code in next js like componeent , hooks,props etc . 
// next js gives you every thing that's react not provide out of the box like routing, ssr, ssg,api routes and even full backend logic.

// Next.js is a React framework used for building fast and SEO-friendly web applications. 
// It provides features like server-side rendering (SSR), static site generation (SSG), routing, API routes, and image optimization out of the box. 
// We use Next.js because it improves performance, SEO, and developer experience compared to plain React.

// Why Next Js . 
// - file based routing 
// - performance optimized - support ssg (static site genration) , ssr,fast page load and better seo 
// - build in api routes - no need to setup a seprate server 
// - seo friendly 
// - full stack power - 
// - extra optimization - image , font , metadata 

// 2. What is the difference between SSR, SSG, and CSR in Next.js?
// Answer:
// SSR (Server-Side Rendering): The HTML is generated on every request (getServerSideProps).
// SSG (Static Site Generation): The HTML is pre-rendered at build time (getStaticProps).
// CSR (Client-Side Rendering): Data is fetched on the client using hooks like useEffect.
// Use case:
// Use SSR for dynamic pages like dashboards.
// Use SSG for blogs and landing pages.
// Use CSR when SEO is not critical and data can be loaded after the page loads.

// 3. What is getStaticProps and getServerSideProps?
// Answer:
// getStaticProps: Fetches data at build time (used for SSG).
// getServerSideProps: Runs on every request (used for SSR).
// export async function getStaticProps() {
//   const data = await fetchData();
//   return { props: { data } };
// }
// export async function getServerSideProps(context) {
//   const data = await fetchData();
//   return { props: { data } };
// }

// 4. What is getStaticPaths and why do we need it?
// Answer:
// getStaticPaths is used with getStaticProps for dynamic routes to specify which paths to pre-render at build time.
// export async function getStaticPaths() {
//   const posts = await fetchPosts();
//   const paths = posts.map(post => ({
//     params: { id: post.id.toString() },
//   }));

//   return { paths, fallback: false };
// }

// 5. What is the difference between pages and app router in Next.js 13+?
// Answer:
// Pages Router: Uses pages/ directory with file-based routing.
// App Router: Introduced in Next.js 13 using app/ directory, supports React Server Components, nested layouts, and advanced routing.

// 6. How does routing work in Next.js?
// Answer:
// Next.js uses file-based routing. Any file in the pages/ folder becomes a route. For dynamic routing, we use [param].js.
// Example:
// pages/index.js → /
// pages/about.js → /about
// pages/blog/[id].js → /blog/123

// 7. What is Image Optimization in Next.js?
// Answer:
// Next.js provides the <Image> component to automatically optimize images — resizing, lazy loading, and serving in modern formats. 
// It improves performance and page load time.

// 8. What is API Routes in Next.js?
// Answer:
// You can create backend APIs directly inside your Next.js app using the pages/api directory.

// 9. What is ISR (Incremental Static Regeneration)?
// Answer:
// ISR allows you to update static pages after deployment. You can set a revalidate time in getStaticProps.
// export async function getStaticProps() {
//   const data = await fetchData();
//   return {
//     props: { data },
//     revalidate: 10, // Revalidate every 10 seconds
//   };
// }

// 10. How do you handle SEO in Next.js?
// Answer:
// We use the <Head> component from next/head to set meta tags, titles, descriptions, and social tags for SEO.
// import Head from 'next/head';

// <Head>
//   <title>My Page</title>
//   <meta name="description" content="My Next.js SEO page" />
// </Head>
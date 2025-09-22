import React, { useMemo } from "react";
import { useLocation, useParams, Link, useNavigate } from "react-router-dom";
import { FaUserEdit, FaCalendarAlt, FaClock, FaArrowLeft, FaTags } from "react-icons/fa";
import { Helmet } from "react-helmet";

const fallbackPosts = [
  {
    id: 1,
    title: "The Future of AI in Web Development",
    excerpt: "Artificial intelligence is no longer a futuristic concept—it's actively reshaping the web development landscape. From intelligent code assistants that suggest optimizations in real-time to AI-powered design tools that generate entire layouts based on simple prompts, the integration of machine learning into development workflows is accelerating at an unprecedented pace.",
    fullText: "The integration of artificial intelligence into web development represents one of the most significant shifts in how we build digital experiences. Today's AI tools can analyze design mockups and automatically generate semantic HTML and CSS, significantly reducing development time. Platforms like GitHub Copilot suggest entire functions based on comments, while AI-powered testing tools can identify potential bugs and performance issues before they reach production. Beyond development, AI is revolutionizing user experiences through personalized content delivery, intelligent chatbots that provide genuine assistance, and adaptive interfaces that respond to user behavior patterns. As these technologies mature, developers will need to focus less on repetitive coding tasks and more on strategic problem-solving, architecture design, and creating meaningful user interactions. The future web developer will work alongside AI as a collaborative partner, leveraging machine learning to build more accessible, performant, and engaging websites.",
    author: "Alex Johnson",
    authorBio: "Senior AI Researcher at Tech Innovations with 10+ years experience in machine learning applications",
    date: "October 26, 2023",
    readTime: "8 min read",
    category: "Artificial Intelligence",
    tags: ["AI", "Web Development", "Machine Learning", "Automation"],
    image: "https://placehold.co/800x460/333/fff?text=AI+in+Web+Dev",
    featured: true,
  },
  {
    id: 2,
    title: "Mastering React Hooks: A Comprehensive Guide",
    excerpt: "React Hooks have fundamentally changed how we write components, moving away from class-based complexity toward functional simplicity. This deep dive explores not just the basic hooks like useState and useEffect, but also advanced patterns including custom hooks for state management, side effects, and performance optimization.",
    fullText: "Since their introduction in React 16.8, Hooks have become the standard way to manage state and side effects in functional components. The useState hook provides a straightforward way to add local state to functional components, while useEffect consolidates what were previously separate lifecycle methods into a unified API. But the real power of Hooks emerges when you dive into more sophisticated patterns. Custom hooks allow you to extract component logic into reusable functions, enabling complex state management without higher-order components or render props. The useReducer hook offers an alternative to useState for managing complex state logic, while useMemo and useCallback help optimize performance by memoizing expensive calculations. Context hooks like useContext simplify prop drilling, and third-party libraries have embraced hooks for everything from form handling to API calls. This guide will walk you through practical examples of building real-world applications using hooks, covering common pitfalls, best practices, and advanced patterns used by experienced React developers.",
    author: "Sarah Lee",
    authorBio: "React Core Team Member and Author of 'React Patterns in Practice'",
    date: "October 18, 2023",
    readTime: "12 min read",
    category: "React",
    tags: ["React", "Hooks", "JavaScript", "Frontend"],
    image: "https://placehold.co/800x460/222/fff?text=React+Hooks",
    featured: true,
  },
  {
    id: 3,
    title: "CSS-in-JS vs. CSS Modules: Which to Choose?",
    excerpt: "The debate between CSS-in-JS and CSS Modules continues to divide the frontend community. Both approaches solve the challenges of CSS scoping and component-based styling, but they represent fundamentally different philosophies about where styles should live and how they should be managed.",
    fullText: "When building modern web applications, styling methodology decisions can significantly impact developer experience, performance, and maintainability. CSS Modules take a build-time approach, scoping class names locally by default while maintaining the familiarity of traditional CSS. They work well with existing CSS ecosystems and tools, offering predictable performance characteristics since styles are processed during compilation. CSS-in-JS, on the other hand, moves styling directly into JavaScript, enabling dynamic styles based on props and state, critical CSS extraction, and runtime theme switching. Libraries like Styled Components and Emotion have popularized this approach, offering excellent developer experience and component-collocation benefits. However, this comes with a JavaScript bundle cost and potential performance implications. The choice often depends on team preferences, project scale, and performance requirements. Large, content-heavy websites might prefer CSS Modules for their lighter runtime footprint, while complex web applications with dynamic theming might benefit from CSS-in-JS flexibility.",
    author: "Michael Chen",
    authorBio: "UI Architect specializing in design systems and scalable CSS architectures",
    date: "October 10, 2023",
    readTime: "10 min read",
    category: "CSS",
    tags: ["CSS", "Styling", "Frontend", "Web Design"],
    image: "https://placehold.co/800x460/111/fff?text=Styling+in+JS",
    featured: false,
  },
  {
    id: 4,
    title: "Optimizing Performance in Single-Page Applications",
    excerpt: "Single-page applications offer smooth user experiences but can suffer from performance issues as they grow. Learn advanced techniques for code splitting, lazy loading, bundle optimization, and intelligent caching strategies that can transform a sluggish SPA into a lightning-fast application.",
    fullText: "Performance optimization in SPAs requires a multi-layered approach addressing both initial load time and runtime performance. Code splitting is essential—breaking your application into smaller chunks that load on demand. React.lazy() and Suspense for React applications, or dynamic imports for other frameworks, enable route-based and component-based splitting. Lazy loading extends beyond code to images, data, and other non-critical resources. Bundle analysis tools like Webpack Bundle Analyzer help identify optimization opportunities, while tree shaking eliminates dead code. Beyond the bundle, runtime performance depends on efficient state management, avoiding unnecessary re-renders through proper memoization, and optimizing expensive computations. Caching strategies—both at the HTTP level with service workers and at the application level with libraries like React Query—reduce network requests. Monitoring real user metrics (Core Web Vitals) provides insight into actual performance experienced by users, guiding optimization efforts where they matter most.",
    author: "Jessica Williams",
    authorBio: "Performance Engineer at ScaleTech, specializing in web vitals optimization",
    date: "October 5, 2023",
    readTime: "14 min read",
    category: "Performance",
    tags: ["Performance", "SPA", "Optimization", "JavaScript"],
    image: "https://placehold.co/800x460/444/fff?text=SPA+Performance",
    featured: false,
  },
  {
    id: 5,
    title: "The Rise of Serverless Architecture",
    excerpt: "Serverless computing is transforming how we deploy and scale applications by abstracting infrastructure management entirely. Discover how functions-as-a-service platforms enable developers to focus purely on code while achieving unprecedented scalability and cost efficiency.",
    fullText: "Serverless architecture represents a paradigm shift from managing servers to writing functions that run in response to events. Platforms like AWS Lambda, Azure Functions, and Google Cloud Functions handle all infrastructure concerns—provisioning, scaling, maintenance, and patching—automatically. This allows developers to focus exclusively on business logic. The pay-per-execution model means you only pay for compute time actually consumed, making it incredibly cost-effective for variable workloads. Beyond cost benefits, serverless enables automatic scaling from zero to thousands of concurrent executions without any configuration. The ecosystem has expanded to include serverless databases, authentication services, and file storage, creating complete serverless application platforms. Challenges remain, including cold start latency, debugging distributed systems, and vendor lock-in concerns, but the productivity gains and operational simplicity continue to drive adoption across organizations of all sizes.",
    author: "David Brown",
    authorBio: "Cloud Architect and Author of 'Serverless Patterns for Enterprise'",
    date: "September 28, 2023",
    readTime: "11 min read",
    category: "Architecture",
    tags: ["Serverless", "Cloud", "Backend", "AWS"],
    image: "https://placehold.co/800x460/555/fff?text=Serverless",
    featured: true,
  },
  {
    id: 6,
    title: "Demystifying GraphQL: A Beginner's Introduction",
    excerpt: "GraphQL offers a powerful alternative to REST APIs by giving clients precisely the data they request—no more, no less. This introduction covers the core concepts, from schemas and queries to mutations and real-time subscriptions, with practical examples for getting started.",
    fullText: "GraphQL addresses common frustrations with REST APIs, such as over-fetching (receiving more data than needed) and under-fetching (requiring multiple requests to gather related data). With GraphQL, clients specify exactly what data they need in a single query, and the server responds with exactly that structure. The type system defined in the schema serves as a contract between client and server, enabling powerful developer tools like GraphiQL for exploring APIs and generating queries. Mutations handle data modifications, while subscriptions enable real-time updates. Setting up a GraphQL server involves defining types, resolvers for fetching data, and potentially integrating with existing databases or REST APIs. Client libraries like Apollo Client and Relay simplify consuming GraphQL APIs in frontend applications, handling caching, optimistic updates, and request management. While GraphQL introduces complexity in authorization, performance optimization (N+1 query problem), and file uploading, its benefits for developer experience and application performance make it a compelling choice for modern APIs.",
    author: "Laura Davis",
    authorBio: "API Specialist and GraphQL Consultant for Fortune 500 companies",
    date: "September 20, 2023",
    readTime: "9 min read",
    category: "API",
    tags: ["GraphQL", "API", "Backend", "Fullstack"],
    image: "https://placehold.co/800x460/666/fff?text=GraphQL+Intro",
    featured: false,
  },
];

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { state } = useLocation();
  const postId = Number(id);

  const post = useMemo(() => {
    if (state?.post && state.post.id === postId) return state.post;
    return fallbackPosts.find((p) => p.id === postId);
  }, [state, postId]);

  const suggestions = useMemo(() => fallbackPosts.filter((p) => p.id !== postId).slice(0, 3), [postId]);

  if (!post) {
    return (
      <div className="flex items-center justify-center min-h-screen p-6 text-white bg-gray-950">
          <Helmet>
  <title>Blog Details | JobFinder</title>
  <meta name="description" content="View and manage your JobFinder profile." />
</Helmet>
        <div className="text-center">
          <h1 className="mb-4 text-2xl font-bold">Post not found</h1>
          <p className="mb-6 text-gray-400">The article you are looking for may have been moved or deleted.</p>
          <button
            onClick={() => navigate("/blog")}
            className="inline-flex items-center px-6 py-3 font-semibold text-gray-900 transition-all duration-300 bg-white rounded-full hover:bg-gray-200"
          >
            <FaArrowLeft className="mr-2" />
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen font-sans text-white bg-gray-950">
      <header className="relative py-16 overflow-hidden shadow-xl bg-gradient-to-br from-indigo-950 to-purple-950">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 bg-indigo-500 rounded-full w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob -left-4"></div>
          <div className="absolute top-0 bg-purple-500 rounded-full w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 right-4"></div>
          <div className="absolute bg-blue-500 rounded-full w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 top-44 left-24"></div>
        </div>
        <div className="container relative z-10 px-4 pt-10 mx-auto">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center px-4 py-2 mb-6 text-sm transition-colors duration-300 border rounded-full border-white/20 text-white/90 hover:bg-white/10"
          >
            <FaArrowLeft className="mr-2" />
            Back
          </button>
          <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center mt-4 text-sm text-indigo-300">
            <div className="flex items-center mb-2 mr-4">
              <FaUserEdit className="mr-2 text-purple-400" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center mb-2 mr-4">
              <FaCalendarAlt className="mr-2 text-purple-400" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center mb-2">
              <FaClock className="mr-2 text-purple-400" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </header>
      <main className="container px-4 py-12 mx-auto">
        <article className="max-w-4xl p-6 mx-auto border shadow-2xl bg-white/5 rounded-3xl sm:p-10 backdrop-blur border-white/10">
          <img
            src={post.image}
            alt={post.title}
            className="object-cover w-full h-auto mb-8 shadow-lg rounded-xl"
          />
          <div className="flex flex-wrap items-center mb-6">
            <FaTags className="mr-2 text-purple-400" />
            {post.tags.map((tag, index) => (
              <span key={index} className="inline-block bg-purple-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full mr-2 mb-2">{tag}</span>
            ))}
          </div>
          <p className="mb-6 text-lg leading-relaxed text-gray-200">{post.excerpt}</p>
          <p className="text-lg leading-relaxed text-gray-200">{post.fullText}</p>
        </article>
        <section className="max-w-6xl mx-auto mt-20">
          <h2 className="mb-8 text-3xl font-bold text-center text-gray-100 sm:text-left">Suggested Posts</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {suggestions.map((s) => (
              <Link key={s.id} to={`/blog/${s.id}`} state={{ post: s }} className="block group">
                <div className="bg-white/5 rounded-3xl p-6 shadow-xl transition-transform duration-300 hover:scale-[1.02] backdrop-blur border border-white/10 h-full flex flex-col">
                  <div className="flex-shrink-0">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="object-cover w-full h-40 mb-6 shadow rounded-xl"
                    />
                  </div>
                  <div className="flex flex-col flex-grow">
                    <h3 className="mb-2 text-lg font-bold leading-snug transition-colors group-hover:text-purple-400">{s.title}</h3>
                    <p className="flex-grow text-sm text-gray-400">{s.excerpt}</p>
                    <div className="flex flex-wrap items-center mt-4 text-sm text-gray-500">
                      <div className="flex items-center mr-4">
                        <FaUserEdit className="mr-2 text-purple-400" />
                        <span>{s.author}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
   
    </div>
  );
};

export default BlogDetails;
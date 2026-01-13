import { Fragment } from "react";
import Hero from "../components/home-page/hero.js";
import FeaturedPosts from "../components/home-page/featured-posts.js";

const DUMMY_POSTS = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
    date: "2024-06-10",
  },
  {
    slug: "getting-started-with-nextjs",
    title: "NextJS is a Great Framework",
    image: "getting-started-nextjs.png",
    excerpt:
      "The NextJS framework has been taking the React world by storm - it's a great solution for building SEO-friendly React applications.",
    date: "2024-06-12",
  },
];

export default function HomePage() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  );
}

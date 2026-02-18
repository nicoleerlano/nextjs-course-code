import { Fragment } from "react";
import Hero from "../components/home-page/hero.js";
import FeaturedPosts from "../components/home-page/featured-posts.js";
import { getFeaturedPosts } from "../lib/posts-util.js";

export default function HomePage(props) {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  return { props: { posts: featuredPosts } };
}

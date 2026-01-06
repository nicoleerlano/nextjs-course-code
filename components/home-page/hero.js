import classes from "./hero.module.css";
import Image from "next/image";

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/me.png"
          alt="An illustriation of nicole"
          width={300}
          height={300}
        />
      </div>
      <h1>Welcome to My Blog</h1>
      <p>Insights and stories from my journey in web development.</p>
    </section>
  );
}

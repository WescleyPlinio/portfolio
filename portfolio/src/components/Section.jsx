import FadeIn from "./FadeIn";

export default function Section({ title, textOne, textTwo, children, id }) {
  return (
    <section id={id} className="my-40">
      <FadeIn>
        <h1 className="text-purple-400 text-5xl mb-20">
          {title}
        </h1>
      </FadeIn>

      <FadeIn>
        <p className="text-white text-2xl mb-15">
          {textOne}
        </p>
      </FadeIn>

      <FadeIn>
        <p className="text-white text-2xl">
          {textTwo}
        </p>
      </FadeIn>

      <FadeIn>
        {children}
      </FadeIn>
    </section>
  );
}

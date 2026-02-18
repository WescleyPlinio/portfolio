import FadeIn from "./FadeIn";

export default function Section({ title, textOne, textTwo, children, id }) {
  return (
    <section id={id} className="my-40">
      <FadeIn>
        <h1 className="text-purple-400 text-3xl sm:text-5xl mb-10">
          {title}
        </h1>
      </FadeIn>

      <FadeIn>
        <p className="text-white sm:text-2xl mb-10">
          {textOne}
        </p>
      </FadeIn>

      <FadeIn>
        <p className="text-white sm:text-2xl">
          {textTwo}
        </p>
      </FadeIn>

      {children}

    </section>
  );
}

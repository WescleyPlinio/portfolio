import FadeIn from "./FadeIn";

export default function Section({ title, textOne, textTwo, children, id }) {
  return (
    <section id={id} className="pt-20 mb-50">
      <FadeIn>
        <h1 className="text-blue-300 shadow-blue-300 font-special-gothic text-3xl sm:text-7xl mb-10">
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

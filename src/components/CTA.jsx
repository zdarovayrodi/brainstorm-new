import React from "react";

const CTA = () => {
  return (
    <section className="w-full md:py-16 px-4 overflow-hidden py-8" id="cta">
      <div className="container max-w-[1240px] mx-auto">
        <span className="mb-1 text-lg font-semibold text-primary bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent from-blue-500 to-red-500 dark:to-purple-500">
          Мы с Вами свяжемся
        </span>
        <h2 className="mb-8 text-3xl font-bold text-dark sm:text-4xl">
          Оставьте заявку
        </h2>
        <iframe
          src="https://tally.so/embed/mRd6qQ?alignLeft=1&hideTitle=1&transparentBackground=1"
          loading="lazy"
          width="100%"
          id="contact"
          height="200px"
          title="Оставьте заявку, мы с Вами свяжемся"
        />
      </div>
    </section>
  );
};

export default CTA;

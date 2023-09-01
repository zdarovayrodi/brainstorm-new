import React from "react";

const CTAPlan = () => {
  return (
    <section className="w-full md:py-16 px-4 overflow-hidden py-8" id="ctaplan">
      <div className="container max-w-[1240px] mx-auto">
        <span className="mb-1 text-lg font-semibold text-primary bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent from-blue-500 to-red-500 dark:to-purple-500">
          Уже решили?
        </span>
        <h2 className="mb-8 text-3xl font-bold text-dark sm:text-4xl">
          Заполните заявку!
        </h2>
        <iframe
          src="https://tally.so/embed/woD85V?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
          loading="lazy"
          width="100%"
          height="299px"
          id="chosenContact"
          title="Выберите тариф"
        />
      </div>
    </section>
  );
};

export default CTAPlan;

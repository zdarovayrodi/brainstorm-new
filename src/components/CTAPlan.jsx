import React from 'react'

const CTAPlan = () => {
  return (
    <section className="w-full md:py-16 px-4 overflow-hidden py-8">
        <div className="container max-w-[1240px] mx-auto">
            <span className="block mb-1  text-lg font-semibold text-primary">
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
                frameborder="0"
                marginheight="0"
                marginwidth="0"
                scrollBar="hidden"
                title="Выберите тариф"
            />
        </div>
    </section>
  )
}

export default CTAPlan
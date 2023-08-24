const stats = [
    { id: 1, name: 'Преподаватели со всего мира', value: 'Носители языка' },
    { id: 2, name: 'Избавим от языкового барьера', value: 'За 3 месяца' },
    { id: 3, name: 'Ддя детей школьного возраста', value: 'Подходит' },
  ]
  
  export default function Example() {
    return (
      <div className="py-20 sm:py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-gray-600 dark:text-gray-300">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight sm:text-4xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }
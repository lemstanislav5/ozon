type Product = {
  name: string
  price: number
  premiun: number | null
  type: string | null
}

export const products: Array <Product> = [
  {
    name: 'Гоночный велосипед',
    price: 10000,
    premiun: 7000,
    type: 'Хит'
  },
  {
    name: 'Конструктор Lego',
    price: 2000,
    premiun: 1100,
    type: null
  },
  {
    name: 'iPhone XS',
    price: 70000,
    premiun: 67000,
    type: 'Редкость'
  },
  {
    name: 'Корм для кошек',
    price: 1000,
    premiun: null,
    type: null,
  },
  {
    name: 'Беспроводные наушники',
    price: 5000,
    premiun: 4900,
    type: 'Хит'
  },
  {
    name: 'Фен для волос',
    price: 10000,
    premiun: 9000,
    type: '30% скидка'
  },
  {
    name: 'Гоночный велосипед',
    price: 10000,
    premiun: 7000,
    type: 'Хит'
  }
]
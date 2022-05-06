type Product = {
  name: string
  price: number
  premiun: number | null
  type: string | null
  image: string
}

export const products: Array <Product> = [
  {
    name: 'Гоночный велосипед',
    price: 10000,
    premiun: 7000,
    type: 'Хит',
    image: 'https://el-koleso.ru/image/cache/catalog/tovary/velosipedy/150/150-12-800x600.jpg'
  },
  {
    name: 'Конструктор Lego',
    price: 2000,
    premiun: 1100,
    type: null,
    image: 'https://www.lego.com/cdn/cs/set/assets/blt71f2b3a3251f7184/71363.jpg'
  },
  {
    name: 'iPhone XS',
    price: 70000,
    premiun: 67000,
    type: 'Редкость',
    image: 'https://appleinsider.ru/wp-content/uploads/2022/01/iphone_xs_main_pict-740x473.jpg'
  },
  {
    name: 'Корм для кошек',
    price: 1000,
    premiun: null,
    type: null,
    image: 'https://www.bethowen.ru/upload/iblock/55b/55bad7f922c8712744554d5e43e165d2.jpg'
  },
  {
    name: 'Беспроводные наушники',
    price: 5000,
    premiun: 4900,
    type: 'Хит',
    image: 'https://mi-shop.com/upload/resize_cache/iblock/e84/445_473_2/e84621717359a9dad1efa0b7a586d06c.jpg'
  },
  {
    name: 'Фен для волос',
    price: 10000,
    premiun: 9000,
    type: '30% скидка',
    image: 'https://groomershop.ru/wp-content/uploads/2019/10/Dewal-Spectrum-03-110-Red.jpg'
  }
]
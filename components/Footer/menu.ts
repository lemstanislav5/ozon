type MENU = {
  icon: string
  title: string
  num?: number
}
export const menu: Array<MENU> = [
  {
    icon: 'home',
    title: 'Главная'
  },
  {
    icon: 'bolt',
    title: 'Express'
  },
  {
    icon: 'shopping-basket',
    title: 'Корзина',
    num: 5
  },
  {
    icon: 'favorite-border',
    title: 'Избранное'
  },
  {
    icon: 'account-circle',
    title: 'Мой OZON'
  }
]
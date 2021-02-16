import HomeLayout from '../pages/home/homeLayout'

export const paths = {
  home: '/home',
}

interface IPathComponent {
  path: string
  component: () => JSX.Element
}

export const pathComponents: IPathComponent[] = [
  {
    path: paths.home,
    component: HomeLayout,
  },
]

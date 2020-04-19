import { lazy, LazyExoticComponent } from 'react'

const Home = lazy(() => import('../pages/home/homeContainer'))

export const paths = {
  home: '/home',
}

interface PathComponent {
  path: string
  component: LazyExoticComponent<(props: any) => JSX.Element>
}

export const pathComponents: PathComponent[] = [
  {
    path: paths.home,
    component: Home,
  },
]

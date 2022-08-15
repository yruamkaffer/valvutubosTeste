import { Router } from './router.js'

const router = new Router()
router.add('/', './pages/catalogHome.html')
router.add('/conections', './pages/conections.html')
router.add('/exploration', './pages/exploration.html')
router.add(404, './pages/404.html')

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()

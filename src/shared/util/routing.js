export function registerRoute (routes = {}, desc) {
  const route = routes[desc.path] = Object.assign({}, desc, {
    children: {},
  })

  if (desc.children) {
    for (let child of desc.children) {
      registerRoute(route.children, child)
    }
  }
}

export function resolveRouteByPath (routes = {}, path) {
  let parts = path.split('/')
  let searchPath = parts.shift()
  let currentRoutes = routes
  if (searchPath === '') {
    searchPath = `/${parts.shift()}`
  }

  do {
    const nextRoute = currentRoutes[searchPath]
    if (nextRoute) {
      searchPath = ''
    }

    searchPath += `/${parts.shift()}`
    if (parts.length < 1) {
      return nextRoute
    } else {
      currentRoutes = nextRoute.children
    }
  } while (parts.length > 0)

  return null
}

export function registerSubRoutes (routes = {}, parentPath, ...descs) {
  const route = resolveRouteByPath(routes, parentPath)
  if (!route) {
    throw new Error(`could not resolve parent route: ${parentPath}`)
  }

  for (let i in Array.from(descs)) {
    registerRoute(route.children, descs[i])
  }
}

export function routesToRouterConfig (routes) {
  if (!routes) {
    return { routes: null }
  }

  return {
    routes: Object.entries(routes).map(([k, route]) => {
      return Object.assign({}, route, {
        children: routesToRouterConfig(route.children).routes,
      })
    }),
  }
}

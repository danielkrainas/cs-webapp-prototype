import { groupBy } from 'lodash'

export * from './routing'

export function makeBootstrapper (config = {}) {
  const activators = []

  return {
    use (a, opts = {}) {
      const entry = Object.assign({
        priority: 0,
      }, opts, {
        fn: a,
      })

      activators.push(entry)
    },

    go (done) {
      let services = {}
      const register = (name, svc) => {
        Object.assign(services, { [name]: svc })
      }

      const groupedByPriority = groupBy(activators, 'priority')
      const sortedActivators = Object.keys(groupedByPriority)
        .map(p => parseInt(p))
        .sort()
        .reverse()
        .reduce((a, p) => a.concat(groupedByPriority[p]), [])

      for (let i in sortedActivators) {
        sortedActivators[i].fn(config, services, register)
      }

      if (done && typeof done === 'function') {
        done(config, services)
      }
    },
  }
}

export function initializeModules (bootstrap, modules = []) {
  return modules.map(m => m(bootstrap))
}

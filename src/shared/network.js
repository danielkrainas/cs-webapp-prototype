export function axiosRequestRewrite () {
  return ({ request_rewrites }, { axios }) => {
    const {
      enabled,
      debug,
      rules,
    } = request_rewrites // eslint-disable-line

    if (!enabled) {
      return
    }

    axios.interceptors.request.use(req => {
      for (let i = 0; i < rules.length; i++) {
        const rule = rules[i]
        if (req.url.match(rule.pattern)) {
          if (debug) {
            console.log('rewriting ', req.url, ' => ', req.url.replace(rule.pattern, rule.replace))
          }

          req.url = req.url.replace(rule.pattern, rule.replace)
          break
        }
      }

      return req
    })
  }
}

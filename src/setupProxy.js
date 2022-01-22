const {createProxyMiddleware} = require("http-proxy-middleware")

module.exports = function(app) {
    app.use(
        "/members",
        createProxyMiddleware({
            target:"http://localhost:8080",
            changeOrigin: true,
        })
    )
    app.use(
        "/login",
        createProxyMiddleware({
            target:"http://localhost:8080",
            changeOrigin: true,
        })
    )
    app.use(
        "/home",
        createProxyMiddleware({
            target:"http://localhost:8080",
            changeOrigin: true,
        })
    )
    app.use(
        "/self_diagnosis2",
        createProxyMiddleware({
            target:"http://localhost:8080",
            changeOrigin: true,
        })
    )
    app.use(
        "/check",
        createProxyMiddleware({
            target:"http://localhost:8080",
            changeOrigin: true,
        })
    )
}
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// =======
// Cypress.Commands.add('preserveAllCookiesOnce', () => {
//     Cypress.Cookies.defaults({
//         preserve: (cookie) => {
//             return true;
//         }
//     })
// })
// =======
// Cypress.Commands.add('login_request',(uesrname="18900000000",password="1111111l") =>{
//     cy.request({
//         url: "https://tpl-test.newchiwan.cn/api/auth/signin",
//         method: 'POST',
//         headers: {
//             "content-type": 'application/json; charset=UTF-8',
//             "user-agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36",
//             "X-Requested-With": "XMLHttpRequest"
//         },
//         body: {
//             "username":"18900000000",
//             "password":"1111111l"
//         }
//     })
//         .its('body')
//         .as('resp_login')
//         .then(function () {
//             expect(this.resp_login.code).to.eq(0)
//             expect(this.resp_login.msg).to.contain("ok")
//             //存入localStorage
//             window.localStorage.setItem('jwt',"Bearer " + this.resp_login.data.access.token)   //(自定义名称，值)

//         })
//     cy.window().then((window) => { //需在cy.window()才可使用保存在localstorage中的jwt
//         cy.request({
//             url: "/auth/anonymousLogin",
//             method: 'POST',
//             headers: {
//                 "content-type": 'application/json; charset=UTF-8',
//                 "user-agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36",
//                 "X-Requested-With": "XMLHttpRequest",
//                 "authorization": window.localStorage.getItem('jwt')   //获取保存的jwt的值
//             },
//             body: {
//                 "companyId": "359"
//             }
//         })
//             .its('body')
//             .as('resp')
//             .then(function () {
//                 window.localStorage.setItem('token', "Bearer " + this.resp.data.access.token)
//                 expect(this.resp.msg).to.contain('ok')
//             })
//     })
//     cy.window().then((window) => {
//         cy.request({
//             url: "/auth/getSingleLoginMenus",
//             method: 'POST',
//             headers: {
//                 "content-type": 'application/json; charset=UTF-8',
//                 "user-agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36",
//                 "authorization": window.localStorage.getItem('token')
//             }
//         })
//             .its('body')
//             .as('secret')
//             .then(function () {
//                 expect(this.secret.msg).to.contain("ok")
//                 const url = this.secret.data.list[0].url
//                 const urllist = url.split('code=')
//                 const code = urllist[1]
//                 const de_code = decodeURIComponent(code)  //url编码解码
//                 window.localStorage.setItem('secretid', de_code)
//             })
//     })
//     cy.window().then((window) => {
//         cy.request({
//             url: "/auth/login",
//             method: 'POST',
//             headers: {
//                 "content-type": 'application/json; charset=UTF-8',
//                 "user-agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36",
//                 "authorization": window.localStorage.getItem('token')
//             },
//             body: {
//                 "secret": window.localStorage.getItem('secretid')
//             }
//         })
//             .its('body')
//             .as('loginresp')
//             .then(function() {
//                 expect(this.loginresp.msg).to.contain("ok")
//                 const authorized = this.loginresp.data.access.token
//                 window.localStorage.setItem('access-token-authorized',authorized)  //最后的登录接口返回的token，需保存在特定的access-token-authorized中
//         })

//         })

// })
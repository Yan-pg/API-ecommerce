module.exports = {
    mode: process.env.NODE_ENV === 'production' ? "live" : 'sandbox',
    sandbox: process.env.NODE_ENV === 'production' ? false : true,
    sandbox_email: process.env.NODE_ENV === 'production' ? null : 'c28521083793399101526@sandbox.pagseguro.com.brr',
    email: 'yancesa.07@gmail.com',
    token: '3FE426418D7243FF8A0DA129EA45C19Dcopiar',
    notificationURL: "https://api.loja-teste.ampliee.com/v1/api/pagamentos/notificacao",
}
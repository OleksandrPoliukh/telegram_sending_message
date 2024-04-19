const TOKEN = "6958554100:AAFyt3gPgTrfu5beUay1n4MRBBie8NHnjEY";
const CHAT_ID = "-1002001883773";
const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;

document.getElementById('tg').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let message = `<b>New consumer:</b>\n`;
    message += `${this.email.value}`

    axios.post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message
    })
    .then((res) => {
        this.email.value = "";
        alert("Your email was successfully sent. Wait for callback from manager.")
    })
    .catch((err) => {
        console.warn(err);
    })
    .finally(() => {
        console.log('Finish')
    })
})
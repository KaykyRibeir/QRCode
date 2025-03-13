new Vue({
    el: '#app',
    data: {
        text: '',
        qrCode: null
    },
    methods: {
        generateQRCode() {
            if (this.text.trim() !== '') {
                const qr = new QRious({
                    element: this.$refs.qrcodeCanvas,
                    value: this.text,
                    size: 200
                });
                this.qrCode = qr;
            }
        }
    }
});

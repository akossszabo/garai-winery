import Document, { Head, Html, Main, NextScript } from 'next/document'
class GaraiWinery extends Document {
    static async getInitialProps(ctx) {
        return await Document.getInitialProps(ctx)
    }

    render() {
        return (
            <Html lang="hu-HU">
                <Head>
                    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600&display=swap" rel="stylesheet"></link>
                    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
                    <script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }

}

export default GaraiWinery
import banner from './banner.png'
import styles from './Home.module.scss'

import Header from "components/Header";
import Menu from "components/Menu";
import Gallery from "components/Gallery";
import Footer from "components/Footer";
import Popular from "components/Popular";

export default function Home () {
    return (
        <>
            <Header />
            <main>
                <section className={styles.principal}>
                    <Menu />
                    <div className={styles.principal__imagem}>
                        <h1>A galeria mais completa do espaço</h1>
                        <img src={banner} alt="A imagem da terra"></img>
                    </div>
                </section>
                <div className={styles.galeria}>
                    <Gallery />
                    <Popular />
                </div>
            </main>
            <Footer />
        </>
    )
}
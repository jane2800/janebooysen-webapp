import styles from "./Hero.module.css";
import ScrambleText from "./ScrambleText";
import photo from "../img/jane.webp";

export default function Hero() {
    return (
        <section className={`container ${styles.hero}`} aria-labelledby="hero-name">
            <div className={styles.text}>
                <p className="eyebrow">Tech, product &amp; delivery · Berlin, DE</p>
                <h1 id="hero-name" className={styles.name}>
                    <ScrambleText text="Jané Booysen" onMount splitWords wordClassName={styles.word} />
                </h1>
                <p className={styles.lede}>
                    I studied Software Engineering, so I know how things get built. What I enjoy most is working out
                    what's worth building, and keeping it moving until it's real.
                </p>
                <div className="btn-row">
                    <a href="#work" className="btn btn--filled">
                        See my work
                    </a>
                    <a href="#contact" className="btn btn--outline">
                        Say hi
                    </a>
                </div>
            </div>

            <div className={styles.photoWrap}>
                <figure className={styles.polaroid}>
                    <img
                        src={photo}
                        alt="Jané in sunglasses and a purple top, grinning and gesturing towards a white marble fountain with statues in a sunny palace garden"
                        width="760"
                        height="945"
                    />
                    <figcaption className={styles.caption}>fig. 1: Jané, presenting the fountain like it's a product demo</figcaption>
                </figure>
                <p className={styles.sticker}>
                    <span aria-hidden="true">● </span>Open to work
                </p>
            </div>
        </section>
    );
}

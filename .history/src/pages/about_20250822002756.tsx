import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import styles from "src/styles/about.module.css";

export default function About() {

    return(

        <>
        <Navbar />
        <div className={styles.abtPageContainer}>
            <h1 className={styles.aboutHeader}>About Me--</h1>
            <div className={styles.aboutContainer}>
                <p className={styles.aboutLeft}>I&apos;m</p>
                <p className={styles.aboutRight}>
                    Sheena Chiang //<br />
                    Hsin Chiang //<br />
                    蔣馨 //<br />
                    チャン　シン //
                </p>
                <p className={styles.aboutLeft}>Based In</p>
                <p className={styles.aboutRight}>
                    Taiwan // Abu Dhabi // New York
                </p>
                <p className={styles.aboutLeft}>Education</p>
                <p className={styles.aboutRight}>
                    Electrical Engineering @ <em>NYU Abu Dhabi</em>
                </p>
                <p className={styles.aboutLeft}>Focus On</p>
                <p className={styles.aboutRight}>
                    Design -- <em>Wayfinding, UI/UX, Lettering</em> <br />
                    Engineering -- <em>Electrical
                    </em> <br />
                    Interests -- <em>Machine Learning, Behavioral Economics</em>
                </p>
                <p className={styles.aboutLeft}>Experience in</p>
                <p className={styles.aboutRight}>
                    C++, R, Java <br />
                    Adobe InDesign + Illustrator<br />
                    Figma, Webflow<br />
                </p>
                <p className={styles.aboutLeft}>Speak</p>
                <p className={styles.aboutRight}>
                    English, Mandarin <span className={styles.aboutNote}>(Proficient)</span><br />
                    Japanese <span className={styles.aboutNote}>(Elementary)</span><br />
                </p>
            </div>

            <h1 className={styles.aboutHeader}>Stalk Me--</h1>
            <div className={styles.aboutContainer}>
                <p className={styles.aboutLeft}>LinkedIn</p>
                <p className={styles.aboutRight}>
                    <a href="www.linkedin.com/in/hsin-chiang" className={styles.link}>
                    www.linkedin.com/in/hsin-chiang
                    </a>
                </p>
                <p className={styles.aboutLeft}>GitHub</p>
                <p className={styles.aboutRight}>
                    <a href="https://github.com/beenzpaste" className={styles.link}>
                    https://github.com/beenzpaste
                    </a>
                </p>
            
            </div>

            <h1 className={styles.aboutHeader}>Reach Out--</h1>
            <div className={styles.aboutContainer}>
                <p className={styles.aboutLeft}>Email</p>
                <p className={styles.aboutRight}>
                    <a href="www.linkedin.com/in/hsin-chiang" className={styles.link}>
                    hc3550@nyu.edu
                    </a>
                </p>
            
            </div>
        </div>

        <Footer />
    </>

    )
    

}
import styles from "../styles/about.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"

export default function About() {

    return(

        <>
        <Navbar />
        <div className={styles.pageContainer}>
            <div className={styles.aboutContainer}>
                <p className={styles.aboutLeft}>I'm</p>
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
                    Engineering -- <em>Civil -> Mech -> Electrical
                        <span className={styles.aboutNote}>There's a fun story here!</span>
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
                    French, German <span className={styles.aboutNote}>(Limited)</span>
                </p>
            </div>
        </div>
        
        <Footer />
    </>

    )
    

}
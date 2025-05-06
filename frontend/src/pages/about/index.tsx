import style from './style.module.css';

export default function About() {
    return (
        <div className={style.container}>
            <h1 className={style.textTitle}>About "Whisper"</h1>
            <h2 className={style.textSubtitle}>Instant and Secure Information Sharing via Link.</h2>
            <p className={style.text}>
                Need to quickly send a password or an important note? "Quick Share" allows you to do
                it instantly and confidentially. You create a link, share it, and once the recipient
                opens it, the information is automatically deleted from the database.
            </p>
            <h3 className={style.textSemiTitle}>Key Benefits:</h3>
            <ul className={style.list}>
                <li>Simplicity: Easy link creation and sharing.</li>
                <li>Security: Data encryption and automatic deletion after viewing.</li>
                <li>Confidentiality: One-time use, no long-term storage.</li>
                <li>Speed: Instant information exchange.</li>
            </ul>
            <h3 className={style.textSemiTitle}>Planned Features:</h3>
            <ul className={style.list}>
                <li>Light and Dark Themes.</li>
                <li>Automatic deletion after a set time (with customization).</li>
                <li>Language Switching: Option to change the application language.</li>
            </ul>
            <h3 className={style.textSemiTitle}>
                "Whisper" is your tool for fast and secure exchange of important data. Stay tuned
                for updates!
            </h3>
        </div>
    );
}

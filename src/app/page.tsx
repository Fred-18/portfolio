import Hero from "../../components/hero/Hero";import AboutMe from "../../components/aboutme/AbouteMe";
import Card from "../../components/card/Card";
export default function Home() {
    return (
        <>
            <Hero/>
                <AboutMe/>
            <section>
                <Card/>
            </section>
        </>
    );
}

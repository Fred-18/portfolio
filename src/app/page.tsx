import Hero from "../../components/hero/Hero";
import AboutMe from "../../components/aboutme/AbouteMe";
import Tools from "../../components/tools/Tools";
import Project from "../../components/project/Project";
import Certificate from "../../components/certificate/Certificate";
import ProfessionalExperience from "../../components/professionalExperience/ProfessionalExperience";

export default function Home() {
    return (
        <>
            <Hero/>
            <AboutMe/>
            <Tools/>
            <Project/>
            <Certificate/>
            <ProfessionalExperience/>
        </>
    );
}

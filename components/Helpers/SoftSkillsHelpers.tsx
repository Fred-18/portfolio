import { softskillsContent } from "@/content/softSkillsContent";
import SoftSkillsItems from "../softSkillsItems/softSkillsItems";

export default function SoftSkillsList() {
  const skillsItems = softskillsContent.map((value) => (
    <SoftSkillsItems
      key={value.skillsId}
      skills={value.skills}
      skillsId={value.skillsId}
    />
  ));

  return <>{skillsItems}</>;
}

import { testimonialContent } from "@/content/testimonialContent";
import styles from "./Testimonials.module.css";
import TestimonialsItem from "../testimonialsItem/TestimonialsItems";

export default function Testimonials() {
  return (
    <>
      <h2 className={styles.testimonials__title}>Testimonials</h2>
      <div className={styles.testimonials__container}>
        <section className={styles.testimonials__section}>
          {testimonialContent.map((value) => (
            <TestimonialsItem
              key={value.id}
              firstName={value.firstName}
              lastName={value.lastName}
              role={value.role}
              linkedinUrl={value.linkedinUrl}
              message={value.message}
              avatar={value.avatar}
              id={""}
            />
          ))}
        </section>
      </div>
    </>
  );
}

import styles from "./Testimonials.module.css";

export default function Testimonials() {
  return (
    <>
      <h2 className={styles.testimonials__title}>Testimonials</h2>
      <div className={styles.testimonials__container}>
        <section className={styles.testimonials__section}>
          <div className={styles.testimonials__green__backgroud}>
            <div className={styles.testimonials__avatar__and__text__container}>
              <div className={styles.testimonials__avatar__wrapper}>
                <img
                  className={styles.testimonials__avatar}
                  src="./assets/Ju.jpeg"
                  alt={"Photo du consultant"}
                />
              </div>
              <div className={styles.testimonials__text__wrapper}>
                {
                  <p className={styles.testimonials__firstName}>
                    {" "}
                    first name : juju
                  </p>
                }
                {
                  <p className={styles.testimonials__lastName}>
                    Last Name : Feffffrrfffffffffffffffffer
                  </p>
                }
                {<p className={styles.testimonials__role}>Job : developer</p>}
                {
                  <p className={styles.testimonials__linkedinUrl}>
                    Linkedin : https://www.linkedin.com/in/juliette-ferrer/
                  </p>
                }
              </div>
            </div>
          </div>
          <div>
            {
              <div className={styles.testimonials__green__backgroud}>
                <p className={styles.testimonials__message}>
                  I had the pleasure of working with Fred, and I can only warmly
                  recommend him. He is a curious, committed developer who is
                  always eager to learn. He asks relevant questions, seeks to
                  deeply understand technical issues, and constantly improves
                  the quality of his code. Fred also brings real positive energy
                  to the team: he is pleasant, kind, and knows how to
                  collaborate effectively with everyone. He already has strong
                  technical maturity and real potential to quickly grow into
                  roles with greater responsibility.Fred is someone who is very
                  pleasant to work with on a daily basis. He is curious, not
                  afraid to ask questions, and does not hesitate to express his
                  opinion with accuracy. He is also someone who is very
                  dedicated in general and does not give up easily.These
                  qualities allowed him to gain the autonomy needed on the
                  project we worked on together for six months
                  (1Jeune1Solution), and I can only recommend Fred, both on a
                  human and professional level.,
                </p>
              </div>
            }
          </div>
        </section>
      </div>
    </>
  );
}

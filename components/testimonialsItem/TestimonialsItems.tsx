"use client";

import { ITestimonials } from "@/interface/iTestimonials";
import styles from "./TestimonialsItems.module.css";
import { useState } from "react";

export default function TestimonialsItem({
  firstName,
  lastName,
  role,
  linkedinUrl,
  message,
  avatar
}: ITestimonials) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <>
      <div className={styles.testimonials__green__backgroud}>
        <div className={styles.testimonials__avatar__and__text__container}>
          <div className={styles.testimonials__avatar__wrapper}>
            <img
              className={styles.testimonials__avatar}
              src={avatar}
              alt="photo avatar"
            />
          </div>
          <div className={styles.testimonials__text__wrapper}>
            {<p className={styles.testimonials__firstName}>{firstName}</p>}
            {<p className={styles.testimonials__lastName}>{lastName}</p>}
            {<p className={styles.testimonials__role}> {role}</p>}
            {
              <a
                href={linkedinUrl}
                className={styles.testimonials__linkedinUrl}
                target="_blank"
              >
                LinkedIn Profile
              </a>
            }
          </div>
        </div>
        {isExpanded && (
          <div className={styles.testimonials__message}>{message}</div>
        )}

        <button
          className={styles.toggleButton}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Hide message" : "Read message"}
        </button>
      </div>
      <div></div>
    </>
  );
}

import { useEffect, useRef, useState } from "react";

type SkillProgressProps = {
  skillLabel: string,
  skillValue: number,
  skillAriaLabel: string,
}

export default function SkillProgress( {
  skillLabel,
  skillValue,
  skillAriaLabel,
}: SkillProgressProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {          
          setIsVisible(true);
          ref.current && observer.unobserve(ref.current);
        }
      },
      { 
        root: null,
        rootMargin: "0px",
        threshold: 0.25 }
    );

    ref.current && observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);
  
  return (
    <>      
      <p className="skill-title">{skillLabel} <span className="skill-value">{skillValue}%</span></p>
      <div ref={ref} className="progress" role="progressbar" aria-label={skillAriaLabel} aria-valuenow={skillValue} aria-valuemin={0} aria-valuemax={100}>
        <div className={"progress-bar"+ (isVisible ? ' show' : '')}  style={{width: skillValue+'%'}}></div>
      </div>
    </>
  )
}
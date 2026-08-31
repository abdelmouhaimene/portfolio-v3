'use client'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { skillsType } from '@repo/types'

const SkillsTypeAnimation =  ({skills} : {skills : skillsType.skills[]}) => {
  const createSequence = (skillArray: skillsType.skills[]) => {
    const sequence: (string | number)[] = [];
    const delay = 1000; // Delay between each skill
    
    skillArray.forEach((skill) => {
      sequence.push(skill.name, delay);
    });
    
    return sequence;
  };
  return (
    <>          
        <TypeAnimation
        sequence={createSequence(skills)}
        wrapper='span'
        speed={50}
        repeat={Infinity}
      />
    </>
  )
}

export default SkillsTypeAnimation
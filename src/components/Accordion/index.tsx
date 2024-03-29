import React from 'react'


export const Accordion = (props: any) => {
  const { sections, component, render, children } = props;
  const Render = component || render || children;
  return (
    <div className="accordion">
      {
        sections.map((item: any) => Render(item))
      }
    </div>
  )
};

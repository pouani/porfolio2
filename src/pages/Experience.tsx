import React, { useEffect, useState } from 'react'
import Experiences from '../models/Experience'
import { EXPERIENCES } from '../models/List-Experience';

import 'react-accessible-accordion/dist/fancy-example.css';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
function Experience() {

  const [experiences, setExperiences] = useState<Experiences[]>([]);

  useEffect(() => {
    setExperiences(EXPERIENCES);
  })

  
  const [color, setColor] = useState<string>();
    const showBgColor = () => {
        setColor("#3F4352");
    }

    const hideBgColor = () => {
        setColor('#1E212B'); // on remet la couleur en gris
    }

  return (
    <div className="exp h-screen px-4 md:px-12 xl:px-16 flex items-center just-fy-center">
      <Accordion className="w-full" allowZeroExpanded>
        {experiences.map((item) => (
          <AccordionItem key={item.id} onMouseEnter={showBgColor} onMouseLeave={hideBgColor}>
            <AccordionItemHeading className="mb-6" >
              <AccordionItemButton className="flex py-3 rounded-md px-2 justify-between" 
              onClick={showBgColor} style={{backgroundColor: color}}>
                <h2>{item.name}</h2>
                <p>{item.describe}</p>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <ul>
                {item.tasks.map((elm, i) => (
                  <li
                    className="flex items-center mb-4 gap-4"
                    key={"task-elm-" + i}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-3 h-3 list"
                    >
                      <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                    </svg>
                    <p>{elm}</p>
                  </li>
                ))}
              </ul>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default Experience
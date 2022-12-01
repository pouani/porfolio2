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

  return (
    <div className="exp overflow-x-hidden mb-9 md:mb-0 mt-24 md:mt-14 md:m-auto md:px-12 xl:px-16 px-3 md:py-12 flex flex-col justify-center">
      <h2 className="flex items-center gap-2 ">
        <span className="h2">Expériences professionnelles</span>
        <hr className="w-1/2 hr mt-1 hidden md:block" />
      </h2>
      <br />
      <Accordion 
        className="w-full border px-1 md:px-4 py-6 rounded-md"
        allowZeroExpanded
      >
        {experiences.map((item) => (
          <AccordionItem key={item.id}>
            <AccordionItemHeading className="mb-6">
              <AccordionItemButton
                className="overA flex py-3 rounded-md px-2 justify-between"
                onClick={showBgColor}
                style={{ backgroundColor: color }}
              >
                <h2 className="title-work">{item.name}</h2>
                <p className='flex gap-2'>{item.describe}<span><i className="fa-sharp fa-solid fa-chevron-down"></i></span></p>
                
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
      <div className="svg svg-bottom w-full overflow-x-hidden">
            <svg width="1124" height="264" viewBox="0 0 1124 264" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="-43" cy="419" r="374.5" stroke="#3F4352" stroke-width="55"/>
                <circle cx="-26.5" cy="418.5" r="391" stroke="#2F3343" stroke-width="55"/>
                <circle cx="-58.5" cy="403.5" r="359" stroke="#3F4352" stroke-width="55"/>
                <circle cx="689" cy="419" r="374.5" stroke="#2F3343" stroke-width="55"/>
                <circle cx="705.5" cy="418.5" r="391" stroke="#2F3343" stroke-width="55"/>
                <circle cx="673.5" cy="403.5" r="359" stroke="#3F4352" stroke-width="55"/>
            </svg>
        </div>
    </div>
  );
}

export default Experience
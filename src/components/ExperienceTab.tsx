import React, { FunctionComponent } from 'react'
import Experiences from '../models/Experience';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import 'react-tabs/style/react-tabs.css';

type Props = {
    experience: Experiences
}

const ExperienceTab: FunctionComponent<Props> = ({experience}) => {
  return (
    <div>
        <Tabs className="">
            <TabList className="name-card">
                <Tab>{experience.name}</Tab>
            </TabList>
            {experience.tasks.map(task => (
                            <TabPanel className="" key={task}>{task}</TabPanel>
                        ))}
        </Tabs>
    </div>
  )
}

export default ExperienceTab
import React from 'react';
import '@zendeskgarden/react-tabs/dist/styles.css'

import { Tabs, TabPanel} from '@zendeskgarden/react-tabs'

const tabs = ['Info', 'Experience', 'Education'];

const Resume = () => (
  <div className="resume" >
    <Tabs vertical>
      <TabPanel label={tabs[0]} key={tabs[0]}>
        <pre>
          <code>
            Hello, my name is Theodore Vixay.
          </code>
        </pre>
      </TabPanel>
      <TabPanel label={tabs[1]} key={tabs[1]}>
        <div>
          <div className="resume-company">
            NIKE, INC.
          </div>
            <p className="resume-2rem">
              Position: SW QA Engineer
            </p>
        </div>
      </TabPanel>
      <TabPanel label={tabs[2]} key={tabs[2]}>
        <div>
          <div className="resume-school">
            Portland State University
          </div>
          <p>
            Computer Science Graduate Student
            <p className="resume-2rem">
              Expected Graduate date: Summer 2020
            </p>
          </p>
        </div>
      </TabPanel>
    </Tabs>
  </div>
);

export default Resume;
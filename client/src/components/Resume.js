import React from 'react';
// Look into Material-UI or react.semantic-ui
import '@zendeskgarden/react-tabs/dist/styles.css'

import { Tabs, TabPanel} from '@zendeskgarden/react-tabs'
import Header from '../components/Header';

const tabs = ['Info', 'Experience', 'Education'];

const Resume = () => (
  <div>
    <Header />
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
                <strong>Position:</strong> SW QA Engineer
              </p>
              <p className="resume-2rem">
                <strong>Languages:</strong> Javascript and Java
              </p>
              <p className="resume-2rem">
                <strong>Frameworks:</strong> React, NodeJS, Spring
              </p>
              <p className="resume-2rem">
                <strong>Technologies:</strong> Jenkins and AWS
              </p>
          </div>
        </TabPanel>
        <TabPanel label={tabs[2]} key={tabs[2]}>
          <div>
            <div className="resume-school">
              Portland State University
            </div>
            <div className="resume-1rem">
              Computer Science Graduate Student
              <p className="resume-2rem">
                Expected Graduate date: End of Spring 2020
              </p>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  </div>
);

export default Resume;
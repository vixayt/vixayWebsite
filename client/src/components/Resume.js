import React from 'react';
import pdf from '../static/vixayResume.pdf';

const Resume = () => (
  <div className="resume" >
    <embed src={pdf} width="760px" height="1030px" />
  </div>
)

export default Resume;
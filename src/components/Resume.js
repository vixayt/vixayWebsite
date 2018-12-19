import React from 'react';
import pdf from '../static/vixayResume.pdf';

const Resume = () => (
  <embed src={pdf} width="760px" height="983px" />
)

export default Resume;
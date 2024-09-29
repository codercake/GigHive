import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import jobService from '../../services/jobService';
import styled from 'styled-components';

const JobDetail = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJob = async () => {
      const jobData = await jobService.getJobById(id);
      setJob(jobData);
    };
    fetchJob();
  }, [id]);

  const handleApplyClick = () => {
    navigate(`/jobs/${id}/apply`);  
  }; 

  if (!job) return <div>Loading...</div>;

  return (
    <JobDetailContainer>
      <JobDetailHeader>{job.title}</JobDetailHeader>

      <JobSection>
        <CompanyInfo>
          <p><strong>Company:</strong> {job.company}</p>
          <p><strong>Location:</strong> {job.location}</p>
          <p><strong>Salary:</strong> {job.salary}</p>
        </CompanyInfo>
        <ApplyButton onClick={handleApplyClick}>Apply Now</ApplyButton> 
      </JobSection>

      <Description>{job.description}</Description>
    </JobDetailContainer>
  );
};

const JobDetailContainer = styled.div`
  padding: 30px; /* Increased padding */
  max-width: 1000px; /* Increased width for more content space */
  margin: 0 auto;
`;

const JobDetailHeader = styled.h1`
  font-size: 3rem; /* Increased font size */
  font-weight: bold; /* Make header more prominent */
  margin-bottom: 30px; /* Increased margin */
`;

const JobSection = styled.div`
  margin-bottom: 30px; /* Increased margin for better spacing */
`;

const CompanyInfo = styled.div`
  font-size: 1.5rem; /* Increased font size for company info */
  line-height: 1.8; /* Increased line height for better readability */
  margin-bottom: 15px; /* Slightly increased margin */
`;

const ApplyButton = styled.button`
  padding: 15px 30px; /* Increased padding for a larger button */
  background-color: #4b0082; /* Dark purple */
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.25rem; /* Larger font size for button */
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.2s ease; /* Smooth transition effect */
  
  &:hover {
    background-color: #5a00a3; /* Lighter shade of purple on hover */
    transform: scale(1.05); /* Slightly enlarge the button on hover */
  }

  &:active {
    background-color: #3e0066; /* Darker purple when active */
    transform: scale(0.98); /* Button shrinks slightly when clicked */
  }
`;

const Description = styled.p`
  font-size: 1.5rem; /* Increased font size for description */
  line-height: 1.75; /* Better line height for readability */
  margin-top: 20px;
`;

export default JobDetail;

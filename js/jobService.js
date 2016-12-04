angular.module('riskMatch')
.service('jobService', function() {
  this.jobs =
  [
    {
      id: 1,
      name: 'Junior Technical Analyst',
      description: 'In this role you will be the working with CTO, dev team, and the business team, helping our company to deliver more and faster:',
      responsilbilities: ['Work with the Product Owner (CEO) and the Client Support team to learn about new requirements', 'Brainstorm possible ways to implement requirements and solve problems with our distributed development team and CTO', 'Develop technical specification as the primary way to define the exact behavior and internal logic of the platform to address new requirements', 'Once requirements and the desired way of solving them are identified, create tickets for the development team and work with the development team lead on scheduling and status updates'],
      requirements: ['Absolutely required: ability to clearly communicate in writing (technical specification) using text and appropriate illustrations such as diagrams (draw.io) and tables', 'Absolutely required: analytical mindset', 'Absolutely required: fast thinking', 'Some hands-on experience with SQL is a plus', 'Some hands-on experience with java/groovy is a plus'],
      about: "RiskMatch is the largest independent Insurance Platform for Brokers, Agents and Insurers. The RiskMatch® patented platform delivers portfolio management, placement solutions, risk benchmarking and other analytics. Using the RiskMatch platform, clients gain operational efficiency, enhanced growth opportunities and better client and carrier relationships. RiskMatch enables brokers to manage their entire client and carrier portfolios in one integrated platform.",
      how: "This is a unique opportunity to play a critical role in a changing and very complex industry. Join us and discover a dynamic work environment built around a commitment to continuous innovation and the drive to exceed demanding expectations every day. Send your resume to careers@riskmatch.com"
    },
    {
      id: 2,
      name: 'Data Analyst',
      description: 'Do you have an aptitude for data? Do you embrace technology? Are you comfortable with numbers? If yes, yes, and yes, we are looking for a Data Analyst to help with the onboarding of broker insurance data into the RiskMatch® platform. WE ARE GROWING! We are here to revolutionize the next big leap in the insurance industry, fusing design, data and intelligence to solve inefficiencies in the industry. We’re a technology startup based in Greenwich, CT, and are looking for motivated, local candidates to help change this industry.',
      responsilbilities: ['Support Data Integration Analysts and other team members in the onboarding of broker data.', 'Perform analysis and investigational work.', 'Using SQL and Groovy, migrate exposure data from broker feed into the RiskMatch platform.', 'Perform Broker Data QA on the RiskMatch platform and report findings.', 'Troubleshoot and document data issues, communicate and discuss with internal RiskMatch teams for resolution.'],
      requirements: ['2+ years of data reporting experience.', '2+ years of SQL experience.', 'Hands-on experience with Groovy, or any other scripting language is a plus.', 'Property & Casualty Insurance experience preferred.', 'Experience working with Agency Management Systems such as EPIC, Sagitta, AMS360, Vision, TAM is a huge plus.', 'If you have not written and executed a SQL query, or have 2 of the 5 requirements listed above – stop here.'],
      about: "RiskMatch is the largest independent Insurance Platform for Brokers, Agents and Insurers. The RiskMatch® patented platform delivers portfolio management, placement solutions, risk benchmarking and other analytics. Using the RiskMatch platform, clients gain operational efficiency, enhanced growth opportunities and better client and carrier relationships. RiskMatch enables brokers to manage their entire client and carrier portfolios in one integrated platform.",
      how: "This is an absolutely unique opportunity to play a critical role in changing a very complex industry. Join us and discover a dynamic work environment built around a commitment to continuous innovation and the drive to exceed demanding expectations every day. This position is based in Greenwich, CT. Local candidates only, please. Send your resume to careers@riskmatch.com"
    },
    {
      id: 3,
      name: 'Client Engagement Manager',
      description: 'If you have client management experience in the insurance industry and want to move to the front lines of how data & analytics are reshaping the future of insurance….we need to talk with you! RiskMatch Client Engagement Managers will partner with and ensure the long-term success of our customers. The primary role will be to proactively develop deep relationships with a portfolio of assigned customers, connecting with key business executives and stakeholders. Liaise between customers and cross-functional internal teams to ensure the development of analytics and successful delivery of RiskMatch solutions according to customer needs. Coordinate and take ultimate responsibility for the delivery of RiskMatch services to the client. Ensure client engagement (deployment and usage), training, and retention of the customer.',
      responsilbilities: ['Operate as the lead point of contact for any and all matters specific to your customers','Build and maintain strong, long-lasting customer relationships and develop a trusted advisor relationship with key customer stakeholders and executive sponsors', 'Deploy and train users on how to interpret and use analytics for their benefit', 'Ensure weekly and frequent usage of the RiskMatch platform', 'Ensure the timely and successful delivery of our solutions for customer needs and objectives', 'Communicate clearly the progress of monthly/quarterly initiatives to internal and external stakeholders', 'Track key account metrics (users, usage etc)', 'Identify and grow opportunities within territory and collaborate with sales teams to ensure growth attainment', 'Assist with high severity requests or issue escalations as needed'],
      requirements: ['10+ years of account management or other relevant experience in the insurance industry', 'Demonstrated ability to communicate, present and influence credibly and effectively at all levels of the organization, including executive and C-level', 'Ability to multi-task and willingness to support the rest of the organization', 'Experience in delivering client-focused solutions based on customer needs', 'Proven ability to manage multiple projects at a time while paying strict attention to detail', 'Excellent listening, negotiation, training and presentation skills', 'BA/BS degree or equivalent'],
      about: "We are an analytics firm that delivers a suite of web-based solutions for insurance brokers and underwriters throughout the U.S. Our patented platform delivers an array of portfolio management, analytic and data management services designed to enable brokers and underwriters to enhance performance, reduce costs, facilitate growth, and improve their client service capabilities.",
      how: "Candidates must have a strong work ethic, the ability to problem-solve, and must be able to learn quickly and adapt to any situation. This is an absolutely unique opportunity to play a critical role in changing a very complex industry. Join us and discover a dynamic work environment built around a commitment to continuous innovation and the drive to exceed demanding expectations every day. If interested, send your resume to careers@riskmatch.com",
    },

    {
      id: 4,
      name: 'Technology Training & Development Specialist',
      description: 'If building an early stage technology company excites you and you are passionate about training and developing users on data & analytics – we want you! RiskMatch is the fastest growing technology platform in the insurance industry. We offer customized data & analytics to insurance carriers and brokers – which enables them to easily identify trends, leverage insights, understand carrier appetite, and assess underwriter experience for all classes of insurance risk. RiskMatch is seeking an experienced Training & Development Specialist to work with clients and prospects to maximize the value of the platform. The successful candidate will conduct web-based demonstrations for leaders of insurance company and broker organizations that have expressed an interest in the platform. In addition, the person will lead web-based and in-person training sessions across the RiskMatch client base to promote and highlight the value RiskMatch delivers to clients. The position will report directly to the Chief Client Engagement Officer of RiskMatch.',
      responsilbilities: ['Maintain an understanding of current insurance industry trends.', 'Stay abreast of changes in the functionality of the RiskMatch platform and the value that it generates for various user groups.', 'Conduct 45-60 minute web-based platform demonstrations for potential clients, and work with the sales leadership teams to continuously refine and improve the platform demonstration process.', 'Work with the CEM Leader to develop an overall RiskMatch User Training Program (UTP). This will include conducting appropriate needs analysis across user groups, helping set specifications, assisting in the design or refinement of learning modules, and assisting the CEM Leader in the process of scoping and developing elements of the training program that will be web-based.', 'Facilitate a schedule of web-based and face-to-face user-based training sessions for new and existing clients (as defined in the UTP).', 'Work with the CEM Leader to monitor the effectiveness of training as well as the adoption and usage of learned tools and practices.'],
      requirements: ['A minimum of five years experience in a training and development, client service, distribution, or other pertinent role in the insurance/risk management industry. Please do not apply if you don’t meet this requirement.','Proven experience in designing and facilitating both webinar-based and face-to-face training sessions. Please do not apply if you don’t meet this requirement.','Experience in working with Agency Management Systems.','Degree in Education, Risk Management, Communications, or equivalent.', 'Strong attention to detail.','Proficiency with technology tools such as PowerPoint, Excel, and Word. Ability and willingness to keep up with new forms of communication, and the latest technology tools.','RiskMatch is headquartered in Greenwich, CT – location is flexible','Position requires up to 25% travel.'],
      about: "RiskMatch is the largest independent Insurance Platform for Brokers, Agents and Insurers. The RiskMatch® patented platform delivers portfolio management, placement solutions, risk benchmarking and other analytics. Using the RiskMatch platform, clients gain operational efficiency, enhanced growth opportunities and better client and carrier relationships. RiskMatch enables brokers to manage their entire client and carrier portfolios in one integrated platform.",
      how: "This is an absolutely unique opportunity to play a critical role in changing a very complex industry. Join us and discover a dynamic work environment built around a commitment to continuous innovation and the drive to exceed demanding expectations every day. Send your resume to careers@riskmatch.com"
    },
  ]
})

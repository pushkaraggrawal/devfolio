module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://elastic-meninsky-aa7c74.netlify.app/`,
    // Your Name
    name: 'Pushkar Aggrawal   ',
    // Main Site Title
    title: `Pushkar Aggrawal | Programmer and Machine Learning Researcher`,
    // Description that goes under your name in main bio
    description: `Always willing to learn more. Enthusiastic programmer and researcher of Machine Learning from
Reinforcement Learning to Computer Vision`,
    // Optional: Twitter account handle
    
    // Optional: Github account URL
    github: `https://github.com/pushkaraggrawal`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/pushkar-aggrawal-739361175/`,
    // Content of the About Me section
    about: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus perferendis porro cumque ea error ab voluptatem. Temporibus adipisci exercitationem similique itaque quibusdam laudantium, qui molestiae quas, aut amet animi id.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Screening of Chest X-Rays for COVID using AI',
        description:
          'Summer Research Intern @ Bhaskaracharya Institute for Space Applications and Geoinformatics (BISAG),Working on a real life problem, with a strong constraint onavailability of healthy data. Screening of Chest X-Rays for COVID using AI. Thorough examination of current datasets to minimize bias, multiple iterations of training of various models in varied hyper-parameters. Applied techniques like data augmentation and semantic segmentation. Testing through CAM analysis and various numerical analysis techniques. Final GUI application using Flask',
      },
      {
        name: 'Multimodal Biometrics',
        description:
          'Research @ Department of Electrical & Electronics Engineering, BITS Pilani.Working on fusion of multiple modalities such as ear and fingerprints for a robust biometric model using using techniques such as Siamese Networks and Auto-Encoders.
        ',
      },
      {
        name: 'Applications of Federated Learning in Healthcare',
        description:
          'Research @ Disruptive Technologies Lab, BITS Pilani. Application of cGANs to augment dataset in a setting where data is sparse in features such as medical tests, prescriptions etc. Further application of blockchain based decentralized learning using PySyft and Etherium frameworks. Currently under work.',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Bhaskaracharya Institute for Space Applications and Geoinformatics (BISAG)',
        description: 'Summer Research Intern, 05/2020 - 07/2020',
        },
      {
        name: 'Disruptive Technologies Lab, BITS Pilani',
        description: 'Student Researcher, 01/2021 - Present,',
        
      },
      
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages',
        description:
          'Python, MATLAB, Java, Javasrcipt',
      },
      {
        name: 'ML Frameworks',
        description: 'Pytorch, Keras',
      },
      {
        name: 'Other',
        description:
          'Data Structures and Algorithms, Object Orented Programming, Operaing Systems, Effective Communication, Research and Strategy, Teamwork, Soft Skills',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};

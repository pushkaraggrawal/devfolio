module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://pushkar-portfolio.netlify.app/`,
    // Your Name
    name: 'Pushkar Aggrawal',
    // Main Site Title
    title: `Pushkar Aggrawal | Programmer and Machine Learning Researcher`,
    // Description that goes under your name in main bio
    description: `Highly motivated individual who aspires to learn as much as possible in a lifetime. Enthusiastic programmer and researcher of all fields of Machine Learning from Reinforcement Learning, Natural Language Processing to Computer Vision.`,
    // Optional: Twitter account handle
    
    // Optional: Github account URL
    github: `https://github.com/pushkaraggrawal`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/pushkar-aggrawal-739361175/`,
    // Content of the About Me section
    about: `A highly motivated student in my third year of engineering @ BITS Pilani, Pilani campus. Pursuing B.E. Electrical and Electronics and Minor in Data Science. Looking for internship and thesis opportunities in the fields of Machine Learning. Drop a mail @ 20180431@pilani.bits-pilani.ac.in or @pushkaraggrawal@gmail.com for the same. Stay safe 😊`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Screening of Chest X-Rays for COVID using AI',
        description:
          'Working on a real life problem, with a strong constraint onavailability of healthy data. Screening of Chest X-Rays for COVID using AI. Thorough examination of current datasets to minimize bias, multiple iterations of training of various models in varied hyper-parameters. Applied techniques like data augmentation and semantic segmentation. Testing through CAM analysis and various numerical analysis techniques. Final GUI application using Flask',
        link: 'https://github.com/pushkaraggrawal/COVID-Net',
      },
      
      {
        name: 'Explainable AI in Background Hallucination GAN',
        description:
          'Using DeepSHAP to mask gradient updates to the generator creating an information rich feedback. Building an image generating model which can be trained on smaller datasets of labeled maps of bounding boxes.',
        link: 'https://github.com/pushkaraggrawal/xAI-BachGAN',
      },
        
      {
        name: 'Multimodal Biometrics',
        description:
          'Working on fusion of multiple modalities such as ear and fingerprints for a robust biometric model using using techniques such as Siamese Networks and Auto-Encoders.',
        link: 'https://github.com/pushkaraggrawal/COVID-Net',
      },
      {
        name: 'Applications of Federated Learning in Healthcare',
        description:
          'Application of cGANs to augment dataset in a setting where data is sparse in features such as medical tests, prescriptions etc. Further application of blockchain based decentralized learning using PySyft and Etherium frameworks. Currently under work.',
        link: 'https://github.com/pushkaraggrawal/COVID-Net',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Radio Control Club',
        description: 'Core Technical Member, 07/2018 - 10/2019',
        link: 'https://www.facebook.com/profile.php?id=100012254854551',
        },    
      {
        name: 'Bhaskaracharya Institute for Space Applications and Geoinformatics (BISAG)',
        description: 'Summer Research Intern, 05/2020 - 07/2020',
        link: 'https://www.facebook.com/profile.php?id=100012254854551',
        },
      {
        name: 'Department of Electrical and Electronics, BITS Pilani',
        description: 'Student Researcher, 06/2020 - 12/2020',
        link: 'https://www.facebook.com/profile.php?id=100012254854551',
        },
      {
        name: 'Disruptive Technologies Lab, BITS Pilani',
        description: 'Student Researcher, 01/2021 - Present',
        link: 'https://www.facebook.com/profile.php?id=100012254854551',
        
      },
      {
        name: 'Earth Rover',
        description: 'Reasearch Intern, 02/2021 - Present',
        link: 'https://www.earthrover.farm/',
        
      },
      
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages',
        description:
          'Python, C++, MATLAB, Java, Javasrcipt',
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

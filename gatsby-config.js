module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://pushkar-portfolio.netlify.app/`,
    // Your Name
    name: 'Pushkar Aggrawal',
    // Main Site Title
    title: `Pushkar Aggrawal | Applied AI and Software Engineering`,
    // Description that goes under your name in main bio
    description: `Highly motivated individual who aspires to learn as much as possible in a lifetime. Enthusiastic programmer and researcher of all fields of Machine Learning from Reinforcement Learning, Natural Language Processing to Computer Vision.`,
    // Optional: Twitter account handle
    
    // Optional: Github account URL
    github: `https://github.com/pushkaraggrawal`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/pushkar-aggrawal-739361175/`,
    // Content of the About Me section
    about: `Engineer in Applied AI with a B.E. in Electrical & Electronics from BITS Pilani. Currently working as a Software Engineer in Search at Myntra, focusing on search query understanding, big data, and innovative solutions using AI.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Multiagent Framework for Survey Assistants',
        description: `Developed a multiagent framework for creating engaging and controllable survey assistants, presented at HasGeek Hackathon.`,
        link: `https://hasgeek.com/hack5/open-source-ai-hackathon/sub/knowledge-preservation-Ar7w3Nxtx5M2VWcwasdaGh`,
      },
      {
        name: 'Crop Advisory System for Farmers',
        description: `Developed a crop advisory system for farmers, sponsored by the Department of Biotechnology, New Delhi, with a grant of 50 Lakhs.`,
        link: `https://github.com/pushkaraggrawal/CropAdvisory`,
      },
      {
        name: 'Screening of Chest X-Rays for COVID using AI',
        description: `Exploratory data analysis, data augmentation, semantic segmentation, image processing, and training VGG-16 convolutional neural networks. Final model deployed with GUI application using Flask.`,
        link: 'https://github.com/pushkaraggrawal/COVID-Net',
      },
      {
        name: 'Hybrid Batteries using combination of Nuclear Batteries and Lithium Polymer Batteries',
        description: `Overcoming challenges of nuclear batteries for electronic devices. Published in the Biology, Engineering, Medicine and Science Reports (BEMS) at the paper presentation event of APOGEE 2021.`,
        link: 'https://www.researchgate.net/publication/351869941_Screening_of_Chest_X-Rays_for_COVID_using_AI',
      },
      {
        name: 'Explainable AI in Background Hallucination GAN',
        description: `Using DeepSHAP to mask gradient updates to the generator, creating an information-rich feedback loop. Built an image generating model trained on smaller datasets of labeled maps of bounding boxes.`,
        link: 'https://github.com/pushkaraggrawal/xAI-BachGAN',
      },
      {
        name: 'Multimodal Biometrics',
        description: `Fusing multiple modalities such as ear and fingerprints for a robust biometric model using techniques like Siamese Networks and Auto-Encoders.`,
        link: 'https://github.com/pushkaraggrawal/COVID-Net',
      },
      {
        name: 'Applications of Federated Learning in Healthcare',
        description: `Using techniques in explainable AI to extract knowledge and feature importance using FL SHAP in vertical FL settings for healthcare. Currently working on mortality rates and diabetes as labels.`,
        link: 'https://github.com/pushkaraggrawal/COVID-Net',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Myntra Designs Pvt. Limited, Bengaluru, Karnataka, India',
        description: `Software Engineer in Search, June 2022 - Present. Key contributions include:
        - Worked on search query understanding/execution, big data, autosuggest, recommendations, and innovation for millions of DAU.
        - Successfully fine-tuned and deployed DeBERTa V3 XS model for intent classification in search using ML Ops, leading to a decrease in query abandonment.
        - Optimized and benchmarked Triton GPU inference for category prediction on Nvidia T4 using dynamic batching and multiple instances, yielding a 45x reduction in cloud costs.
        - Enhanced searches for beauty products and brand discoverability, resulting in a +30bps RPU for the category.
        - Onboarded ~100 categories across kitchen, dining, and furniture to search query understanding, managing stakeholders smoothly.
        - Migrated category prediction training pipeline to Nvidia V100, reducing model turnaround time by 3x.
        - Developed dynamic personalization slots and optimizations in autosuggest, leading to a +20bps RPU and +42bps in engagement.
        - Implemented differential pricing functionality in search for metro and non-metro cities.
        - Productionized EXAM (AAAI, 2019) model for multilabel text classification of search queries, hosted in Kubernetes with vertical load testing.
        - Generated recommendations for “Related Searches” using collaborative filtering and query refinement algorithms on big data with PySpark.
        - Pitched and developed MVP for MyFashionGPT feature, integrating OpenAI Azure ChatGPT API with search, resulting in a rollout in 5 weeks and press releases.
        - Pitched and developed MVP for “Room Inspiration” using Stable Diffusion and “Universal-Multilingual App Voice Assistant” based on Retrieval Augmented Generation, both recognized in hackathons.
        - Pitched and developed MVP for feature contextual search from the product page, recognized in a hackathon within the first month of joining.
        - Led agile development lifecycle using BitBucket, Jira, and Confluence, supporting BAU/HRD for search for ~3.5 months.
        - Initiated, led, and delivered research paper reading sessions, involved in product requirements and grooming.`,
      },
      {
        name: 'Vectorial AI, Bay Area',
        description: `AI Engineering Consultant. Prototyped a self-evolving general multi-agent framework with Harvard-backed and CMU alum founders.`,
      },
      {
        name: 'Forge Fitness, Fitness AI, Miami, Florida, USA',
        description: `AI Engineer, later Consultant. Designed and developed algorithms to sense and quantify fitness workout signals (Patent pending).`,
      },
      {
        name: 'Amikus AI, Bengaluru, Karnataka, India',
        description: `Machine Learning Engineer, January 2022 - April 2022. Built AI-enabled review of legal contracts by modeling clause detection using XLNet (0.9 F1 score). Contributed to seed funding of $116,700.`,
      },
      {
        name: 'Samsung R&D Institute, Bangalore, Bengaluru, Karnataka, India',
        description: `R&D Intern, July 2021 - December 2021. Worked with Intelligent Apps Group, OnDevice AI Team (Offered full-time Advanced Developer Role).`,
      },
      {
        name: 'Bhaskaracharya Institute for Space Applications and Geoinformatics, Gandhinagar, Gujarat, India',
        description: `Summer Research Intern, May 2020 - July 2020. Conducted exploratory data analysis, data augmentation, semantic segmentation, and image processing. Trained VGG-16 CNN for COVID chest X-ray screening, model released.`,
      },
      {
        name: 'Department of Electrical and Electronics, BITS Pilani',
        description: `Student Researcher under Prof. Pawan K. Ajmera, June 2020 - December 2020.`,
      },
      {
        name: 'Disruptive Technologies Lab, BITS Pilani',
        description: `Student Researcher under Prof. Navneet Goyal, January 2021 - Present.`,
      },
      {
        name: 'IBM, Qiskit',
        description: `Quantum Machine Learning Summer School. Learned techniques in Quantum Circuits, Variational Approximation, Max Cut problem as Quadratic Unrestricted Binary Optimization, Quantum Kernels, Support Vectors.`,
      },
      {
        name: 'IEEE BITS Pilani Student Chapter, Executive and Public Relations, Machine Learning Lead',
        description: `Developed and adapted a RL environment for "AI Robosoccer" at BITS APOGEE 2021. Prepared a technical newsletter and handled miscellaneous roles in management and logistics.`,
      },
      {
        name: 'Radio Control Club',
        description: `Core Technical Member, July 2018 - October 2019.`,
      },
      {
        name: 'Team BITS',
        description: `Autonomous Driving Lead, January 2020 - Present.`,
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages',
        description: 'Python, C++, Java, SQL',
      },
      {
        name: 'Technologies',
        description: 'Microservices, Spring Boot, Apache Solr, Redis, Big Data, Apache Spark, Pytorch, HuggingFace, AWS ML, ML Ops, LangChain, LangGraph, Computer Vision, Pandas, Distributed Systems, Apache Kafka, REST, CI/CD, FastAPI',
      },
      {
        name: 'Tools',
        description: 'Jira, Git, Kubernetes, BitBucket, Confluence, Nvidia T4, Nvidia V100, Triton GPU Inference',
      },
      {
        name: 'Areas of Expertise',
        description: 'Natural Language Processing, Backend Development, Technical Documentation, LLMs, Stable Diffusion, GPU Inference, Networks',
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

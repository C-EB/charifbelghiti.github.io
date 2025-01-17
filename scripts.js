document.addEventListener('DOMContentLoaded', () => {
  // Check the saved mode in localStorage
  if (localStorage.getItem('mode') === 'dark') {
     document.body.classList.add('dark-mode');
  }


  // Show welcome screen
  const welcomeScreen = document.getElementById('welcome-screen');
  setTimeout(() => {
    welcomeScreen.classList.add('hidden');
  }, 3000); // Show welcome screen for 3 seconds

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Load project items dynamically
  const projects = [

    {
      image: 'assets/detected_plate.png',
      title: 'Moroccan License Plate Detection and Recognition',
      description: 'This project detects and recognizes Moroccan vehicle license plates using the YOLOv3 model and Optical Character Recognition (OCR). The implementation is done in Python using OpenCV for image processing and Pytesseract for OCR. The system identifies license plates and interprets the characters, including Arabic letters and numbers.',
      link: 'https://c-eb.github.io/Moroccan_License_Plate_Detection_and_Recognition/'
    },
    {
      image: 'assets/Exec_Dashboard.png',
      title: 'Sales data analysis',
      description: 'The objective of this project is to analyze sales data using Power BI. The analysis provides insights into sales performance, customer demographics, product categories, and returns, enabling better business decisions.',
      link: 'https://c-eb.github.io/sales_data_analysis/'
    },
    {
      image: 'assets/kaggle_to_powerbi.gif',
      title: 'Top UK Youtubers',
      description: 'create a dashboard that provides insights into the top UK YouTubers in 2024',
      link: 'https://c-eb.github.io/top_uk_youtubrs_2024/'
    },

	  
    {
      image: 'assets/password.jpg',
      title: 'Predict password strength',
      description: 'Predict password strength (strong, medium, weak) based on data',
      link: 'https://c-eb.github.io/Predict_password_strength/'
    },
	{
      image: 'assets/spam.jpg',
      title: 'Spam Classifier',
      description: 'Build a spam classifier to distinguish between spam and ham',
      link: 'https://c-eb.github.io/Spam_classifier/'
    },
	{
      image: 'assets/house.jpg',
      title: 'Prediction of median house values in California districts',
      description: 'Trying various machine learning models to predict the median house values in California districts and comparing their performance to get the best results.',
      link: 'https://c-eb.github.io/prediction_of_median_house_values_in_Californian_districts/'
    },
	{
      image: 'assets/talend.jpg',
      title: 'Talend data integration project commercial data management ',
      description: 'The project comprised two distinct parts: <br>Part 1 Data Ingestion and Processing: <br>This phase involved setting up a PostgreSQL database (COM_INGESTION_DB) and developing SQL scripts for schema creation, table creation, and data insertion. I meticulously orchestrated the ingestion process, ensuring seamless integration of flat files into the database using Talend powerful data integration capabilities.<br>Part 2 Data Warehousing and Reporting: <br> In this phase, I expanded the PostgreSQL database to incorporate a data warehouse (VENTE_DWH) for advanced analytics and reporting purposes.',
      link: 'https://c-eb.github.io/talend-data-integration-project-commercial-data-management/'
    },
	{
      image: 'assets/porshe.jpg',
      title: 'Moroccan vehicle registration plates detection',
      description: 'A Python code for Moroccan car image processing and license plate detection using a YOLO v4 deep learning model.',
      link: 'https://c-eb.github.io/moroccan_vehicle_registration_plates_detection/'
    },
    {
      image: 'assets/opencv.jpg',
      title: 'Object detection with opencv',
      description: 'A Python code for object detection with OpenCV.',
      link: 'https://github.com/charifELBELGHITI/object_detection_opencv/blob/main/object_detection_with_opencv.py'
    },
    {
      image: 'assets/picture-to-text.jpg',
      title: 'Image Arabic and English text extraction',
      description: 'A Python code to extract Arabic and English text from images.',
      link: 'https://github.com/charifELBELGHITI/Image_arabic_english_text_extraction/blob/main/Image_arabic_english_text_extraction.ipynb'
    },
    {
      image: 'assets/opencv.jpg',
      title: 'Face recognition with opencv',
      description: 'Image and video face recognition with OpenCV.',
      link: 'https://github.com/charifELBELGHITI/face_recognition_opencv/tree/main'
    },
    {
      image: 'assets/mediapipe face detection.png',
      title: 'Face recognition with mediapipe',
      description: 'Face image and video recognition with MediaPipe.',
      link: 'https://github.com/charifELBELGHITI/face_recognition_mediapipe'
    },
    {
      image: 'assets/jumia.jpg',
      title: 'Web scraping from jumia',
      description: 'A web scraper to scrape products from the Jumia website.',
      link: 'https://github.com/charifELBELGHITI/web_scraping/blob/main/web_scraping_jumia.py'
    },
    // Add more projects as needed
  ];

  const projectGrid = document.getElementById('project-grid');
projects.forEach(project => {
  const projectItem = document.createElement('div');
  projectItem.classList.add('project-item');

  projectItem.innerHTML = `
    <img src="${project.image}" alt="${project.title}">
    <h3>${project.title}</h3>
    <p style="display: none;">${project.description}</p>
    <div class="project-buttons">
      <button class="toggle-description">Show Description</button>
      <button class="visit-button" onclick="window.open('${project.link}', '_blank')">Visit</button>
    </div>
  `;

  projectGrid.appendChild(projectItem);
});

  // Dark mode toggle
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  const darkModeIcon = document.getElementById('dark-mode-icon');

  const updateDarkModeIcon = () => {
  if (document.body.classList.contains('dark-mode')) {
    darkModeIcon.classList.remove('fa-moon');
    darkModeIcon.classList.add('fa-sun');
    localStorage.setItem('mode', 'dark'); // Save mode
  } else {
    darkModeIcon.classList.remove('fa-sun');
    darkModeIcon.classList.add('fa-moon');
    localStorage.setItem('mode', 'light'); // Save mode
  }
 };



  darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    updateDarkModeIcon();
 });


  // Set the correct initial icon
  updateDarkModeIcon();

  // Toggle project descriptions
  document.querySelectorAll('.toggle-description').forEach(button => {
    button.addEventListener('click', () => {
      const description = button.closest('.project-item').querySelector('p');
      const isHidden = description.style.display === 'none';
      description.style.display = isHidden ? 'block' : 'none';
      button.textContent = isHidden ? 'Hide Description' : 'Show Description';
    });
  });

  // Add selected class to buttons when clicked
  document.querySelectorAll('.about-text button, .project-item button').forEach(button => {
    button.addEventListener('click', () => {
      button.classList.add('selected');
      setTimeout(() => {
        button.classList.remove('selected');
      }, 1); // Remove the selected class after 1 second
    });
  });

  // Fade-in effect on scroll
  const fadeInElements = document.querySelectorAll('.fade-in');
  const checkVisibility = () => {
    const triggerBottom = window.innerHeight / 5 * 4;

    fadeInElements.forEach(element => {
      const boxTop = element.getBoundingClientRect().top;
      if (boxTop < triggerBottom) {
        element.classList.add('visible');
      } else {
        element.classList.remove('visible');
      }
    });
  };

  window.addEventListener('scroll', checkVisibility);
  checkVisibility(); // Initial check on page load

  // Scroll-to-top button
  const scrollToTopButton = document.getElementById('scroll-to-top');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      scrollToTopButton.style.display = 'block';
    } else {
      scrollToTopButton.style.display = 'none';
    }
  });

  scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Initialize particles.js for welcome screen
  particlesJS.load('particles-js', 'particles.json', function() {
    console.log('particles.js config loaded');
  });

  // Initialize particles.js for header
  particlesJS.load('particles-header', 'particles.json', function() {
    console.log('particles.js config loaded for header');
  });
  
});

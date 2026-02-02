# Personal Portfolio Website

A modern, responsive personal portfolio website built with Flask.

## Features

- **Home Page**: Introduction and overview
- **Cricket Page**: Cricket-related content
- **Quantum Computing Page**: Technical content about quantum computing
- **Contact Page**: Contact form and social media links
- **Responsive Design**: Clean, modern UI with CSS styling
- **Social Integration**: LinkedIn and GitHub links on contact page

## Tech Stack

- **Backend**: Python Flask
- **Frontend**: HTML, CSS
- **Styling**: Custom CSS with modern design principles

## Installation

1. Clone the repository
2. Create a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Run the application:
   ```bash
   python app.py
   ```
5. Open your browser to `http://127.0.0.1:5050`

## Project Structure

```
personal_web_page/
├── app.py                 # Main Flask application
├── requirements.txt       # Python dependencies
├── static/
│   └── css/
│       └── styles.css     # Main stylesheet
├── templates/
│   ├── base.html          # Base template with header/footer
│   ├── home.html          # Home page
│   ├── cricket.html       # Cricket page
│   ├── quantum.html       # Quantum computing page
│   └── contact.html       # Contact page
└── README.md             # This file
```

## Development

The application runs in debug mode by default. Make changes to the templates or CSS and the server will automatically reload.

## Author

Ghanashyam Khanal

## License

This project is open source and available under the [MIT License](LICENSE).
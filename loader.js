function render(window = window, document = document){
    alert('Hello from ' + window.location);
    if(confirm('Go to GitHub repository?')) window.location = 'https://github.com/KaMeHb-UA/start.me-enhancer';
}
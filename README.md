## About
My personal website and blog, developed from scratch using Flask for Python, Bootstrap and React.

www.adrianlee0118.com

The domain name was acquired from Google Domains.

## Directories
  - static: contains CSS styles, images used on pages, and third party scripts
    - web application directories may contain jsx files as indicated by name; these files are [transpiled using Babel from NPM into the plain JavaScript files](https://stackoverflow.com/a/61907504/12449272) in the same directories, which are the versions used with HTML pages for rendering the React components contained within
  - templates: contains all html templates, subfolder coding_solutions contains all text for Leetcode solution pages
  - home directory: contains flask backend app.py and the associated db

## Forking the Site
  - change the images in the static folder but do not change the location, unless you change the url_for()'s in /home and /blog html pages as well
  - change names or add paths to the app.py file
  - delete the db and/or make a new one and then connect it to the backend in app.py
  - modify the CV to have your own content (please don't impersonate me)
  - of course, modify the pages with your own content
  - change themes in style.css in static file

## Thanks to
  - The Flask micro web framework
  - Flask-Bootstrap
  - Facebook's React JavaScript library
  - Leetcode for public coding challenges, which the coding_solutions section is made from
  - Google for various stock images
  - Font Awesome is used for some of the social media icons

The following persons:
  - My friend Matthew Lai for his invaluable insight and advice in web development,
  - Lea Verou and the rest of the [Prism](https://prismjs.com/) team for the code block styles used in this site,
  - Stuart Langridge for [sorttable](http://www.kryogenix.org/code/browser/sorttable/) functions.

The following companies for hosting site's files:
  - The pages are hosted on [PythonAnywhere](https://www.pythonanywhere.com/)
  - Some resources are served from [Bootstrap CDN](https://www.bootstrapcdn.com/),
  - [React's CDN](https://reactjs.org/),
  - And [Cloudflare's free CDN](https://www.cloudflare.com/en-ca/).

## Pending Tasks
  - Update theme
  - Contacts page
  - New material: LeetCode, Blog
  - Add 404 pages
  - Search box for coding_solutions table
  - Add PDF resume
  - Make all LC solutions HTML safe

import View from './View.js';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  _generateMarkup() {
    // Page 1, and there are other pages
    // Page 2, and there are NO other pages
    // Last page
    // Other page
  }
}

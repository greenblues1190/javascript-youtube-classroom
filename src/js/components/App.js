import Component from '../core/Component.js';
import { useStore } from '../services/VideoService.js';
import MainPage from './MainPage/MainPage.js';
import SearchModal from './SearchModal/SearchModal.js';

export default class App extends Component {
  template() {
    const isSearchModalOpened = useStore((state) => state.isSearchModalOpened);

    return `
      <main id="main-page" class="classroom-container"></main>
      <div id="search-modal" class="modal-container ${
        isSearchModalOpened ? '' : 'hide'
      }"></div>
    `;
  }

  afterMounted() {
    new MainPage(document.querySelector('#main-page'));
    new SearchModal(document.querySelector('#search-modal'));
  }
}

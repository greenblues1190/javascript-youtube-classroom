import Component from '../../core/Component.js';
import videoService from '../../services/VideoService.js';
import VideoCardList from './VideoCardList.js';

export default class MainPage extends Component {
  template() {
    return `
      <h1 class="classroom-container__title">👩🏻‍💻 나만의 유튜브 강의실 👨🏻‍💻</h1>
      <nav class="nav">
        <button id="search-modal-button" class="button nav__button">
          🔍 검색
        </button>
      </nav>
      <ul id="saved-video-list" class="video-list"></ul>
    `;
  }

  afterMounted() {
    new VideoCardList(this.$('#saved-video-list'));
  }

  setEvent() {
    this.addEvent('click', '#search-modal-button', () => {
      videoService.toggleSearchModal();
    });
  }
}

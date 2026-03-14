export const MenuButton = () => {
  return (
    <button
      type="button"
      id="menu-open-btn"
      className="menu-btn menu-btn--open"
      aria-labelledby="menu-open-label"
    >
      <span id="menu-open-label" className="display-none">
        メニューを開く
      </span>
      <span className="menu-icon" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
      </span>
    </button>
  );
};

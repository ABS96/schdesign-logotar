const db = new DatabaseService("assets/database/database.json");

const builder = new GridBuilder({ gridClassName: "logo-library" });

const buildGrid = reszort => {
  const rows = db.getReszortByName(reszort);
  builder.build(rows);
};

const menu = new MenuHandler(buildGrid, {
  hamburgerClass: "hamburger-button",
  hiddenMenuClass: "hidden-menu",
  hamburgerButtonClass: "fa-bars",
  menuItemsClass: "menu-items"
});

const buildMenu = () => {
  const menuItems = db.getReszortNames();
  menu.addMenuItems(menuItems);
  menu.addEventListeners();
};

const init = async () => {
  await db.update();
  buildMenu();
  buildGrid("simonyi");
};

init();

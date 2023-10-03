const windowWidthValidator = () => {
  if (window.innerWidth <= 650) return true;
  else return false;
};

const renderShip = (ship) => {
  const boat = document.createElement("div");
  boat.classList.add(`ship`);
  boat.id = `${ship.getName()}`;
  boat.draggable = "true";
  //boat.dataset.name = `${ship.getName()}`;
  if (ship.getPosition() === "horizontal") {
    for (let i = 1; i <= ship.getLength(); i++) {
      const shipSubset = document.createElement("div");
      shipSubset.classList.add("shipSubset");
      shipSubset.dataset.subset = `${i}`;
      //shipSubset.dataset.mainset = `${ship.getName()}`;
      //shipSubset.dataset.mainsetLength = `${ship.getLength()}`;

      if (windowWidthValidator()) {
        shipSubset.style.cssText = `
        height:25px;
        width:25px;
      `;
      } else {
        shipSubset.style.cssText = `
        height:35px;
        width:36px;
      `;
      }
      window.addEventListener("resize", () => {
        if (windowWidthValidator()) {
          shipSubset.style.cssText = `
          height:25px;
          width:25px;
        `;
        } else {
          shipSubset.style.cssText = `
          height:35px;
          width:36px;
        `;
        }
      });

      boat.appendChild(shipSubset);
    }

    boat.classList.add("horizontal");

    if (windowWidthValidator()) {
      boat.style.width = `${ship.getLength() * 26}px`;
      boat.style.height = "25px";
    } else {
      boat.style.width = `${ship.getLength() * 36}px`;
      boat.style.height = "35px";
    }
    window.addEventListener("resize", () => {
      if (windowWidthValidator()) {
        boat.style.width = `${ship.getLength() * 26}px`;
        boat.style.height = "25px";
      } else {
        boat.style.width = `${ship.getLength() * 36}px`;
        boat.style.height = "35px";
      }
    });

    //boat.innerHTML = `<div class="shipName">${ship.getName()}</div>`;
    //boat.textContent = `${ship.getName()}`;

    boat.dataset.length = `${ship.getLength()}`;
    boat.dataset.position = `${ship.getPosition()}`;
  } else {
    boat.classList.add("vertical");
    for (let i = 1; i <= ship.getLength(); i++) {
      const shipSubset = document.createElement("div");
      shipSubset.classList.add("shipSubset");
      shipSubset.dataset.subset = `${i}`;
      //shipSubset.dataset.mainset = `${ship.getName()}`;
      //shipSubset.dataset.mainsetLength = `${ship.getLength()}`;

      if (windowWidthValidator()) {
        shipSubset.style.cssText = `
        height:26px;
        width:27px;
      `;
      } else {
        shipSubset.style.cssText = `
        height:36px;
        width:37px;
      `;
      }

      window.addEventListener("resize", () => {
        if (windowWidthValidator()) {
          shipSubset.style.cssText = `
          height:26px;
          width:27px;
        `;
        } else {
          shipSubset.style.cssText = `
          height:36px;
          width:37px;
        `;
        }
      });

      boat.appendChild(shipSubset);
    }
    if (windowWidthValidator()) {
      boat.style.height = `${ship.getLength() * 26}px`;
      boat.style.width = "25px";
    } else {
      boat.style.width = "35px";
      boat.style.height = `${ship.getLength() * 36}px`;
    }

    window.addEventListener("resize", () => {
      if (windowWidthValidator()) {
        boat.style.height = `${ship.getLength() * 26}px`;
        boat.style.width = "25px";
      } else {
        boat.style.width = "35px";
        boat.style.height = `${ship.getLength() * 36}px`;
      }
    });

    boat.dataset.position = `${ship.getPosition()}`;
    boat.dataset.length = `${ship.getLength()}`;
  }
  return boat;
};

export default renderShip;

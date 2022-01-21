//const tabButtons = Array.from(document.querySelectorAll('.tab__button'))
//const tabPanels = Array.from(document.querySelectorAll('.tabs__panel'))

const initTabs = (selector) => {
  const tabContainer = document.querySelector(`[data-tabs="${selector}"]`);
  const tabsList = tabContainer.querySelector('.tabs__list');
  const tabsButtons = tabContainer.querySelectorAll('.tabs__button');
  const tabsPanelContainer = tabContainer.querySelector('.tabs__content');
  const tabsPanels = tabContainer.querySelectorAll('.tabs__panel');

  /*tabsButtons.forEach((item, index) => {
    item.setAttribute('role', 'tab');
    item.setAttribute('tabindex', '-1');
    item.setAttribute('id', `${selector}${index + 1}`);
    item.classList.remove('tabs__button--active');
  })*/

  /*tabsPanels.forEach((item, index) => {
    item.setAttribute('role', 'tabpanel');
    item.setAttribute('tabindex', '-1');
    item.setAttribute('aria-labelledby', tabsButtons[index].id);
    item.classList.remove('tabs__panel--active');
  })*/

  tabsButtons[0].classList.add('tabs__button--active');
  tabsButtons[0].removeAttribute('tabindex');
  tabsButtons[0].setAttribute('aria-selected', 'true');
  tabsPanels[0].classList.add('tabs__panel--active');

  tabsButtons.forEach((item, index) => {
    item.addEventListener('click', (evt) => {
      //let currentTab = tabsList.querySelector('[aria-selected]');
      const value = Array.from(evt.currentTarget.id);
      const indexFromValue = value[value.length-1] - 1;
      if (evt.currentTarget !== indexFromValue) {
        tabsButtons.forEach((item, index) => {
          item.setAttribute('role', 'tab');
          item.setAttribute('tabindex', '-1');
          item.setAttribute('aria-selected', 'false ');
          item.setAttribute('id', `${selector}${index + 1}`);
          item.classList.remove('tabs__button--active');
        })
        tabsPanels.forEach((item, index) => {
          item.setAttribute('role', 'tabpanel');
          item.setAttribute('tabindex', '-1');
          item.setAttribute('aria-labelledby', tabsButtons[index].id);
          item.classList.remove('tabs__panel--active');
        })
        
        tabsButtons[indexFromValue].classList.add('tabs__button--active');
        tabsButtons[indexFromValue].removeAttribute('tabindex');
        tabsButtons[indexFromValue].setAttribute('aria-selected', 'true');
        tabsPanels[indexFromValue].setAttribute('aria-labelledby', tabsButtons[indexFromValue].id);
        console.log(tabsButtons[indexFromValue])
        console.log(tabsPanels[indexFromValue])
      }
    });
  })
}

initTabs('tab1')




/*const clearActiveClass = (element, className = 'tabs__panel--active') => {
  element.find(item => item.classList.remove(`${ className }`))
}

const setActiveClass = (element, index, className = 'tabs__panel--active') => {
  element[index].classList.add(`${ className }`)
}

const checkoutTabs = (item, index) => {
  item.addEventListener('click', () => {
    
    if (item.classList.contains('tabs__panel--active')) return
    console.log(item)
  
    clearActiveClass(tabButtons)
    clearActiveClass(tabPanels)
    
    setActiveClass(tabButtons, index)
    setActiveClass(tabPanels, index)
  })
}

tabButtons.forEach(checkoutTabs)*/
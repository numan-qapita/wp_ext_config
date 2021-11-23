import _ from 'lodash';

function component() {
    const element = document.createElement('div');

    var config;

    (async ()=>{
      config = await getConfig();
      element.innerHTML = _.join(['Hello', 'webpack', JSON.stringify(config)], ' ');
    })()

    // Lodash, now imported by this script


    return element;
  }

  async function getConfig(){
    const response = await fetch("config.json", {headers:{'Accept':'application/json'}});
    return response.json();
  }

  document.body.appendChild(component());
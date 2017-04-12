import Sayings from './../data/DataSayings';


let getItemDetailsBySlug = (dataWork, slug) => {
    let workItem = {};
    dataWork.forEach((item) => {
        if(slug !== item.slug) return;
        if(typeof item.primary != 'undefined' && item.primary !== true) return;
        
        workItem = item;
    });
    return workItem;
}

let getCatsByIds =(data, ids, getFirst=true) => {
    let cats = [];
    ids.forEach((id) => {
        data.categories.forEach((cat) => {
            if(id === cat.id) {
                cats.push(cat.name);
            } 
        });
    });
    return cats.join(', ');
}

let getRandomSaying = () => {
    return Sayings[Math.round(Math.random() * (Sayings.length-1))];
}

export  { getItemDetailsBySlug, getCatsByIds, getRandomSaying }
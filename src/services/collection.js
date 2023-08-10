const collection = [
    {
        id:"1",
        title:"AI Couse",
        description:"5-Day AI Campaign Sprint By Rich Schefren Jay Ibraham",
        link:"https://mega.nz/folder/7jBzHARL#-O7g3xXbr6D11M9AupZz5Q",
        decrypctionKey:"HaHo",
    },
    {
        id:"2",
        title:"Ecommerce Course",
        description:"Ecommerce course by Mossab Balatif",
        link:"https://mega.nz/folder/7jBzHARL#-O7g3xXbr611M9AupZz5Q"
    },
    {
        id:"4",
        title:"MS Excel",
        description:"Ecommerce course by Mossab Balatif",
        link:"https://mega.nz/folder/7jBzHARL#-O7g3xXbr611M9AupZz5Q"
    },
    {
        id:"3",
        title:"Flutter",
        description:"Ecommerce course by Mossab Balatif",
        link:"https://mega.nz/folder/7jBzHARL#-O7g3xXbr611M9AupZz5Q"
    },
    {
        id:"5",
        title:"Machine Learning",
        description:"Ecommerce course by Mossab Balatif",
        link:"https://mega.nz/folder/7jBzHARL#-O7g3xXbr611M9AupZz5Q"
    },
    {
        id:"6",
        title:"SEO Course",
        description:"Ecommerce course by Mossab Balatif",
        link:"https://mega.nz/folder/7jBzHARL#-O7g3xXbr611M9AupZz5Q"
    }
];

export function getCollection() {
    return collection;
}

export function toTitleCase(str) {
    return str.toLowerCase().replace(/(?:^|\s)\w/g, function(match) {
      return match.toUpperCase();
    });
}
 
export function getSpecificCollection(id) {
    return collection.find(c => c.id === id);
}
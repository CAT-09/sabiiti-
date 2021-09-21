function fruit(name, color, seed, price, coat) {
    this.name = name;
    this.color = color; //This  is ablue print for the objects fruit1 2 and 3
    this.seed = seed;
    this.price = price;
    this.coat = coat;
    this.taste = function(a) { //This is amethond inside object and its used to provide values that vary.
        return this.taste + ' ' + a;
    }
    this.size = function(b) {
        return this.size + ' ' + b;
    }
}
let fruit1 = new fruit('mango', 'yellow', 'cotolydonous', 2000, 'hard'); //These are the parameters or values of the properties
console.log(fruit1);
console.log(fruit1.taste('sweet'));
console.log(fruit1.size('big'));

let fruit2 = new fruit('lemon', 'green', 'cotolydonous', 1500, 'hard');
console.log(fruit2);
console.log(fruit2.taste('sower'));
console.log(fruit1.size('medium'));

let fruit3 = new fruit('pasion', 'dark browm', 'cotolydonous', 1000, 'hard');
console.log(fruit3);
console.log(fruit3.taste('sweet'));
console.log(fruit1.size('small'));




function book(name, color, form, price, cover) {
    this.name = name;
    this.color = color; //This  is ablue print for the objects book1 2 and 3
    this.form = form;
    this.price = price;
    this.cover = cover;
    this.pages = function(c) { //This is amethond inside object and its used to provide values that vary.
        return this.pages + ' ' + c;
    }
    this.size = function(d) {
        return this.size + ' ' + d;
    }
}
let book1 = new book('blackbook', 'black', 'ruled', 5000, 'hard'); //These are the parameters or values of the properties
console.log(fruit1);
console.log(book1);
console.log(book1.pages(200));
console.log(book1.size('big'));

let book2 = new book('blackbook', 'brown', 'ruled', 3000, 'medium');
console.log(book2);
console.log(book2.pages(96));
console.log(book2.size('medium'));

let book3 = new book('blackbook', 'blue', 'ruled', 1000, 'soft');
console.log(book3);
console.log(book3.pages(48));
console.log(book3.size('small'));




function shoe(name, color, type, price, sole) {
    this.name = name; //This  is ablue print for the objects shoe 2 and 3
    this.color = color;
    this.type = type;
    this.price = price;
    this.sole = sole;
    this.look = function(e) { //This is amethond inside object and its used to provide values that vary.
        return this.look + ' ' + e;
    }
    this.size = function(f) {
        return this.size + ' ' + f;
    }
}
let shoe1 = new shoe('timberland', 'brown', 'casuol', 150000, 'big and hard'); //These are the parameters or values of the properties
console.log(fruit1);
console.log(shoe1);
console.log(shoe1.look('good'));
console.log(shoe1.size(42));

let shoe2 = new shoe('mokasin', 'black', 'office', 50000, ' flat and rabber');
console.log(shoe2);
console.log(shoe2.look('good'));
console.log(shoe2.size(45));

let shoe3 = new shoe('airmax', 'brown', 'casuol', 25000, 'flexable');
console.log(shoe3);
console.log(shoe3.look('some how good'));
console.log(shoe3.size(32));




function man(name, size, height, skin, voice, status, habbits) {
    this.name = name;
    this.size = size;
    this.height = height; //This  is ablue print for the objects man1 2 and 3
    this.skin = skin;
    this.voice = voice;
    this.status = status;
    this.habbits = habbits;
    this.hair = function(g) { //This is amethond inside object and its used to provide values that vary.
        return this.hair + ' ' + g;
    }
    this.energy = function(h) {
        return this.energy + ' ' + h;
    }
}
let man1 = new man('Raymond', 'medium', 'tall', 'brown', 'soft', 'stable', 'good'); //These are the parameters or values of the properties
console.log(fruit1);
console.log(man1);
console.log(man1.hair('dreds'));
console.log(man1.energy('strong'));

let man2 = new man('waiswa', 'medium', 'medium', 'chochlate', 'soft', 'stable', 'some how good');
console.log(man2);
console.log(man2.hair('threelayers'));
console.log(man2.energy('some how strong'));

let man3 = new man('samuel', 'small', 'short', 'dark', 'soft', 'stable', 'bad');
console.log(man3);
console.log(man3.hair('shaurin'));
console.log(man3.energy('weak'));




function laptop(name, price, color, storage, quality) {
    this.name = name;
    this.price = price; //This  is ablue print for the objects laptop1 2 and 3
    this.color = color;
    this.storage = storage;
    this.quality = quality;
    this.keyboard = function(i) { //This is amethond inside object and its used to provide values that vary.
        return this.keyboard + ' ' + i;
    }
    this.software = function(j) {
        return this.software + ' ' + j;
    }
}
let laptop1 = new laptop('mac', 2000000, 'silver', '300gb', 'good'); //These are the parameters or values of the properties
console.log(fruit1);
console.log(laptop1);
console.log(laptop1.keyboard('QWERTY'));
console.log(laptop1.software('mac'));

let laptop2 = new laptop('dell', 1000000, 'black', '200gb', 'some how good');
console.log(laptop1);
console.log(laptop2.keyboard('QWERTZ'));
console.log(laptop2.software('windows'));

let laptop3 = new laptop('mac', 800000, 'silver', '100gb', 'good');
console.log(laptop3);
console.log(laptop3.keyboard('QWERTY'));
console.log(laptop3.software('linux'));





function plane(name, type, price, color, capacity, size) {
    this.name = name;
    this.type = type; //This  is ablue print for the objects plane1 2 and 3
    this.price = price;
    this.color = color;
    this.capacity = capacity;
    this.size = size;
    this.speed = function(k) {
        return this.speed + ' ' + k;
    }
    this.width = function(m) { //This is amethond inside object and its used to provide values that vary.
        return this.width + ' ' + m;
    }
}
let plane1 = new plane('jumbo jet', 'pasengers jet', '200b', 'white', 200000, 'very big'); //These are the parameters or values of the properties
console.log(fruit1);
console.log(plane1);
console.log(plane1.speed('300km/hr'));
console.log(plane1.width('300m'));

let plane2 = new plane('jet fighter', 'war jet', '200m', 'armey green', 2, 'small');
console.log(plane2);
console.log(plane2.speed('350km/hr'));
console.log(plane2.width('15m'));

let plane3 = new plane('aircraft', 'pasenger plane', '100m', 'white', 5, 'very smalls');
console.log(plane3);
console.log(plane3.speed('100km/hr'));
console.log(plane3.width('10m'));





function tree(name, size, height, fruit) {
    this.name = name;
    this.size = size; //This  is ablue print for the objects tree1 2 and 3
    this.height = height;
    this.fruit = fruit;
    this.use = function(n) { //This is amethond inside object and its used to provide values that vary.
        return this.use + ' ' + n;
    }

}
let tree1 = new tree('mango tree', 'big', 'medium', 'mangoes'); //These are the parameters or values of the properties
console.log(fruit1);
console.log(tree1);
console.log(tree1.use('source of food'));

let tree2 = new tree('orange tree', 'small', 'short', 'oranges');
console.log(tree2);
console.log(tree2.use(' source of food'));

let tree3 = new tree('pine tree', 'small', 'tall', 'non');
console.log(tree3);
console.log(tree3.use('source of timber'));
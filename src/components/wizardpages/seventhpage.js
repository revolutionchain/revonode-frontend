import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import failedIcon from '../../styles/images/failed.png'
const { REACT_APP_LOCAL_NODE_ETH_IP } = process.env;
const { REACT_APP_LOCAL_NODE_WIFI_IP } = process.env;

const REACT_APP_LOCAL_NODE_IP = REACT_APP_LOCAL_NODE_WIFI_IP || REACT_APP_LOCAL_NODE_ETH_IP;



export default function Seventhpage({ currentPage, setCurrentPage }) {
    const [ randomNames, setRandomNames ] = useState(false);

    const [input, setInput] = useState({
        rpcUser: "",
        rpcPass: "",
        rpcRePass: "",
        nodeName: ""
    });

    useEffect(async () => {
        let arrNames = [];
        for(let i = 0 ; i < 5 ; i++){
            arrNames.push(adjetives[Math.ceil(Math.random()*(0, adjetives.length))] + " " + colors[Math.ceil(Math.random()*(0, adjetives.length))] + " " + things[Math.ceil(Math.random()*(0, adjetives.length))])
        }        
        setRandomNames(arrNames);
        console.log(arrNames.length);
    }, [])

    function handleInput(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const [errorFound, setErrorFound] = useState('');

        function checkPass (pass) {
        let symbols = new RegExp(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi)
        let upperCase = pass.split("").filter(e => e == e.toUpperCase() && isNaN(parseInt(e)) == true).length;
        let lowerCase = pass.split("").filter(e => e == e.toLowerCase() && isNaN(parseInt(e)) == true).length;
        let numbers = pass.split("").filter(e => isNaN(parseInt(e)) !== true).length;
        if(symbols.exec(pass) !== null){
            return "RPC password can only contain letters and numbers."
        }else if(upperCase < 1){
            return "RPC password must have at least 1 letter in uppercase"
        }else if(lowerCase < 6){
            return "RPC password must have at least 6 letter in lowercase"
        }else if(numbers < 3){
            return "RPC password must have at least 3 numbers"
        }else{
            return "Ok"
        }
    }

    async function handleCreate() {   
        let passChecked = checkPass(input?.rpcPass);     
        if (input?.rpcUser.length && input?.rpcPass.length && input?.rpcRePass == input?.rpcPass && input?.nodeName.length && input.nodeName.split(" ").length <= 3 && passChecked == "Ok") {            
            let genrevoconfig = await axios.post(`http://${REACT_APP_LOCAL_NODE_IP}:3001/genrevoconfig`, input);
            if (genrevoconfig.data.includes('ok')) {
                setCurrentPage(currentPage + 1)
            }
        } else if (!input?.rpcUser.length) {
            setErrorFound('Enter a RPC Username!');
            openModal();
        } else if (!input?.rpcPass.length) {
            setErrorFound('You have not entered a password!');
            openModal();
        } else if (input?.rpcRePass !== input?.rpcPass) {
            setErrorFound('Password does not match.');
            openModal();
        } else if (passChecked !== "Ok") {
            setErrorFound(passChecked);
            openModal();
        } else if (!input?.nodeName.length) {
            setErrorFound('You must enter or select a Node name!');
            openModal();
        } else if (input?.nodeName.split(" ").length > 3) {
            setErrorFound('Node name must have maximum 3 words!');
            openModal();
        }
    }

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '70%',
            textAlign: 'center',
            backgroundColor: 'transparent'
        },
    };

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal(e) {
        setIsOpen(true);
    }

    function afterOpenModal() {
    }

    function closeModal() {
        setIsOpen(false);
    }

    let adjetives = ["Attractive", "Bald", "Beautiful", "Rare", "Clean", "Dazzling", "Lucky", "Elegant", "Fancy", "Fit", "Fantastic", "Glamorous", "Gorgeous", "Handsome", "Long", "Magnificent", "Muscular", "Plain", "Able", "Quaint", "Scruffy", "Innocent", "Short", "Skinny", "Acrobatic", "Tall", "Proper", "Alert", "Lone", "Agreeable", "Ambitious", "Brave", "Calm", "Delightful", "Eager", "Faithful", "Gentle", "Happy", "Jolly", "Kind", "Lively", "Nice", "Obedient", "Polite", "Proud", "Silly", "Thankful", "Winning", "Witty", "Wonderful", "Zealous", "Expert", "Amateur", "Clumsy", "Amusing", "Vast", "Fierce", "Real", "Helpful", "Itchy", "Atomic", "Basic", "Mysterious", "Blurry", "Perfect", "Best", "Powerful", "Interesting", "Decent", "Wild", "Jovial", "Genuine", "Broad", "Brisk", "Brilliant", "Curved", "Deep", "Flat", "High", 
    "Hollow", "Low", "Narrow", "Refined", "Round", "Shallow", "Skinny", "Square", "Steep", "Straight", "Wide", "Big", "Colossal", "Clever", "Gigantic", "Great", "Huge", "Immense", "Large", "Little", "Mammoth", "Massive", "Micro", "Mini", "Petite", "Puny", "Scrawny", "Short", "Small", "Polished", "Teeny", "Tiny", "Crazy", "Dancing", "Custom", "Faint", "Harsh", "Formal", "Howling", "Loud", "Melodic", "Noisy", "Upbeat", "Quiet", "Dandy", "Raspy", "Rhythmic", "Daring", "Zany", "Digital", "Dizzy", "Exotic", "Fun", "Furry", "Hidden", "Ancient", "Brief", "Early", "Fast", "Future", "Late", "Long", "Modern", "Old", "Prehistoric", "Zesty", "Rapid", "Short", "Slow", "Swift", "Young", "Acidic", "Bitter", "Cool", "Creamy", "Keen", "Tricky", "Fresh", "Special", "Unique", "Hot", "Magic", "Main", "Nutty", "Pet", "Mythical", "Ripe", "Wobbly", 
    "Salty", "Savory", "Sour", "Spicy", "Bright", "Stale", "Sweet", "Tangy", "Tart", "Rich", "Rural", "Urban", "Breezy", "Bumpy", "Chilly", "Cold", "Cool", "Cuddly", "Damaged", "Damp", "Restless", "Dry", "Flaky", "Fluffy", "Virtual", "Merry", "Hot", "Icy", "Shiny", "Melted", "Joyous", "Rough", "Shaggy", "Sharp", "Radiant", "Sticky", "Strong", "Soft", "Uneven", "Warm", "Feisty", "Cheery", "Energetic", "Abundant", "Macho", "Glorious", "Mean", "Quick", "Precise", "Stable", "Spare", "Sunny", "Trendy", "Shambolic", "Striped", "Boxy", "Generous", "Tame", "Joyful", "Festive", "Bubbly", "Soaring", "Orbiting", "Sparkly", "Smooth", "Docile", "Original", "Electric", "Funny", "Passive", "Active", "Cheesy", "Tangy", "Blunt", "Dapper", "Bent", "Curly", "Oblong", "Sneaky", "Overt", "Careful", "Jumpy", "Bouncy", "Recumbent", "Cheerful", 
    "Droll", "Odd", "Suave", "Sleepy"];

    let colors = ["White", "Pearl", "Alabaster", "Snowy", "Ivory", "Cream", "Cotton", "Chiffon", "Lace", "Coconut", "Linen", "Bone", "Daisy", "Powder", "Frost", "Porcelain", "Parchment", "Velvet", "Tan", "Beige", "Macaroon", "Hazel", "Felt", "Metal", "Gingham", "Sand", "Sepia", "Latte", "Vinyl", "Glass", "Hazelnut", "Canvas", "Wool", "Yellow", "Golden", "Daffodil", "Flaxen", "Butter", "Lemon", "Mustard", "Tartan", "Blue", "Cloth", "Fiery", "Banana", "Plastic", "Dijon", "Honey", "Blonde", "Pineapple", "Orange", "Tangerine", "Marigold", "Cider", "Rusty", "Ginger", "Tiger", "Bronze", "Fuzzy", "Opaque", "Clay", "Carrot", "Corduroy", "Ceramic", "Marmalade", "Amber", "Sandstone", "Concrete", "Red", "Cherry", "Hemp", "Merlot", "Garnet", "Crimson", "Ruby", "Scarlet", "Burlap", "Brick", "Bamboo", "Mahogany", "Blood", "Sangria", "Berry", 
    "Currant", "Blush", "Candy", "Lipstick", "Pink", "Rose", "Fuchsia", "Punch", "Watermelon", "Rouge", "Coral", "Peach", "Strawberry", "Rosewood", "Lemonade", "Taffy", "Bubblegum", "Crepe", "Hotpink", "Purple", "Mauve", "Violet", "Boysenberry", "Lavender", "Plum", "Magenta", "Lilac", "Grape", "Eggplant", "Eggshell", "Iris", "Heather", "Amethyst", "Raisin", "Orchid", "Mulberry", "Carbon", "Slate", "Sky", "Navy", "Indigo", "Cobalt", "Cedar", "Ocean", "Azure", "Cerulean", "Spruce", "Stone", "Aegean", "Denim", "Admiral", "Sapphire", "Arctic", "Green", "Chartreuse", "Juniper", "Sage", "Lime", "Fern", "Olive", "Emerald", "Pear", "Mossy", "Shamrock", "Seafoam", "Pine", "Mint", "Seaweed", "Pickle", "Pistachio", "Basil", "Brown", "Coffee", "Chrome", "Peanut", "Carob", "Hickory", "Wooden", "Pecan", "Walnut", "Caramel", "Gingerbread", 
    "Syrup", "Chocolate", "Tortilla", "Umber", "Tawny", "Brunette", "Cinnamon", "Glossy", "Teal", "Grey", "Shadow", "Graphite", "Iron", "Pewter", "Cloud", "Silver", "Smoke", "Gauze", "Ash", "Foggy", "Flint", "Charcoal", "Pebble", "Lead", "Tin", "Fossilized", "Black", "Ebony", "Midnight", "Inky", "Oily", "Satin", "Onyx", "Nylon", "Fleece", "Sable", "Jetblack", "Coal", "Mocha", "Obsidian", "Jade", "Cyan", "Leather", "Maroon", "Carmine", "Aqua", "Chambray", "Holographic", "Laurel", "Licorice", "Khaki", "Goldenrod", "Malachite", "Mandarin", "Mango", "Taupe", "Aquamarine", "Turquoise", "Vermilion", "Saffron", "Cinnabar", "Myrtle", "Neon", "Burgundy", "Tangelo", "Topaz", "Wintergreen", "Viridian", "Vanilla", "Paisley", "Raspberry", "Tweed", "Pastel", "Opal", "Menthol", "Champagne", "Gunmetal", "Infrared", "Ultraviolet", "Rainbow", 
    "Mercurial", "Clear", "Misty", "Steel", "Zinc", "Citron", "Cornflower", "Lava", "Quartz", "Honeysuckle", "Chili"];

    let things = ["Alligator", "Bee", "Bird", "Camel", "Cat", "Cheetah", "Chicken", "Cow", "Dog", "Corgi", "Eagle", "Elephant", "Fish", "Fox", "Toad", "Giraffe", "Hippo", "Kangaroo", "Kitten", "Lobster", "Monkey", "Octopus", "Pig", "Puppy", "Rabbit", "Rat", "Scorpion", "Seal", "Sheep", "Snail", "Spider", "Tiger", "Turtle", "Newt", "Tadpole", "Frog", "Tarantula", "Albatross", "Blackbird", "Canary", "Crow", "Cuckoo", "Dove", "Pigeon", "Falcon", "Finch", "Flamingo", "Goose", "Seagull", "Hawk", "Jay", "Mockingbird", "Kestrel", "Kookaburra", "Mallard", "Nightingale", "Nuthatch", "Ostrich", "Owl", "Parakeet", "Parrot", "Peacock", "Pelican", "Penguin", "Pheasant", "Piranha", "Raven", "Robin", "Rooster", "Sparrow", "Stork", "Swallow", "Swan", "Swift", "Turkey", "Vulture", "Woodpecker", "Wren", "Butterfly", "Barbel", "Carp", "Cod", "Crab", 
    "Eel", "Goldfish", "Haddock", "Halibut", "Jellyfish", "Perch", "Pike", "Mantaray", "Salmon", "Sawfish", "Scallop", "Shark", "Shell", "Shrimp", "Trout", "Ant", "Aphid", "Beetle", "Caterpillar", "Dragonfly", "Cricket", "Fly", "Grasshopper", "Ladybug", "Millipede", "Moth", "Wasp", "Anteater", "Antelope", "Armadillo", "Badger", "Bat", "Beaver", "Bull", "Chimpanzee", "Dachshund", "Deer", "Dolphin", "Elk", "Moose", "Gazelle", "Gerbil", "Goat", "Bear", "Hamster", "Hare", "Hedgehog", "Horse", "Hyena", "Lion", "Llama", "Lynx", "Mammoth", "Marmot", "Mink", "Mole", "Mongoose", "Mouse", "Mule", "Otter", "Panda", "Platypus", "Pony", "Porcupine", "Puma", "Raccoon", "Reindeer", "Rhino", "Skunk", "Sloth", "Squirrel", "Weasel", "Snake", "Wolf", "Zebra", "Boa", "Chameleon", "Copperhead", "Cottonmouth", "Crocodile", "Rattlesnake", "Gecko", "Iguana", 
    "Lizard", "Python", "Salamander", "Sidewinder", "Whale", "Tortoise", "Lemur", "Rook", "Koala", "Donkey", "Ferret", "Tardigrade", "Orca", "Okapi", "Liger", "Unicorn", "Dragon", "Squid", "Ape", "Gorilla", "Baboon", "Cormorant", "Mantis", "Tapir", "Capybara", "Pangolin", "Opossum", "Wombat", "Aardvark", "Starfish", "Shetland", "Narwhal", "Worm", "Hornet", "Viper", "Stallion", "Jaguar", "Panther", "Bobcat", "Leopard", "Osprey", "Cougar", "Dalmatian", "Terrier", "Duck", "Sealion", "Raccoon", "Chipmunk", "Loris", "Poodle", "Orangutan", "Gibbon", "Meerkat", "Huskie", "Barracuda", "Bison", "Caribou", "Chinchilla", "Coyote", "Crane", "Dinosaur", "Lark", "Griffin", "Yeti", "Troll", "Seahorse", "Walrus", "Yak", "Wolverine", "Boar", "Alpaca", "Porpoise", "Manatee", "Guppy", "Condor", "Cyborg", "Cobra", "Locust", "Mandrill", "Oyster", "Urchin", 
    "Quail", "Sardine", "Ram", "Starling", "Wallaby", "Buffalo", "Goblin", "Tuna", "Mustang", "Alfalfa", "Artichoke", "Avocado", "Asparagus", "Arugula", "Bamboo", "Basil", "Beans", "Beets", "Pepper", "Peas", "Bloccoli", "Brussels sprouts", "Capers", "Carrott", "Cauliflower", "Celeriac", "Celery", "Chard", "Chives", "Cabbage", "Cucumber", "Daikon", "Eggplant", "Endive", "Fennel", "Ginger", "Gourd", "Greens", "Chili", "Lettuce", "Jicama", "Kale", "Kholrabi", "Leek", "Lentils", "Maize", "Mushroom", "Okra", "Olive", "Onion", "Parsley", "Parsnip", "Pea", "Peanut", "Peapod", "Pickle", "Potato", "Pumpkin", "Radicchio", "Rutabaga", "Salad", "Salsa", "Scallion", "Seaweed", "Shallot", "Spinach", "Spuds", "Succotash", "Soybean", "Sorrel", "Taro", "Tuber", "Tomatillo", "Turnip", "Tomato", "Vegetable", "Wasabi", "Yam", "Zucchini"];
    
    function selectedName (elem){
        let e = {
            target: {
                value: elem,
                name: "nodeName"
            }
        }
        handleInput(e);
    }

    return (
        <div className=''>
            <div style={{ minHeight: `calc(72vh - 50px)` }}>
                <h2>Create RPC user Title</h2>
                <h3>Description.</h3>
                <div>
                    <input style={{ width: `60%`, fontSize: `16px` }} type='text' name='rpcUser' placeholder="Username" onChange={(e) => handleInput(e)}></input>
                    <input style={{ width: `60%`, fontSize: `16px` }} type='password' name='rpcPass' placeholder="Password" onChange={(e) => handleInput(e)}></input>
                    <input style={{ width: `60%`, fontSize: `16px` }} type='password' name='rpcRePass' placeholder="Repeat password" onChange={(e) => handleInput(e)}></input>
                    <input style={{ width: `60%`, fontSize: `16px` }} value={input.nodeName} type='text' name='nodeName' placeholder="Write a Node name" onChange={(e) => handleInput(e)}></input>
                </div>

                <div style={{ backgroundColor: `#EEE`, textAlign: `left`, paddingTop: `5px`, marginTop: `10px` }}>
                    <span style={{ marginLeft: `10px` }}>Or Select a random Node name</span>
                    {
                        randomNames?.length == 5 && randomNames?.map(elem => {
                            return <div onClick={() => selectedName(elem)} className={ elem == input.nodeName ? 'drives-container selected' : 'drives-container'}>
                                <div>
                                    <span style={{ marginRight: `10px`, fontSize: `16px` }}>{elem}</span>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
            <div style={{ display: `flex` }}>
                <div style={{ width: `30%`, textAlign: `left` }}>
                    <button onClick={() => setCurrentPage(currentPage - 1)} className='button-style back-button'>Back</button>
                </div>
                <div style={{ width: `70%`, textAlign: `right` }}>
                    <button onClick={() => handleCreate()} className='button-style next-button'>Confirm</button>
                </div>
            </div>
            <div className='Modal'>
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <img className='warning-icon' src={failedIcon} />
                    <div className="div-balance-title div-abm-title">{errorFound}</div>
                    <button onClick={closeModal} className='button-style back-button modal-button'>Ok</button>
                </Modal>
            </div>
        </div>
    )
}
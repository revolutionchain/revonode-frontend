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

    async function handleCreate() {
        if (input?.rpcUser.length && input?.rpcPass.length && input?.rpcRePass == input?.rpcPass && input?.nodeName.length && input.nodeName.split(" ").length <= 3) {
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
        } else if (!input?.nodeName.length) {
            setErrorFound('You must enter or select a Node name!');
            openModal();
        } else if (input?.nodeName.split(" ").length > 3) {
            setErrorFound('Node name must have maximum 3 words!');
            openModal();
        }
    }

    const [getError, setGetError] = useState(false);

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

    let adjetives = ['attractive', 'bald', 'beautiful', 'rare', 'clean', 'dazzling', 'lucky', 'elegant', 'fancy', 'fit', 'fantastic', 'glamorous', 'gorgeous', 'handsome', 'long', 'magnificent', 'muscular', 'plain', 'able', 'quaint', 'scruffy', 'innocent', 'short', 'skinny', 'acrobatic', 'tall', 'proper', 'alert', 'lone', 'agreeable', 'ambitious', 'brave', 'calm', 'delightful', 'eager', 'faithful', 'gentle', 'happy', 'jolly', 'kind', 'lively', 'nice', 'obedient', 'polite', 'proud', 'silly', 'thankful', 'winning', 'witty', 'wonderful', 'zealous', 'expert', 'amateur', 'clumsy', 'amusing', 'vast', 'fierce', 'real', 'helpful', 'itchy', 'atomic', 'basic', 'mysterious', 'blurry', 'perfect', 'best', 'powerful', 'interesting', 'decent', 'wild', 'jovial', 'genuine', 'broad', 'brisk', 'brilliant', 'curved', 'deep', 'flat', 'high',
        'hollow', 'low', 'narrow', 'refined', 'round', 'shallow', 'skinny', 'square', 'steep', 'straight', 'wide', 'big', 'colossal', 'clever', 'gigantic', 'great', 'huge', 'immense', 'large', 'little', 'mammoth', 'massive', 'micro', 'mini', 'petite', 'puny', 'scrawny', 'short', 'small', 'polished', 'teeny', 'tiny', 'crazy', 'dancing', 'custom', 'faint', 'harsh', 'formal', 'howling', 'loud', 'melodic', 'noisy', 'upbeat', 'quiet', 'dandy', 'raspy', 'rhythmic', 'daring', 'zany', 'digital', 'dizzy', 'exotic', 'fun', 'furry', 'hidden', 'ancient', 'brief', 'early', 'fast', 'future', 'late', 'long', 'modern', 'old', 'prehistoric', 'zesty', 'rapid', 'short', 'slow', 'swift', 'young', 'acidic', 'bitter', 'cool', 'creamy', 'keen', 'tricky', 'fresh', 'special', 'unique', 'hot', 'magic', 'main', 'nutty', 'pet', 'mythical', 'ripe', 'wobbly',
        'salty', 'savory', 'sour', 'spicy', 'bright', 'stale', 'sweet', 'tangy', 'tart', 'rich', 'rural', 'urban', 'breezy', 'bumpy', 'chilly', 'cold', 'cool', 'cuddly', 'damaged', 'damp', 'restless', 'dry', 'flaky', 'fluffy', 'virtual', 'merry', 'hot', 'icy', 'shiny', 'melted', 'joyous', 'rough', 'shaggy', 'sharp', 'radiant', 'sticky', 'strong', 'soft', 'uneven', 'warm', 'feisty', 'cheery', 'energetic', 'abundant', 'macho', 'glorious', 'mean', 'quick', 'precise', 'stable', 'spare', 'sunny', 'trendy', 'shambolic', 'striped', 'boxy', 'generous', 'tame', 'joyful', 'festive', 'bubbly', 'soaring', 'orbiting', 'sparkly', 'smooth', 'docile', 'original', 'electric', 'funny', 'passive', 'active', 'cheesy', 'tangy', 'blunt', 'dapper', 'bent', 'curly', 'oblong', 'sneaky', 'overt', 'careful', 'jumpy', 'bouncy', 'recumbent', 'cheerful',
        'droll', 'odd', 'suave', 'sleepy'];

    let colors = ['white', 'pearl', 'alabaster', 'snowy', 'ivory', 'cream', 'cotton', 'chiffon', 'lace', 'coconut', 'linen', 'bone', 'daisy', 'powder', 'frost', 'porcelain', 'parchment', 'velvet', 'tan', 'beige', 'macaroon', 'hazel', 'felt', 'metal', 'gingham', 'sand', 'sepia', 'latte', 'vinyl', 'glass', 'hazelnut', 'canvas', 'wool', 'yellow', 'golden', 'daffodil', 'flaxen', 'butter', 'lemon', 'mustard', 'tartan', 'blue', 'cloth', 'fiery', 'banana', 'plastic', 'dijon', 'honey', 'blonde', 'pineapple', 'orange', 'tangerine', 'marigold', 'cider', 'rusty', 'ginger', 'tiger', 'bronze', 'fuzzy', 'opaque', 'clay', 'carrot', 'corduroy', 'ceramic', 'marmalade', 'amber', 'sandstone', 'concrete', 'red', 'cherry', 'hemp', 'merlot', 'garnet', 'crimson', 'ruby', 'scarlet', 'burlap', 'brick', 'bamboo', 'mahogany', 'blood', 'sangria',
        'berry', 'currant', 'blush', 'candy', 'lipstick', 'pink', 'rose', 'fuchsia', 'punch', 'watermelon', 'rouge', 'coral', 'peach', 'strawberry', 'rosewood', 'lemonade', 'taffy', 'bubblegum', 'crepe', 'hotpink', 'purple', 'mauve', 'violet', 'boysenberry', 'lavender', 'plum', 'magenta', 'lilac', 'grape', 'eggplant', 'eggshell', 'iris', 'heather', 'amethyst', 'raisin', 'orchid', 'mulberry', 'carbon', 'slate', 'sky', 'navy', 'indigo', 'cobalt', 'cedar', 'ocean', 'azure', 'cerulean', 'spruce', 'stone', 'aegean', 'denim', 'admiral', 'sapphire', 'arctic', 'green', 'chartreuse', 'juniper', 'sage', 'lime', 'fern', 'olive', 'emerald', 'pear', 'mossy', 'shamrock', 'seafoam', 'pine', 'mint', 'seaweed', 'pickle', 'pistachio', 'basil', 'brown', 'coffee', 'chrome', 'peanut', 'carob', 'hickory', 'wooden', 'pecan', 'walnut', 'caramel',
        'gingerbread', 'syrup', 'chocolate', 'tortilla', 'umber', 'tawny', 'brunette', 'cinnamon', 'glossy', 'teal', 'grey', 'shadow', 'graphite', 'iron', 'pewter', 'cloud', 'silver', 'smoke', 'gauze', 'ash', 'foggy', 'flint', 'charcoal', 'pebble', 'lead', 'tin', 'fossilized', 'black', 'ebony', 'midnight', 'inky', 'oily', 'satin', 'onyx', 'nylon', 'fleece', 'sable', 'jetblack', 'coal', 'mocha', 'obsidian', 'jade', 'cyan', 'leather', 'maroon', 'carmine', 'aqua', 'chambray', 'holographic', 'laurel', 'licorice', 'khaki', 'goldenrod', 'malachite', 'mandarin', 'mango', 'taupe', 'aquamarine', 'turquoise', 'vermilion', 'saffron', 'cinnabar', 'myrtle', 'neon', 'burgundy', 'tangelo', 'topaz', 'wintergreen', 'viridian', 'vanilla', 'paisley', 'raspberry', 'tweed', 'pastel', 'opal', 'menthol', 'champagne', 'gunmetal', 'infrared',
        'ultraviolet', 'rainbow', 'mercurial', 'clear', 'misty', 'steel', 'zinc', 'citron', 'cornflower', 'lava', 'quartz', 'honeysuckle', 'chili',];

    let things = ['alligator', 'bee', 'bird', 'camel', 'cat', 'cheetah', 'chicken', 'cow', 'dog', 'corgi', 'eagle', 'elephant', 'fish', 'fox', 'toad', 'giraffe', 'hippo', 'kangaroo', 'kitten', 'lobster', 'monkey', 'octopus', 'pig', 'puppy', 'rabbit', 'rat', 'scorpion', 'seal', 'sheep', 'snail', 'spider', 'tiger', 'turtle', 'newt', 'tadpole', 'frog', 'tarantula', 'albatross', 'blackbird', 'canary', 'crow', 'cuckoo', 'dove', 'pigeon', 'falcon', 'finch', 'flamingo', 'goose', 'seagull', 'hawk', 'jay', 'mockingbird', 'kestrel', 'kookaburra', 'mallard', 'nightingale', 'nuthatch', 'ostrich', 'owl', 'parakeet', 'parrot', 'peacock', 'pelican', 'penguin', 'pheasant', 'piranha', 'raven', 'robin', 'rooster', 'sparrow', 'stork', 'swallow', 'swan', 'swift', 'turkey', 'vulture', 'woodpecker', 'wren', 'butterfly', 'barbel', 'carp', 'cod',
        'crab', 'eel', 'goldfish', 'haddock', 'halibut', 'jellyfish', 'perch', 'pike', 'mantaray', 'salmon', 'sawfish', 'scallop', 'shark', 'shell', 'shrimp', 'trout', 'ant', 'aphid', 'beetle', 'caterpillar', 'dragonfly', 'cricket', 'fly', 'grasshopper', 'ladybug', 'millipede', 'moth', 'wasp', 'anteater', 'antelope', 'armadillo', 'badger', 'bat', 'beaver', 'bull', 'chimpanzee', 'dachshund', 'deer', 'dolphin', 'elk', 'moose', 'gazelle', 'gerbil', 'goat', 'bear', 'hamster', 'hare', 'hedgehog', 'horse', 'hyena', 'lion', 'llama', 'lynx', 'mammoth', 'marmot', 'mink', 'mole', 'mongoose', 'mouse', 'mule', 'otter', 'panda', 'platypus', 'pony', 'porcupine', 'puma', 'raccoon', 'reindeer', 'rhino', 'skunk', 'sloth', 'squirrel', 'weasel', 'snake', 'wolf', 'zebra', 'boa', 'chameleon', 'copperhead', 'cottonmouth', 'crocodile', 'rattlesnake',
        'gecko', 'iguana', 'lizard', 'python', 'salamander', 'sidewinder', 'whale', 'tortoise', 'lemur', 'rook', 'koala', 'donkey', 'ferret', 'tardigrade', 'orca', 'okapi', 'liger', 'unicorn', 'dragon', 'squid', 'ape', 'gorilla', 'baboon', 'cormorant', 'mantis', 'tapir', 'capybara', 'pangolin', 'opossum', 'wombat', 'aardvark', 'starfish', 'shetland', 'narwhal', 'worm', 'hornet', 'viper', 'stallion', 'jaguar', 'panther', 'bobcat', 'leopard', 'osprey', 'cougar', 'dalmatian', 'terrier', 'duck', 'sealion', 'raccoon', 'chipmunk', 'loris', 'poodle', 'orangutan', 'gibbon', 'meerkat', 'huskie', 'barracuda', 'bison', 'caribou', 'chinchilla', 'coyote', 'crane', 'dinosaur', 'lark', 'griffin', 'yeti', 'troll', 'seahorse', 'walrus', 'yak', 'wolverine', 'boar', 'alpaca', 'porpoise', 'manatee', 'guppy', 'condor', 'cyborg', 'cobra', 'locust',
        'mandrill', 'oyster', 'urchin', 'quail', 'sardine', 'ram', 'starling', 'wallaby', 'buffalo', 'goblin', 'tuna', 'mustang', "acorn squash", "alfalfa", "artichoke", "avocado", "asparagus", "arugula", "bamboo", "basil", "beans", "beets", "pepper", "peas", "bloccoli", "Brussels sprouts", "capers", "carrott", "cauliflower", "celeriac", "celery", "chard", "chives", "cabbage", "cucumber", "daikon", "eggplant", "endive", "fennel", "ginger", "gourd", "greens", "chili", "lettuce", "jicama", "kale", "kholrabi", "leek", "lentils", "maize", "mushroom", "okra", "olive", "onion", "parsley", "parsnip", "pea", "peanut", "peapod", "pickle", "potato", "pumpkin", "radicchio", "rutabaga", "salad", "salsa", "scallion", "seaweed", "shallot", "spinach", "spuds", "succotash", "soybean", "sorrel", "taro", "tuber", "tomatillo", "turnip", "tomato",
        "vegetable", "wasabi", "yam", "zucchini"];
    
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

                <div style={{ backgroundColor: `#EEE`, textAlign: `left`, paddingTop: `5px` }}>
                    <span style={{ marginLeft: `10px` }}>Or Select a random Node name</span>
                    {
                        randomNames?.length == 5 && randomNames?.map(elem => {
                            return <div onClick={() => selectedName(elem)} className={ 'drives-container'}>
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
                    <button onClick={() => handleCreate()} className='button-style next-button'>Create</button>
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
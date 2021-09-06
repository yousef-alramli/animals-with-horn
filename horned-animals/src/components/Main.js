import React, { Component } from 'react';
import HornedBeast from './HornedBeast';
class Main extends Component {

   

    render() {

        let beast = [
            {
                src: "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
                name: "UniWhal",
                description: "A unicorn and a narwhal nuzzling their horns",
                title: "narwhal",
                horns: 1,
                
                
            },
            {
                src: "https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80",
                name: "Rhino Family",
                description: "Mother (or father) rhino with two babies",
                title: "rhino",
                horns: 2,
                
                

            },
            {
                src: "https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg",
                name: "Unicorn Head",
                description: "Someone wearing a creepy unicorn head mask",
                title: "unicorn",
                horns: 1,
                
                

            },
            {
                src: "https://images.unsplash.com/photo-1518946222227-364f22132616?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4836a6fca62e7dce9324346bacfde085&auto=format&fit=crop&w=2534&q=80",
                name: "UniLego",
                description: "Lego figurine dressed in a unicorn outfit",
                title: "unilego",
                horns: 1,
                
                

            },
            {
                src: "https://i.pinimg.com/736x/b4/61/06/b46106830b841017ea59870b27ec18dc--narwhals-a-unicorn.jpg",
                name: "Basically a unicorn",
                description: "A narwhal is basically a unicorn after all, right?",
                title: "narwhal",
                horns: 1,
                
                

            },
            {
                src: "https://i.pinimg.com/originals/16/cf/2a/16cf2a0b3fd51b9bee08bb6296193b75.jpg",
                name: "#truth",
                description: "The truth behind narwhals",
                title: "narwhal",
                horns: 1,
                
                

            },
            {
                src: "https://secure.img1-ag.wfcdn.com/im/17007094/resize-h800%5Ecompr-r85/3589/35892451/Baby+Rhino+Figurine.jpg",
                name: "Baby Rhino",
                description: "This is actually a figurine but it looks kinda real",
                title: "rhino",
                horns: 2,
                
                

            },
            {
                src: "https://vignette.wikia.nocookie.net/landbeforetime/images/c/c3/Cera_infobox.png/revision/latest?cb=20180422005003",
                name: "Cera",
                description: "Three horns but still, horns. And who doesn't like The Land Before Time?",
                title: "triceratops",
                horns: 3,
                
                

            },
            {
                src: "https://ae01.alicdn.com/kf/HTB18GwSQVXXXXaZaXXXq6xXFXXXh/Animal-Cosplay-Costume-Narwhal-Onesie-Mens-Womens-Cartoon-Whale-Pajamas.jpg",
                name: "Narwhal costume",
                description: "A woman wearing a blue narwhal costume",
                title: "narwhal",
                horns: 1,
                
                

            },
            {
                src: "https://www.shopmascot.com/image/cache/mascotnew/new196-800x800.jpg",
                name: "Rhino costume",
                description: "Mascots have to get their costumes somewhere",
                title: "rhino",
                horns: 2,
                
                

            },
            {
                src: "https://www.tinselbox.com/wp-content/uploads/2018/03/I-BELIEVE-IN-UNICORNS-FREE-PRINTABLE-WATERCOLOR-7-of-1.jpg",
                name: "Believe",
                description: "I believe in unicorns, do you?",
                title: "unicorn",
                horns: 1,
                
                

            },
            {
                src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Markhor_Schraubenziege_Capra_falconeri_Zoo_Augsburg-02.jpg/220px-Markhor_Schraubenziege_Capra_falconeri_Zoo_Augsburg-02.jpg",
                name: "Markhor",
                description: "These wild goats eat snakes, then secrete a foam that locals fight over for the antivemon properties -- how cool is that?",
                title: "markhor",
                horns: 2,
                
                

            },
            {
                src: "http://www.zooborns.com/.a/6a010535647bf3970b0223c84d5959200c-800wi",
                name: "Baby markhor",
                description: "Even the babies are adorable",
                title: "markhor",
                horns: 2,
                
                

            },
            {
                src: "https://images.unsplash.com/photo-1558560063-931ca9822a0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
                name: "Mouflon",
                description: "Those horns though",
                title: "mouflon",
                horns: 2,
                
                

            },
            {
                src: "https://images.unsplash.com/photo-1556890077-020ec300d5db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80",
                name: "Addax",
                description: "This guy is basically extinct but survives well in captivity, so they're frequently found in zoos",
                title: "addax",
                horns: 2,
                
                

            },
            {
                src: "https://cbsnews3.cbsistatic.com/hub/i/r/2013/03/05/5b414225-a645-11e2-a3f0-029118418759/thumbnail/620x350/2d4cf24685b45c22912e64d2004fec8d/Baby_Mouflon_Wild_Sheep.jpg",
                name: "Baby mouflon",
                description: "The cuteness that is a baby mouflon asleep",
                title: "mouflon",
                horns: 2,
                
                

            },
            {
                src: "https://images.unsplash.com/photo-1514036783265-fba9577fc473?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
                name: "Happy Jackson's Chameleon",
                description: "These are really common in Hawaii",
                title: "chameleon",
                horns: 2,
                
                

            },
            {
                src: "https://imgc.allpostersimages.com/img/print/posters/dlillc-jackson-s-chameleon_a-G-13448768-14258384.jpg",
                name: "Serious Jackson's Chameleon",
                description: "This one is very serious.",
                title: "chameleon",
                horns: 3,
                
                

            },
            {
                src: "https://www.nps.gov/band/learn/nature/images/short-horned-lizard-open-mouth-18.jpg?maxwidth=650&autorotate=false",
                name: "Horned Lizard",
                description: "Fave food: ants",
                title: "lizard",
                horns: 100,
                
                

            },
            {
                src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Smaug_par_David_Demaret.jpg/290px-Smaug_par_David_Demaret.jpg",
                name: "Smaug",
                description: "Fan illustration of Smaug from 'The Hobbit'",
                title: "dragon",
                horns: 100,
                
                

            }
        ];

        return (
            <>
                {
                    beast.map(item => {
                        return <HornedBeast name={item.name} src={item.src} title={item.title} description={item.description} horns={item.horns} />
                    })
                }
            </>
        )
    };
}

export default Main;

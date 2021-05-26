const prompt = require('prompt-sync')({ sigint: true });


class Node {
    constructor(year, highlight, nextNode = null) {
        this.year = year;
        this.highlight = highlight;
        this.nextNode = nextNode;
    }
}

class LinkedList {
    constructor(year, highlight) {
        this.head = new Node(year, highlight);
    }

    insertBegining = (age, highlight) => {
        const node = new Node(age, highlight, this.head);
        this.head = node;
    };

    getLinkList = () => {
        let current = this.head;
        while (current) {
            console.log(`year : ${current.year} , highlight : ${current.highlight}`);
            current = current.nextNode;
        }
    };

    insertHighlight = (age) => {
        let current = this.head;
        while (current.year < age) {
            let currentAge = current.year + 1;
            if (current.nextNode && current.nextNode.year === currentAge) {
                current = current.nextNode;
            } else {
                let highlight = prompt(`Enter highlights for year : ${currentAge}`);
                let newNode = new Node(currentAge, highlight, current.nextNode);
                current.nextNode = newNode;
                current = newNode;
            }
        }
    };
}
const ageList = new LinkedList(7, "i was seven"); // head = 7
ageList.insertBegining(3, "i started walking"); //head = 3 => 7
ageList.insertBegining(1, "i was born"); //head= 1 => 3 => 7

let age = prompt("Enter Your Age ");
ageList.insertHighlight(age);
ageList.getLinkList();
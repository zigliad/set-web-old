import cardsSvgs from '../cards-svg/svgsLoader';
import '../styles/main.css';

const colors = [
    ["#52D95D", "#FF0188", "#A2A0DF"]
]

export default function PlayingCard({ card, onClick, picked }) {

    let cardString = card.attributes
        .map(attr => `${attr + 1}`)
        .reduce((a1, a2) => a1 + a2, "")

    const color = colors[0][cardString[cardString.length - 1] - 1]
    cardString = cardString.slice(0, -1) // For the image, ignore the color attribute

    const CardImage = cardsSvgs[cardString]
    const pickedClass = "transform scale-90 bg-gray-100"

    return (
        <div className={`bg-white dark:bg-gray-600 shadow-2xl rounded-2xl flex justify-center items-center ${picked ? pickedClass : ""}`}
            onClick={onClick}>
            <CardImage fill={color} stroke={color}
                className="transform rotate-90 w-4/5" />
        </div>
    );
}

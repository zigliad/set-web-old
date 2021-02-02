import Modes from './Modes';
import useStyles from './styles';

export default function MainPage() {

    const classes = useStyles();

    return (
        <div>
            <h1>SET</h1>
            <Modes />
        </div>
    );
}

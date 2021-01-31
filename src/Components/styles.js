import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    borderRadius: {
        borderRadius: 16
    },

    picked: {
        borderWidth: 4,
        borderColor: "#000000",
        backgroundColor: "#f0f0f0",
        transform: 0.8
    },

    unpicked: {
        borderWidth: 2,
        borderColor: "#000000",

    },

    paddingSmall: {
        padding: 4
    }
})

export default useStyles

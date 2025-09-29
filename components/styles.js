import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
    homeImageWrapper: {
        borderRadius: 8,
        padding: 6,
        height: 100
    },
    homeImage: {
        flex: 1,
        resizeMode: "cover",
        width: 427,
        height: 896,
        alignItems: "center",
    },
    /* App */
    app: {
        backgroundColor: '#1C1C1E',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
    },
    back__button: {
        backgroundColor: '#1C1C1E',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    /* Header */
    header: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%'
    },
    logo__container: {
        display: 'flex',
        height: '24px',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    logo: {
        alignSelf: 'flex-center',
        alignItems: 'center',
        display: 'flex',
    },
    logo__image: {

    },
    progress_bar__container: {
        display: 'flex',
        width: '70%',
        height: 36,
        flexDirection: 'row-reverse',
    },
    progress_bar: {
        display: 'flex',
        flexDirection: 'row',
        flexBasis: 205,
    },
    progress_bar__segement: {
        display: 'flex',
        backgroundColor: '#292929',
        flex: 1,
        width: 40,
        borderRightColor: 'black',
        borderRightWidth: 1,
        height: 36,
    },
    progress_bar__segement__first: {
        display: 'flex',
        backgroundColor: '#292929',
        width: 40,
        height: 36,
        borderRightColor: 'black',
        borderRightWidth: 1,
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
    },
    progress_bar__segement__last: {
        display: 'flex',
        borderRightColor: 'black',
        borderRightWidth: 1,
        height: 36,
        backgroundColor: '#292929',
        width: 40,
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
    },
    /* playing_field */
    playing_field: {
        paddingTop: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        gap: 16,
    },
    playing_field__row: {
        display: 'flex',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        gap: 8,
    },
    field: {
        flexDirection: 'column',
        display: 'flex',
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: '#2C2C2E',
        borderRadius: 20,
        width: 150,
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 6,
        paddingRight: 8,
        paddingBottom: 12,
    },
    questionContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    question: {
        borderRadius: '50%',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.7)',
        color: 'rgba(255, 255, 255, 0.7)',
        width: 12,
        height: 12,
        fontSize: 9,
        justifyContent: 'center',
        display: 'flex',
        alignSelf: 'flex-end',
    },
    icon: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: '50%',
        width: 64,
        height: 64,
        // paddingLeft: 15,
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
    },
    icon__image: {
        alignSelf: 'center'
    },
    label: {
        paddingTop: 2,
        color: '#ffffff',
    },
    /* result */
    result: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        gap: 16,
    },
    result__row: {
        paddingBottom: 10
    },
    result__text: {
        color: '#ffffff',
    },
    badges: {
        justifyContent: 'space-around',
        display: 'flex',
        flexDirection: 'row',
        // alignContent: 'center',
        // justifyContent: 'center',
            height: 64,
            width: '100%'
    },
    badge: {
        display: 'flex',
        borderWidth: 1,
        borderColor: '#757575',
        borderRadius: '50%',
        width: 64,
        height: 64,
        alignItems: 'center',
        justifyContent: 'center'
    },
    badge__image: {
        display: 'flex',
        // alignSelf: 'center',
        // justifyContent  : 'center',

    },
    // Footer
    footer: {
        height: 66,
        flexDirection: 'row',
        display: 'flex',
    },
    rulesContainer: {
        display: 'flex',
        paddingTop: 10,
        alignItems: 'flex-end',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#2C2C2E',
        height: 66,
        justifyContent: 'center',
        backgroundColor: '#2C2C2E',
        alignItems: 'center',
        width: 77,
        maxWidth: 77,
        flexDirection: 'column',
    },
    rules: {
        alignSelf: 'center',
        display: 'flex',
    },
    rulesButton: {  
    // width: 77,
    },
    timerContainer: {
        display: 'flex',
        width: '80%',
        height: 66,
        flexDirection: 'row-reverse',
    },
    timer: {
        paddingLeft: 10,
        fontSize: 24,
        width: 280,
        display: 'flex',
        flexDirection: 'row',

    },
    days: {
        color: 'white',
        display: 'flex',
        borderTopWidth: 1,
        borderTopColor: '#58FFFF',
        borderBottomWidth: 1,
        borderBottomColor: '#58FFFF',
        borderLeftWidth: 1,
        borderLeftColor: '#58FFFF',
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        paddingRight: 10,
        paddingLeft: 10,
        alignItems: 'center',
        justifyContent: 'center'

    },
    days__text: {
        color: 'white',
        fontWeight: 'bold',
    },
   
    delimeter: {
        backgroundColor: '#58FFFF',
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        width: 40,
    },
    clock__container: {
        borderTopWidth: 1,
        borderTopColor: '#58FFFF',
        borderBottomWidth: 1,
        borderBottomColor: '#58FFFF',
        display: 'flex',
        flexDirection: 'row',
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
    },
    clock: {
        display: 'flex',
        backgroundColor: '#58FFFF',
        width: 140,
        alignItems: 'center',
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        justifyContent: 'center'
    },
    clock__text: {
        color: 'black',
        fontWeight: 'bold',
    },
})


export default styles;
import * as React from 'react'
import moment from "moment";


interface Props {

}


const TimeZoneClock: React.FC<Props> = (props) => {
    const locale = 'en';
    const [today, setDate] = React.useState(new Date()); // Save the current date to be able to trigger an update
    const [ato, setATO] = React.useState(''); // Save the current date to be able to trigger an update

    React.useEffect(() => {
        const timer = setInterval(() => { // Creates an interval which will update the current data every minute
            // This will trigger a rerender every component that uses the useDate hook.
            setDate(new Date());
        },   10 * 1000);
        return () => {
            clearInterval(timer); // Return a funtion to clear the timer so that it will stop being called on unmount
        }
    }, []);

    React.useEffect(() => {
        let start = moment('2018-08-22T00:00:00Z').utc();
        let days = moment(today).utc().diff(start);
        days = days / (1000 * 60 * 60 * 24);
        if (days > 675) {
            days = days % 675;
            days--;
        }
        let a = String.fromCharCode(65 + (days / 26));
        let b = String.fromCharCode(65 + (days % 26));
        setATO('ATO ' + a + b);
        return () => {
             function cleanup() {}// Return a funtion to clear the timer so that it will stop being called on unmount
        }
    }, []);



    const day = today.toLocaleDateString(locale, { weekday: 'long' });
    const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, { month: 'long' })}\n\n`;
    const hour = today.getHours();
    const wish = `Good ${(hour < 12 && 'Morning') || (hour < 17 && 'Afternoon') || 'Evening'}, `;
    const time = today.toLocaleTimeString(locale, { hour: 'numeric', hour12: true, minute: 'numeric' });



    return (
        <div>
            <a>{ato}</a>
            <a>Langley</a>
            <a>{today.getHours()}{today.getMinutes()}</a>
        </div>
    )
}

export default TimeZoneClock

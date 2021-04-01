import * as React from 'react'
import moment from 'moment'

interface Props {
}

const TimeZoneClock: React.FC<Props> = (props) => {
    const locale = 'en'
    const [utc, setUTC] = React.useState(moment(new Date()).utc()) // Save the current date to be able to trigger an update
    // const [langleyOffset, setLangleyOffset] = React.useState(-5)
    // const [pacificOffset, setPacificOffset] = React.useState(-8)
    // const [centralOffset, setCentralOffset] = React.useState(-6)
    // const [hawaiiOffset, setHawaiiOffset] = React.useState(-10)
    // const [germanyOffset, setGermanyOffset] = React.useState(1)
    const [ato, setATO] = React.useState('') // Save the current date to be able to trigger an update

    React.useEffect(() => {
        const timer = setInterval(() => {
            setUTC(moment(new Date()).utc())
        }, 10 * 1000)
        return () => {
            clearInterval(timer) // Return a funtion to clear the timer so that it will stop being called on unmount
        }
    }, [])

    React.useEffect(() => {
        let start = moment('2018-08-22T00:00:00Z').utc()
        let days = moment(utc).utc().diff(start)
        days = days / (1000 * 60 * 60 * 24)
        if (days > 675) {
            days = days % 675
            days--
        }
        let a = String.fromCharCode(65 + days / 26)
        let b = String.fromCharCode(65 + (days % 26))
        setATO('ATO ' + a + b)
        return () => {
            function cleanup() {
            } // Return a funtion to clear the timer so that it will stop being called on unmount
        }
    }, [])

    return <div className="flex flex-row justify-evenly">
        <a className="atoDay text-white text-2xl leading-10">{ato}</a>
        <div className="timeZoneCol flex flex-col items-center">
            <a className="tzTitle">LANGLEY</a>
            <a className="tzTime text-white">
                {moment(utc).utcOffset(-5).format('HHmm')}
            </a>
        </div>
        <div className="timeZoneCol flex flex-col items-center">
            <a className="tzTitle">PACIFIC</a>
            <a className="tzTime text-white">
                {moment(utc).utcOffset(-8).format('HHmm')}
            </a>
        </div>
        <div className="timeZoneCol flex flex-col items-center">
            <a className="tzTitle">CENTRAL</a>
            <a className="tzTime text-white">
                {moment(utc).utcOffset(-6).format('HHmm')}
            </a>
        </div>
        <div className="timeZoneCol flex flex-col items-center">
            <a className="tzTitle">HAWAII</a>
            <a className="tzTime text-white">
                {moment(utc).utcOffset(10).format('HHmm')}
            </a>
        </div>
        <div className="timeZoneCol flex flex-col items-center">
            <a className="tzTitle">GERMANY</a>
            <a className="tzTime text-white">
                {moment(utc).utcOffset(1).format('HHmm')}
            </a>
        </div>
        <div className="timeZoneCol flex flex-col items-center">
            <a className="tzTitle">ZULU</a>
            <a className="tzTime text-white">
                {utc.format('HHmm')}
            </a>
        </div>
    </div>
}

export default TimeZoneClock

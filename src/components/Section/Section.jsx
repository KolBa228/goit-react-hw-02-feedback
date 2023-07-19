import {Statistics} from '../Statistics/Statistics'

export const Section = ({ children, title  }) => {
    return (
        <section>
            <h1>{title}</h1>
            <Statistics/>
        </section>
    )
}
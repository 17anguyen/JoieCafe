import { SectionWrapper } from "../hoc";

const Contact = () => {
    return (
        <div>
            <h1 className="text-primary">contact</h1>
        </div>
    )
};

export default SectionWrapper(Contact, "contact");
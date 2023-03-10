import Button from './Button';

function Card({ title, footer, children }) {
    return <div className={'shadow border rounded-lg px-6 py-2 overflow-hidden bg-white'}>{children}</div>;
}
function Title({ children }) {
    return <h1 className={'text-2xl p-4 border-b'}>{children}</h1>;
}
function Body({ children }) {
    return <div className={'leading-relaxed p-4'}>{children}</div>;
}
function Footer({ children }) {
    return <div className={'bg-slate-50 p-4'}>{children}</div>;
}

Card.Title = Title;
Card.Body = Body;
Card.Footer = Footer;
export default Card;

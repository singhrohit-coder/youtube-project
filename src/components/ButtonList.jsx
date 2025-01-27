import Button from "./Button";

// HomeWork
// const list = ["create a list and do map out of it"]
// buid scroll 

const ButtonList = () => {
    return (
        <div className="flex">
            {/* props */}
           <Button name="All"/>
           <Button name="Web Development"/>
           <Button name="Startup Company"/>
           <Button name="OSINT"/>
           <Button name="Security Hackers"/>
        </div>
    );
};

export default ButtonList;
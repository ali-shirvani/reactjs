import React from 'react';


const user = {
    name: 'ali',
    family: 'shirvani',
    age: 24
}

const Footer = () => {
    return (
        <div>
            <div>
                this is a footer
            </div>
            <div>
                {user.name}, {user.family}, {user.age}
            </div>
        </div>
    )
}

export default Footer;
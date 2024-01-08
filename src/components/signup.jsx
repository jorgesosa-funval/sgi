const { default: authService } = require("@/service/auth.service");
const { useState } = require("react")

const Signup = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
}

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const response = await authService.signup(email, password);
            console.log('sign up successfully', response);
        } catch (error) {
            console.log(error);
        }
/* vista incompleta */
}
    

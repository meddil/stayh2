import React, { useState } from 'react';
import './Sign_Up.css';

const Sign_Up = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = {};

        // Name validation (required)
        if (!formData.name.trim()) {
            validationErrors.name = 'Name is required';
        }

        // Phone validation (optional, not exceeding 10 digits)
        if (formData.phone && !/^\d{0,10}$/.test(formData.phone)) {
            validationErrors.phone = 'Phone number should not exceed 10 digits';
        }

        // Email validation (required)
        if (!formData.email.trim()) {
            validationErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            validationErrors.email = 'Invalid email address';
        }

        // Password validation (required)
        if (!formData.password.trim()) {
            validationErrors.password = 'Password is required';
        }

        if (Object.keys(validationErrors).length === 0) {
            // Form is valid, submit data or perform further actions
            console.log('Form submitted:', formData);
        } else {
            // Set validation errors
            setErrors(validationErrors);
        }
    };

    return (
        <div className="container" style={{ marginTop: '5%' }}>
            <div className="signup-grid">
                <div className="signup-text">
                    <h1>Sign Up</h1>
                </div>
                <div className="signup-text1" style={{ textAlign: 'left' }}>
                    Already a member? <span><a href="../Login/Login.html" style={{ color: '#2190FF' }}> Login</a></span>
                </div>
                <div className="signup-form">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="form-control"
                                placeholder="Enter your name"
                                aria-describedby="helpId"
                            />
                            {errors.name && <span className="error">{errors.name}</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input
                                type="tel"
                                name="phone"
                                id="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="form-control"
                                placeholder="Enter your phone number"
                                aria-describedby="helpId"
                            />
                            {errors.phone && <span className="error">{errors.phone}</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="form-control"
                                placeholder="Enter your email"
                                aria-describedby="helpId"
                            />
                            {errors.email && <span className="error">{errors.email}</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                className="form-control"
                                placeholder="Enter your password"
                                aria-describedby="helpId"
                            />
                            {errors.password && <span className="error">{errors.password}</span>}
                        </div>
                        <div className="btn-group">
                            <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light">Submit</button>
                            <button type="reset" className="btn btn-danger mb-2 waves-effect waves-light">Reset</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Sign_Up;

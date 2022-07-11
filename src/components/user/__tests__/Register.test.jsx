import React from "react";
import renderWithRedux from "../../../util/testUtil";
import Register from "../Register";
import { fireEvent, screen, waitFor } from "@testing-library/react";
import { registerAction } from "../../modules/user/userAction";

jest.mock("../../modules/user/userAction");

describe('Register form', () => {

    it('should exist name, email, password fields & register button', () => {

        const { getByLabelText, getByText } = renderWithRedux(<Register />, {})

        expect(screen.getByLabelText('Enter email address')).toBeInTheDocument();

        expect(screen.getByLabelText('Enter password')).toBeInTheDocument();

        expect(screen.getByLabelText('Enter username')).toBeInTheDocument();

        expect(screen.getByText('Register')).toBeInTheDocument();
    })

    it('should show required error message when register is clicked', async () => {

        const { findByText, getByText } = renderWithRedux(<Register />, {})

        // submit register form
        fireEvent.submit(screen.getByText('Register'))

        expect(await screen.findByText('Email is required')).toBeInTheDocument();

        expect(await screen.findByText('Password is required')).toBeInTheDocument();

        expect(await screen.findByText('Username is required')).toBeInTheDocument();

    }) 

    it('should show email, password invalid error message', async () => {

        const { findByText, getByText, getByLabelText } = renderWithRedux(<Register />, {})

        fireEvent.change(screen.getByLabelText('Enter email address'), {target: {value:'invalid email'}})

        fireEvent.change(screen.getByLabelText('Enter password'), {target: {value:'pass'}})

        fireEvent.change(screen.getByLabelText('Enter username'), {target: {value:'username'}})

        // submit register form
        fireEvent.submit(screen.getByText('Register'))

        expect(await screen.findByText('Enter a valid email')).toBeInTheDocument();

        expect(await screen.findByText('Password needs minimum 8 characters')).toBeInTheDocument();

    })

    it('should call register action with user data', async () => {

        const { getByText, getByLabelText } = renderWithRedux(<Register />, {})

        registerAction.mockImplementation(() => (dispatch) => {})

        fireEvent.change(screen.getByLabelText('Enter email address'), {target: {value:'email@email.com'}})

        fireEvent.change(screen.getByLabelText('Enter password'), {target: {value:'password'}})

        fireEvent.change(screen.getByLabelText('Enter username'), {target: {value:'username'}})

        fireEvent.submit(screen.getByText('Register'));

        await waitFor(() => {

            expect(registerAction).toHaveBeenCalledWith({
                name:'username',
                email:'email@email.com',
                password:'password'
            });

        });

    })
    
})
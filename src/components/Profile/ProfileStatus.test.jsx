import React from "react";
import {create} from 'react-test-renderer'
import ProfileStatus from "./ProfileStatus";

describe('ProfileStatus component', () => {
    test('status from props to be the State', () => {
        const component = create(<ProfileStatus status='I better' />)
        const instance = component.getInstance()
        expect(instance.state.status).toBe('I better')
    })
})
describe('user can visit the right page', () => {
    it('user can visit the right page', ()=> {
            cy.visit('http://localhost:3001')
                })
})

describe('user can see h1 that says Greetings', () => {
    it('user can see h1 that says Greetings', ()=> {
                        cy.contains('Greetings')
    })

})

    describe('user can see a button that says press me', () => {
        it('user can see a button that says press', ()=> {
                            cy.contains('Press me')
        })

})
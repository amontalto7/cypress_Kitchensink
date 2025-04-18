context('My First Test', () => {
  // beforeEach(() => {
  //     cy.visit('/commands/actions')
  //     // cy.visit('https://example.cypress.io/commands/actions')
  // })

  // it('Has an H1 on the page', () => {
  //     cy.get('h1').should('exist');
  // })

  // it('Renders the correct H1 text', () => {
  //     cy.get('h1').should('contain.text','Actions')
  // })

  // it('Renders a paragraph under the H1', () => {
  //     cy.get('.container').eq(1).find('p').should('exist') // get second container
  // })

  // it('Renders a section with the correct elements', () => {
  //     cy.get('.container').eq(2).within(()=> {
  //         cy.get('h4').should('exist');
  //         cy.get('p').should('exist');
  //     })
  // })

  // it('Correctly renders the cypress website link', () => {
  //     cy.findByText('cypress.io').should('exist')
  // })

  // it('Types into an email field', () => {
  //     cy.visit('/commands/actions')
  //     cy.findByPlaceholderText('Email').type('test@email.com')
  //     cy.wait(5000)
  //     console.log("Test is Finished")
  // })

  // Using Fixtures
  //   const token = 'abcd123';
  //   context("Fixture test", () => {

  // beforeEach(() => {
  //     cy.fixture('example').then(function (data) {
  //         this.data = data
  //         cy.log('THIS: ', this.data)
  //     })
  // })

  beforeEach(() => {
    cy.visit('/commands/actions')
  })

  it('triggers a popover on click', () => {
    cy.get('.action-btn').click()
    cy.findByText('This popover shows up on click').should('be.visible')
  })

  it('can click on different sections of the canvas', () => {
    cy.get('#action-canvas').click('top')
    cy.get('#action-canvas').click('bottomRight')
    cy.get('#action-canvas').click(80, 100)
  })

  it('can double click to edit', () => {
    cy.get('.action-div').dblclick()
    cy.get('.action-div').should('not.be.visible')
    cy.get('.action-input-hidden').should('be.visible')
  })

  it('can right click to edit', () => {
    cy.get('.rightclick-action-div').rightclick()
    cy.get('.rightclick-action-div').should('not.be.visible')
    cy.get('.rightclick-action-input-hidden').should('be.visible')
  })

  it('shows the nav links on hover', () => {
    cy.get('.dropdown-toggle').trigger('mouseover')
    cy.get('.dropdown-menu').should('be.visible')
  })


  // it('Uses fixture data in a network request', function() {
  //     cy.visit('/commands/network-requests')
  //     cy.intercept('GET','**/comments/*',this.data).as('getComment')
  //     cy.get('.network-btn').click()
  //     cy.wait('@getComment').then((res) => {
  //         cy.log('Response: ', res)
  //     })
  // })

  // it('Pulls data from a fixture', () => {
  //     cy.fixture('example').then((data) => {
  //         cy.log('DATA: ', data)
  //     })
  // })

  // it('Updates fixture data inline', () => {
  //     cy.fixture('example').then((data) => {
  //         data.email = "updated@email.com"
  //         cy.log('DATA: ', data)
  //     })
  // })

  // it('sets and gets a token in local storage', () => {
  //     cy.setLocalStorage('token',token)
  //     cy.getLocalStorage('token').should('eq',token)
  // })

  // it('overwrites the type command by using sensitive chars', () => {
  //     cy.visit('/commands/actions')
  //     cy.findByPlaceholderText('Email').type('test@email.com')
  //     cy.findByPlaceholderText('Email').type('test@email.com',{sensitive: true})

  // })
  // })



})